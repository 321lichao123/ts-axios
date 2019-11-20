/*
 * @Author: your name
 * @Date: 2019-11-20 23:23:15
 * @LastEditTime: 2019-11-20 23:37:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-axios\src\index.ts
 */
import { AxiosRequestConfig } from './types'
import xhr from './xhr'

function axios(config: AxiosRequestConfig) {
  xhr(config)
}

export default axios
