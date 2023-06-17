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
 * @description: Get hotel list
 */
export function getHotelsApi(params: any) {
  return http.request({
    url: '/hotels',
    method: 'get',
    params,
  });
}
/**
 * @description: Get single hotel
 */
export function getHotelApi(id: any) {
  return http.request({
    url: `/hotels/${id}`,
    method: 'get',
  });
}

/**
 * @description: create new hotel
 */
export function createHotelApi(params: any) {
  return http.request<BasicResponseModel>(
    {
      url: '/hotels',
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
/**
 * @description: update hotel
 */
export function updateHotelApi(id: any, params: any) {
  return http.request<BasicResponseModel>(
    {
      url: `/hotels/${id}`,
      method: 'PUT',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
/**
 * @description: delete hotel
 */
export function deleteHotelApi(id: any) {
  return http.request<BasicResponseModel>({
    url: `/hotels/${id}`,
    method: 'DELETE',
  });
}
