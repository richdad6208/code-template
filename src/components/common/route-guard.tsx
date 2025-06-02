import { permissionManager } from '@/src/config/permission';
import { useNavigateSearch } from '@/src/hooks/use-navigate-search';
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router';

interface RouteGuardProps {
    permissions?: string[];
    children: ReactNode;
}

export function RouteGuard({ permissions, children }: RouteGuardProps) {
    if (!permissions) return children;

    const isLogin = false;
    const role = 'user';

    const navigate = useNavigateSearch();
    const location = useLocation();

    const redirectToLogin = () => {
        const loginPath = '/login';
        navigate(
            { to: loginPath, queryParams: { redirect: location.pathname } },
            { replace: true }
        );
    };

    useEffect(() => {
        //로그인 상태가 아닐때 권한이 필요한 페이지로 접근시 로그인 페이지로 리다이렉트
        if (!isLogin && permissions?.length > 0) {
            redirectToLogin();
            return;
        }

        // 권한이 없을 때 이전 페이지로 리다이렉트
        if (permissions?.length > 0 && !permissionManager.canAccess(permissions, role)) {
            navigate({ to: '/' });
            return;
        }
    }, [location.pathname, isLogin, permissions, role]);

    return children;
}
