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
 * @description: Get booking list
 */
export function getBookingsApi(params: any) {
  return http.request({
    url: '/bookings',
    method: 'get',
    params,
  });
}
/**
 * @description: Get single booking
 */
export function getBookingApi(id: number | undefined) {
  return http.request({
    url: `/bookings/${id}`,
    method: 'get',
  });
}

/**
 * @description: create new booking
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
 * @description: update booking
 */
export function updateBookingApi(id: number, params: any) {
  return http.request<BasicResponseModel>(
    {
      url: `/bookings/${id}`,
      method: 'PUT',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
/**
 * @description: delete booking
 */
export function deleteBookingApi(id: number) {
  return http.request<BasicResponseModel>({
    url: `/bookings/${id}`,
    method: 'DELETE',
  });
}
