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
 * @description: Get shop list
 */
export function getShopsApi() {
  return http.request({
    url: '/company',
    method: 'get',
  });
}
/**
 * @description: Get single shop
 */
export function getShopApi(companyId: any) {
  return http.request({
    url: `/company/${companyId}`,
    method: 'get',
  });
}

/**
 * @description: create new shop
 */
export function createShopApi(params: any) {
  return http.request<BasicResponseModel>(
    {
      url: '/company',
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
/**
 * @description: update shop
 */
export function updateShopApi(companyId: any, params: any) {
  return http.request<BasicResponseModel>(
    {
      url: `/company/${companyId}`,
      method: 'PUT',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
/**
 * @description: delete shop
 */
export function deleteShopApi(companyId: any) {
  return http.request<BasicResponseModel>({
    url: `/company/${companyId}`,
    method: 'DELETE',
  });
}
