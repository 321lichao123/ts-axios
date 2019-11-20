/*
 * @Author: your name
 * @Date: 2019-11-20 23:30:38
 * @LastEditTime: 2019-11-20 23:39:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-axios\src\xhr.ts
 */
import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get' } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  request.send(data)
}
