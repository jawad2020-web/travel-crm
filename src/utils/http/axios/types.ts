import { AxiosRequestConfig } from 'axios';
import { AxiosTransform } from './axiosTransform';

export interface CreateAxiosOptions extends AxiosRequestConfig {
  transform?: AxiosTransform;
  requestOptions?: RequestOptions;
  authenticationScheme?: string;
}

// upload files
export interface UploadFileParams {
  // Other parameters
  data?: Recordable;
  // file parameter interface field name
  name?: string;
  // document
  file: File | Blob;
  // file name
  filename?: string;
  [key: string]: any;
}

export interface RequestOptions {
  // request parameters are spliced ​​into url
  joinParamsToUrl?: boolean;
  // format request parameter time
  formatDate?: boolean;
  // Whether to display the prompt message
  isShowMessage?: boolean;
  // Whether to parse into JSON
  isParseToJson?: boolean;
  // successful text message
  successMessageText?: string;
  // Whether to display a success message
  isShowSuccessMessage?: boolean;
  // Whether to display failure information
  isShowErrorMessage?: boolean;
  // wrong text message
  errorMessageText?: string;
  // whether to add url
  joinPrefix?: boolean;
  // Interface address, if not filled, the default apiUrl will be used
  apiUrl?: string;
  // Request splicing path
  urlPrefix?: string;
  // Error message prompt type
  errorMessageMode?: 'none' | 'modal';
  // whether to add timestamp
  joinTime?: boolean;
  // Do not do any processing, return directly
  isTransformResponse?: boolean;
  // Whether to return the original response header
  isReturnNativeResponse?: boolean;
  // ignore duplicate requests
  ignoreCancelToken?: boolean;
  // whether to carry token
  withToken?: boolean;
}

export interface Result<T = any> {
  code: number;
  type?: 'success' | 'error' | 'warning';
  message: string;
  result?: T;
}
