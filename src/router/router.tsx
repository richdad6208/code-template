import { createBrowserRouter, type RouteObject } from 'react-router';
import { LoadComponent } from './load-component';
import App from '@src/App';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                lazy: async () => LoadComponent({ importComponent: () => import('@components/layout/portal-layout') }),
                children: [
                    {
                        path: '/',
                        index: true,
                        lazy: async () => LoadComponent({ importComponent: () => import('@portal/main/main') }),
                    },
                ],
            },
        ],
    },
];

const Router = createBrowserRouter(routes);
export { Router };
