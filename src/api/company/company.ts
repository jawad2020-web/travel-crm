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
export function getCompaniesApi(params: any) {
  return http.request({
    url: '/company',
    method: 'get',
    params,
  });
}

/**
 * @description: Get single shop
 */
export function getCompanyApi(companyId: any) {
  return http.request({
    url: `/company/${companyId}`,
    method: 'get',
  });
}

/**
 * @description: create new shop
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
 * @description: update shop
 */
export function updateCompanyApi(companyId: any, params: any) {
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
export function deleteCompanyApi(companyId: any) {
  return http.request<BasicResponseModel>({
    url: `/company/${companyId}`,
    method: 'DELETE',
  });
}
