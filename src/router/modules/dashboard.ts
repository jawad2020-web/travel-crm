import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { DashboardOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

const routeName = 'dashboard';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: routeName,
    redirect: '/dashboard',
    component: Layout,
    meta: {
      title: 'Dashboard',
      icon: renderIcon(DashboardOutlined),
      permissions: ['can view dashboard'],
      sort: 0,
    },
    children: [
      {
        path: '',
        name: `${routeName}`,
        meta: {
          title: 'Dashboard',
          permissions: ['can view dashboard'],
        },
        component: () => import('@/views/dashboard/console.vue'),
      },
    ],
  },
];

export default routes;
