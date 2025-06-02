import { MantineProvider } from '@mantine/core';
import { Outlet } from 'react-router';
import '@mantine/core/styles.css';

export default function App() {
    return (
        <MantineProvider>
            <main>
                <Outlet />
            </main>
        </MantineProvider>
    );
}
