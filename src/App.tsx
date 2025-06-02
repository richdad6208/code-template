import { MantineProvider } from '@mantine/core';
import { Outlet } from 'react-router';
import '@mantine/core/styles.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ConfirmModal from '@/src/components/modal/confirm-modal';

export default function App() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>템플릿 코드</title>
            </Helmet>
            <MantineProvider>
                <main className="font-gothic">
                    <Outlet />
                </main>
                <ConfirmModal />
            </MantineProvider>
        </HelmetProvider>
    );
}
