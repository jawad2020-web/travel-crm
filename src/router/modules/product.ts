import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { CartOutline } from '@vicons/ionicons5';
import { renderIcon } from '@/utils/index';

const routeName = 'product';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/product',
    name: routeName,
    redirect: '/product/list',
    component: Layout,
    meta: {
      title: 'Product',
      icon: renderIcon(CartOutline),
      permissions: ['can view products'],
      sort: 3,
    },
    children: [
      {
        path: 'list',
        name: `${routeName}_list`,
        meta: {
          title: 'Product',
          permissions: ['can view products'],
        },
        component: () => import('@/views/products/index.vue'),
      },
    ],
  },
];

export default routes;
