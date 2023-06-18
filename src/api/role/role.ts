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
export function getRolesApi(params: any) {
  return http.request({
    url: '/roles',
    method: 'get',
    params,
  });
}
/**
 * @description: Get single role
 */
export function getRoleApi(id: number | undefined) {
  return http.request({
    url: `/roles/${id}`,
    method: 'get',
  });
}

/**
 * @description: create new role
 */
export function createRoleApi(params: any) {
  return http.request<BasicResponseModel>(
    {
      url: '/roles',
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
export function updateRoleApi(id: number, params: any) {
  return http.request<BasicResponseModel>(
    {
      url: `/roles/${id}`,
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
export function deleteRoleApi(id: number) {
  return http.request<BasicResponseModel>({
    url: `/roles/${id}`,
    method: 'DELETE',
  });
}
