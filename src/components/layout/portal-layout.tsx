import { Header } from '@/src/components/layout/portal/header';
import { Outlet } from 'react-router';

export default function PortalLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
