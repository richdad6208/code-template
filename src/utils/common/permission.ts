type PermissionObjectType = {
    name: string;
    level: number;
};

export class Permission {
    permissions: PermissionObjectType[];
    constructor(initialPermissions: PermissionObjectType[] = []) {
        this.permissions = [...initialPermissions];
    }

    add(permission: PermissionObjectType | PermissionObjectType[]) {
        if (Array.isArray(permission)) {
            permission.forEach((p) => this.add(p));
            return;
        }
        this.permissions.push(permission);
    }

    update(name: string | string[], newPermission: PermissionObjectType | PermissionObjectType[]) {
        if (
            (Array.isArray(name) && !Array.isArray(newPermission)) ||
            (!Array.isArray(name) && Array.isArray(newPermission))
        ) {
            throw new Error(
                'name과 newPermission은 둘 다 배열이거나 둘 다 배열이 아니어야 합니다.'
            );
        }
        if (Array.isArray(name) && Array.isArray(newPermission)) {
            name.forEach((n) => this.update(n, newPermission));
            return;
        }
        this.permissions = this.permissions.map((permission) =>
            permission.name === name ? { ...permission, ...newPermission } : permission
        );
    }

    remove(name: string | string[]) {
        if (Array.isArray(name)) {
            name.forEach((n) => this.remove(n));
            return;
        }
        this.permissions = this.permissions.filter((permission) => permission.name !== name);
    }

    getByName(name: string): PermissionObjectType | undefined {
        return this.permissions.find((permission) => permission.name === name);
    }

    /**
     * [권한 모두 일치해야 통과]
     * 사용자가 특정 리소스의 모든 요구 권한을 가지고 있는지 확인
     */
    hasAllPermissions(requiredPermissions: string[], userPermissions: string[]): boolean {
        return requiredPermissions.every((rp) => userPermissions.includes(rp));
    }

    /**
     * [권한 하나만 일치해도 통과]
     * 사용자가 특정 리소스의 권한 중 하나라도 가지고 있는지 확인
     */
    hasSomePermissions(requiredPermissions: string[], userPermissions: string[]): boolean {
        return requiredPermissions.some((rp) => userPermissions.includes(rp));
    }

    /**
     * [상위 권한이 하위 권한에도 접근 가능]
     */
    canAccess(requiredPermissions: string[], userPermissions: string[] | string): boolean {
        if (requiredPermissions.length === 0) return true;
        // 사용자 권한 중 가장 높은 레벨 찾기
        const userLevels = Array<string>()
            .concat(userPermissions)
            .map((up) => this.getByName(up)?.level)
            .filter((l) => l !== undefined);
        if (userLevels.length === 0) return false;
        const maxUserLevel = Math.min(...userLevels); // 숫자가 낮을수록 상위 권한

        // 요구 권한의 최소 레벨 찾기
        const requiredLevels = requiredPermissions
            .map((rp) => this.getByName(rp)?.level)
            .filter((l) => l !== undefined);
        if (requiredLevels.length === 0) return false;
        const minRequiredLevel = Math.min(...requiredLevels);

        return maxUserLevel <= minRequiredLevel; // 상위 권한이 더 낮은 숫자임 (ex. 0이 최고)
    }
}
