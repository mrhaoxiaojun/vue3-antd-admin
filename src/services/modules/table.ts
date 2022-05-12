import request from '@/services/axios-interceptors';
import { AxiosResponse } from 'axios';
import { TableList, EditData, UploadApi, OptionsData } from '@/types/api/table';
import { ResponseData } from '@/types/api/public';
import url from '../url';

type ConfigType<T = ResponseData> = Promise<AxiosResponse<T>>;

export const getData = (params: any): ConfigType<TableList> => {
  return request({
    url: url.tableGet,
    method: 'get',
    params,
  });
};

export const addData = (data: any): ConfigType => {
  return request({
    url: url.tableAdd,
    method: 'post',
    data,
  });
};

export const editGetData = (params: any): ConfigType<EditData> => {
  return request({
    url: url.tableEditGetData,
    method: 'get',
    params,
  });
};

export const editData = (data: any): ConfigType => {
  return request({
    url: url.tableEdit,
    method: 'post',
    data,
  });
};

export const delData = (data: any): ConfigType => {
  return request({
    url: url.tableDel,
    method: 'post',
    data,
  });
};

export const upload = (data: any): ConfigType<UploadApi> => {
  return request({
    url: url.tableUpload,
    method: 'post',
    data,
  });
};

export const options = (): ConfigType<OptionsData> => {
  return request({
    url: url.tableOptions,
    method: 'get',
  });
};
