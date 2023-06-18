import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { CartOutline } from '@vicons/ionicons5';
import { renderIcon } from '@/utils/index';

const routeName = 'hotel';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/hotel',
    name: routeName,
    redirect: '/hotel/list',
    component: Layout,
    meta: {
      title: 'Hotels',
      icon: renderIcon(CartOutline),
      permissions: ['can view hotels menu'],
      sort: 3,
    },
    children: [
      {
        path: 'list',
        name: `${routeName}_list`,
        meta: {
          title: 'Hotels',
          permissions: ['can view hotels'],
        },
        component: () => import('@/views/hotels/index.vue'),
      },
      {
        path: 'add',
        name: `${routeName}_add`,
        meta: {
          title: 'Add Hotel',
          permissions: ['can view add hotel'],
          hidden: true,
        },
        component: () => import('@/components/hotels/AddHotel.vue'),
      },
      {
        path: 'update/:id',
        name: `${routeName}_update`,
        meta: {
          title: 'Update hotel',
          permissions: ['can view update hotel'],
          hidden: true,
        },
        component: () => import('@/components/hotels/EditHotel.vue'),
      },
      {
        path: 'room',
        name: `${routeName}_room`,
        meta: {
          title: 'Rooms',
          permissions: ['can view room'],
        },
        component: () => import('@/views/rooms/index.vue'),
      },
    ],
  },
];

export default routes;
