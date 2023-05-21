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
 * @description: Get role list
 */
export function getBookingsApi(params: any) {
  return http.request({
    url: '/bookings',
    method: 'get',
    params,
  });
}
/**
 * @description: Get single role
 */
export function getBookingApi(id: any) {
  return http.request({
    url: `/bookings/${id}`,
    method: 'get',
  });
}

/**
 * @description: create new role
 */
export function createBookingApi(params: any) {
  return http.request<BasicResponseModel>(
    {
      url: '/bookings',
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
/**
 * @description: update role
 */
export function updateBookingApi(bookingId: any, params: any) {
  return http.request<BasicResponseModel>(
    {
      url: `/bookings/${bookingId}`,
      method: 'PUT',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
/**
 * @description: delete role
 */
export function deleteBookingApi(bookingId: any) {
  return http.request<BasicResponseModel>({
    url: `/bookings/${bookingId}`,
    method: 'DELETE',
  });
}
