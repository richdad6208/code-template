import { LoadComponent } from '@/src/router/load-component';
import { RouteObject } from 'react-router';

export const boardRoutes: RouteObject[] = [
    {
        path: '',
        index: true,
        lazy: async () =>
            LoadComponent({
                importComponent: () => import('@/src/domain/board/main/main'),
            }),
    },
    {
        path: 'free',
        lazy: async () =>
            LoadComponent({
                importComponent: () => import('@/src/domain/board/free/free-main'),
            }),
    },
];
