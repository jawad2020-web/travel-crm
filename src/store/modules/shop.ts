import { defineStore } from 'pinia';
import { ResultEnum } from '@/enums/httpEnum';
import {
  getShopsApi,
  getShopApi,
  createShopApi,
  updateShopApi,
  deleteShopApi,
} from '@/api/company/company';

export type IShopState = {
  shops: [];
  shop_name: string;
  shop_phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  shop_logo: string;
};

export const useShopStore = defineStore({
  id: 'app-shop',
  state: (): IShopState => ({
    shops: [],
    shop_name: '',
    shop_phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    shop_logo: '',
  }),
  getters: {},
  actions: {
    setName(name: any) {
      this.shop_name = name;
    },
    setShops(name: any) {
      this.shop_name = name;
    },
    async getShops() {
      const response = await getShopsApi();
      const { result, code } = response;
      if (code === ResultEnum.SUCCESS) {
        this.setShops(result);
      }
      return response;
    },
    async getShop(shopId: number) {
      const response = await getShopApi(shopId);
      const { result, code } = response;
      if (code === ResultEnum.SUCCESS) {
        this.setName(result);
      }
      return response;
    },
    async createShop(params: any) {
      const response = await createShopApi(params);
      const { result, code } = response;
      if (code === ResultEnum.SUCCESS) {
        this.setName(result);
      }
      return response;
    },
    async updateShop(shopId: number, params: any) {
      const response = await updateShopApi(shopId, params);
      const { result, code } = response;
      if (code === ResultEnum.SUCCESS) {
        this.setName(result);
      }
      return response;
    },
    async deleteShop(shopId: number) {
      const response = await deleteShopApi(shopId);
      const { result, code } = response;
      if (code === ResultEnum.SUCCESS) {
        this.setName(result);
      }
      return response;
    },
  },
});
