import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { ShopOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils';

const routeName = 'company';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/company',
    name: routeName,
    redirect: '/company/list',
    component: Layout,
    meta: {
      title: 'Company',
      icon: renderIcon(ShopOutlined),
      permissions: ['can view company'],
      sort: 2,
    },
    children: [
      {
        path: 'list',
        name: `${routeName}_list`,
        meta: {
          title: 'Company',
          permissions: ['can view company'],
        },
        component: () => import('@/views/company/index.vue'),
      },
    ],
  },
];

export default routes;
