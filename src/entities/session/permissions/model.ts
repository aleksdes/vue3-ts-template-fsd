import { defineStore } from 'pinia';
import { computed, ComputedRef } from 'vue';
import { configuringRoleAccess, PERMISSION } from './config.ts';

type RoleName = keyof typeof configuringRoleAccess;

interface Permission {
  /**
   * Определение доступных разрешений пользователя
   */
  readonly allowed: ComputedRef<Record<keyof typeof PERMISSION, boolean>>
}

/**
 * Использовать контроль разрешений
 */
export const usePermissions = defineStore(
  'permissions',
  (): Permission => {
    const userRole = computed(
      // todo: сделать ссылку на роль пользователя
      ():RoleName => 'hrRole' ?? 'guestRole',
    );

    const allowed = computed(
      ():Record<keyof typeof PERMISSION, boolean> => {
        const permissionList = <[keyof typeof PERMISSION, PERMISSION][]>Object.entries(PERMISSION);

        return permissionList.reduce((
          previousValue,
          [name, perm],
        ) => {
          const isAllowed:boolean = configuringRoleAccess[userRole.value].has(perm);

          return {
            ...previousValue,
            [name]: isAllowed,
          };
        }, <Record<keyof typeof PERMISSION, boolean>>{});
      },
    );

    return {
      allowed,
    };
  },
);
