/*
 * @Author: your name
 * @Date: 2019-11-20 23:23:15
 * @LastEditTime: 2019-11-22 02:00:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-axios\src\index.ts
 */
import { AxiosRequestConfig } from './types';
import xhr from './xhr';
import { buildURL } from "./helpers/url";
import { transformRequest } from "./helpers/date";
import { processHeaders } from './helpers/header';

function axios(config: AxiosRequestConfig) {
  processConfig(config);
  xhr(config)
}

// 处理config函数
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config);
  config.headers = transformHeaders(config);
  config.data = transformRequestData(config);
}

// 处理URL方法
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config;
  return buildURL(url, params);
}

// 处理请求体body数据
function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data);
}

// 处理haeders
function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config;
  return processHeaders(headers, data);
}

export default axios
