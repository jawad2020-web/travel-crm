import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { SettingsOutline } from '@vicons/ionicons5';
import { renderIcon } from '@/utils/index';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/system',
    name: 'System',
    redirect: '/system/menu',
    component: Layout,
    meta: {
      title: 'System Settings',
      permissions: ['can view system setting'],
      icon: renderIcon(SettingsOutline),
      sort: 1,
    },
    children: [
      {
        path: 'user',
        name: 'system_user',
        meta: {
          title: 'Users',
          permissions: ['can view users'],
        },
        component: () => import('@/views/users/index.vue'),
      },
      {
        path: 'role',
        name: 'system_role',
        meta: {
          title: 'Roles',
          permissions: ['can view roles'],
        },
        component: () => import('@/views/roles/index.vue'),
      },
      {
        path: 'permission',
        name: 'system_permission',
        meta: {
          title: 'Permissions',
          permissions: ['can view permissions'],
        },
        component: () => import('@/views/permissions/index.vue'),
      },
    ],
  },
];

export default routes;
