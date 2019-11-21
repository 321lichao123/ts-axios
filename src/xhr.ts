/*
 * @Author: your name
 * @Date: 2019-11-20 23:30:38
 * @LastEditTime: 2019-11-22 02:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-axios\src\xhr.ts
 */
import { AxiosRequestConfig } from './types'
import { head } from 'shelljs';

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get', headers } = config;

  const request = new XMLHttpRequest();

  request.open(method.toUpperCase(), url, true);

  Object.keys(headers).forEach((name) => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name];
    } else {
      request.setRequestHeader(name, headers[name]);
    }
  })

  request.send(data);
}
