import { Random } from 'mockjs';
import { resultSuccess } from '../_util';

const consoleInfo = {
  visits: {
    dayVisits: Random.float(10000, 99999, 2, 2),
    rise: Random.float(10, 99),
    decline: Random.float(10, 99),
    amount: Random.float(99999, 999999, 3, 5),
  },
  saleroom: {
    weekSaleroom: Random.float(10000, 99999, 2, 2),
    amount: Random.float(99999, 999999, 2, 2),
    degree: Random.float(10, 99),
  },
  orderLarge: {
    weekLarge: Random.float(10000, 99999, 2, 2),
    rise: Random.float(10, 99),
    decline: Random.float(10, 99),
    amount: Random.float(99999, 999999, 2, 2),
  },
  volume: {
    weekLarge: Random.float(10000, 99999, 2, 2),
    rise: Random.float(10, 99),
    decline: Random.float(10, 99),
    amount: Random.float(99999, 999999, 2, 2),
  },
};

export default [
  {
    url: '/api/dashboard/console',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(consoleInfo);
    },
  },
];
