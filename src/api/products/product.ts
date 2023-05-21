import { http } from '@/utils/http/axios';

export interface BasicResponseModel<T = any> {
  code: number;
  message: string;
  result: T;
}

export interface BasicPageParams {
  pageNumber: number;
  pageSize: number;
  total: number;
}

/**
 * @description: Get product list
 */
export function getProductsApi() {
  return http.request({
    url: '/products',
    method: 'get',
  });
}
/**
 * @description: Get single product
 */
export function getProductApi(productId: number) {
  return http.request({
    url: `/products/${productId}`,
    method: 'get',
  });
}

/**
 * @description: create new product
 */
export function createProductApi(params: any) {
  return http.request<BasicResponseModel>(
    {
      url: '/products',
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
/**
 * @description: update product
 */
export function updateProductApi(productId: number, params: any) {
  return http.request<BasicResponseModel>(
    {
      url: `/products/${productId}`,
      method: 'PUT',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
/**
 * @description: delete product
 */
export function deleteProductApi(productId: number) {
  return http.request<BasicResponseModel>({
    url: `/products/${productId}`,
    method: 'DELETE',
  });
}
