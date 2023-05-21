import { useUserStore } from '@/store/modules/user';

export function usePermission() {
  const userStore = useUserStore();

  /**
   * Check permissions
   * @param accesses
   */
  function _somePermissions(accesses: string[]) {
    return userStore.getPermissions.some((item) => {
      const { value }: any = item;
      return accesses.includes(value);
    });
  }

  /**
   * Determine whether permissions exist
   * Can be used for v-if display logic
   * */
  function hasPermission(accesses: string[]): boolean {
    if (!accesses || !accesses.length) return true;
    if (userStore.info.user_type === 'super admin') {
      return true;
    } else {
      return _somePermissions(accesses);
    }
  }

  /**
   * Whether to include all permissions specified
   * @param accesses
   */
  function hasEveryPermission(accesses: string[]): boolean {
    const permissionsList = userStore.getPermissions;
    if (Array.isArray(accesses)) {
      return permissionsList.every((access: any) => accesses.includes(access.value));
    }
    throw new Error(`[hasEveryPermission]: ${accesses} should be a array !`);
  }

  /**
   * Whether to include one of the permissions
   * @param accesses
   * @param accessMap
   */
  function hasSomePermission(accesses: string[]): boolean {
    const permissionsList = userStore.getPermissions;
    if (Array.isArray(accesses)) {
      return permissionsList.some((access: any) => accesses.includes(access.value));
    }
    throw new Error(`[hasSomePermission]: ${accesses} should be a array !`);
  }

  return { hasPermission, hasEveryPermission, hasSomePermission };
}
