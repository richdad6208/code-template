import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/src/css/index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './config/query-client.ts';
import { RouterProvider } from 'react-router';
import { Router } from './router/router.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={Router} />
        </QueryClientProvider>
    </StrictMode>
);
