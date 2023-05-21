import { defineStore } from 'pinia';
import { ResultEnum } from '@/enums/httpEnum';
import {
  getProductsApi,
  getProductApi,
  createProductApi,
  updateProductApi,
  deleteProductApi,
} from '@/api/products/product';

export type IProductState = {
  title: string;
  product_sku: string;
  slug: string;
  description: string;
  short_description: string;
  price: number;
  sale_price: number;
  is_active: boolean;
  product_images: string;
  products: [];
};

export const useProductStore = defineStore({
  id: 'app-products',
  state: (): IProductState => ({
    title: '',
    product_sku: '',
    slug: '',
    description: '',
    short_description: '',
    price: 10,
    sale_price: 0,
    is_active: true,
    product_images: '',
    products: [],
  }),
  getters: {},
  actions: {
    setTitle(title: string) {
      this.title = title;
    },
    setDescription(des: string) {
      this.description = des;
    },
    setProducts(products: any) {
      this.products = products;
    },
    async getProducts() {
      const response = await getProductsApi();
      const { result, code } = response;
      if (code === ResultEnum.SUCCESS) {
        this.setProducts(result);
      }
      return response;
    },
    async getProduct(productId: number) {
      const response = await getProductApi(productId);
      const { result, code } = response;
      if (code === ResultEnum.SUCCESS) {
        this.setTitle(result);
        this.setDescription(result);
      }
      return response;
    },
    async createProduct(params: any) {
      const response = await createProductApi(params);
      const { result, code } = response;
      if (code === ResultEnum.SUCCESS) {
        this.setTitle(result);
        this.setDescription(result);
      }
      return response;
    },
    async updateProduct(productId: number, params: any) {
      const response = await updateProductApi(productId, params);
      const { result, code } = response;
      if (code === ResultEnum.SUCCESS) {
        this.setTitle(result);
        this.setDescription(result);
      }
      return response;
    },
    async deleteProduct(productId: number) {
      const response = await deleteProductApi(productId);
      const { result, code } = response;
      if (code === ResultEnum.SUCCESS) {
        this.setTitle(result);
        this.setDescription(result);
      }
      return response;
    },
  },
});
