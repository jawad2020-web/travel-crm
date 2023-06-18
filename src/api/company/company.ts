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
 * @description: Get companies list
 */
export function getCompaniesApi(params: any) {
  return http.request({
    url: '/company',
    method: 'get',
    params,
  });
}

/**
 * @description: Get single company
 */
export function getCompanyApi(id: number | undefined) {
  return http.request({
    url: `/company/${id}`,
    method: 'get',
  });
}

/**
 * @description: create new company
 */
export function createCompanyApi(params: any) {
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
 * @description: update company
 */
export function updateCompanyApi(id: number, params: any) {
  return http.request<BasicResponseModel>(
    {
      url: `/company/${id}`,
      method: 'PUT',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}

/**
 * @description: delete company
 */
export function deleteCompanyApi(id: number) {
  return http.request<BasicResponseModel>({
    url: `/company/${id}`,
    method: 'DELETE',
  });
}
