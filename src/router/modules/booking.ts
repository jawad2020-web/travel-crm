import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { ShopOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils';

const routeName = 'booking';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/booking',
    name: routeName,
    redirect: '/booking/list',
    component: Layout,
    meta: {
      title: 'Bookings',
      icon: renderIcon(ShopOutlined),
      permissions: ['can view booking'],
      sort: 2,
    },
    children: [
      {
        path: 'list',
        name: `${routeName}_list`,
        meta: {
          title: 'Bookings',
          permissions: ['can view booking'],
        },
        component: () => import('@/views/bookings/index.vue'),
      },
      {
        path: 'add-booking',
        name: `add-${routeName}`,
        meta: {
          title: 'Add Booking',
          permissions: ['can view add booking'],
        },
        component: () => import('@/views/bookings/addBooking.vue'),
      },
    ],
  },
];

export default routes;
