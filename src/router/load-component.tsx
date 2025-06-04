import { RouteGuard } from '@/src/components/common/route-guard';
import { lazy, Suspense, type ComponentType, type ReactNode } from 'react';

/**
 * 컴포넌트를 동적으로 로드하는 함수입니다.
 *
 * @param {Function} importComponent - 동적으로 로드할 컴포넌트를 반환하는 함수입니다.
 * @param {Array|null} [permissions=null] - 컴포넌트 접근 권한을 나타내는 배열입니다. 기본값은 null입니다. RouteGuard를 활성화 할려면 배열을 값으로 넣어야 합니다.
 * @returns {Object} element - Suspense와 RouteGuard로 감싼 동적으로 로드된 컴포넌트를 포함하는 객체입니다.
 */

export interface LoadComponentProps {
    importComponent: () => Promise<{ default: ComponentType }>;
    permissions?: string[];
    fallback?: ReactNode;
}
export const LoadComponent = ({ importComponent, fallback, permissions }: LoadComponentProps) => {
    const Component = lazy(importComponent);

    const element = (
        <Suspense fallback={fallback ?? <div>Loading...</div>}>
            <RouteGuard permissions={permissions}>
                <Component />
            </RouteGuard>
        </Suspense>
    );

    return { element };
};
