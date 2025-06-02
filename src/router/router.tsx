import { createBrowserRouter, type RouteObject } from 'react-router';
import { LoadComponent } from './load-component';
import App from '@/src/App';
import { boardRoutes } from '@/src/router/board-routes';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                lazy: async () =>
                    LoadComponent({
                        importComponent: () => import('@/src/components/layout/portal-layout'),
                    }),
                children: [
                    {
                        path: '/',
                        index: true,
                        lazy: async () =>
                            LoadComponent({
                                importComponent: () => import('@/src/domain/portal/main/main'),
                            }),
                    },
                ],
            },
            {
                path: '/board',
                lazy: async () =>
                    LoadComponent({
                        importComponent: () => import('@/src/domain/board/main/main'),
                    }),
                children: [...boardRoutes],
            },
        ],
    },
];

const Router = createBrowserRouter(routes);
export { Router };
