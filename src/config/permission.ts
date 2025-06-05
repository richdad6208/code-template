import { Permission } from '@/src/utils/common/permission';

export const permissionManager = new Permission([
    {
        name: 'admin',
        level: 0,
    },
    {
        name: 'manager',
        level: 1,
    },
    {
        name: 'user',
        level: 2,
    },
    {
        name: 'guest',
        level: 3,
    },
]);
