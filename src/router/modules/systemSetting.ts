import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { SettingsOutline } from '@vicons/ionicons5';
import { renderIcon } from '@/utils/index';

const routeName = 'system';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/system',
    name: routeName,
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
        name: `${routeName}_user`,
        meta: {
          title: 'Users',
          permissions: ['can view users'],
        },
        component: () => import('@/views/users/index.vue'),
      },
      {
        path: 'profile',
        name: `${routeName}_profile`,
        meta: {
          title: 'Profile',
          permissions: ['can view Profile'],
          hidden: true,
        },
        component: () => import('@/views/users/Profile.vue'),
      },
      {
        path: 'role',
        name: `${routeName}_role`,
        meta: {
          title: 'Roles',
          permissions: ['can view roles'],
        },
        component: () => import('@/views/roles/index.vue'),
      },
      {
        path: 'permission',
        name: `${routeName}_permission`,
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
