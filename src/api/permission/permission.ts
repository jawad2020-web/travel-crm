import { http } from '@/utils/http/axios';

export interface BasicResponseModel<T = any> {
  [x: string]: any;
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
 * @description: Get permission list
 */
export function getPermissionsApi(params: any) {
  return http.request({
    url: '/permissions',
    method: 'get',
    params,
  });
}
/**
 * @description: Get single permission
 */
export function getPermissionApi(id: any) {
  return http.request({
    url: `/permissions/${id}`,
    method: 'get',
  });
}

/**
 * @description: create new permission
 */
export function createPermissionApi(params: any) {
  return http.request<BasicResponseModel>(
    {
      url: '/permissions',
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
/**
 * @description: update permission
 */
export function updatePermissionApi(id: any, params: any) {
  console.log('api file response', id);
  return http.request<BasicResponseModel>(
    {
      url: `/permissions/${id}`,
      method: 'PUT',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
/**
 * @description: delete permission
 */
export function deletePermissionApi(id: any) {
  return http.request<BasicResponseModel>({
    url: `/permissions/${id}`,
    method: 'DELETE',
  });
}
