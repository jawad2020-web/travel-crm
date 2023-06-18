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
 * @description: Get room list
 */
export function getRoomsApi(params: any) {
  return http.request({
    url: '/rooms',
    method: 'get',
    params,
  });
}
/**
 * @description: Get single room
 */
export function getRoomApi(id: number | undefined) {
  return http.request({
    url: `/rooms/${id}`,
    method: 'get',
  });
}

/**
 * @description: create new room
 */
export function createRoomApi(params: any) {
  return http.request<BasicResponseModel>(
    {
      url: '/rooms',
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
/**
 * @description: update room
 */
export function updateRoomApi(id: number, params: any) {
  return http.request<BasicResponseModel>(
    {
      url: `/rooms/${id}`,
      method: 'PUT',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
/**
 * @description: delete room
 */
export function deleteRoomApi(id: number) {
  return http.request<BasicResponseModel>({
    url: `/hotels/${id}`,
    method: 'DELETE',
  });
}
