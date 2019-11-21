/*
 * @Author: your name
 * @Date: 2019-11-22 00:34:54
 * @LastEditTime: 2019-11-22 00:40:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-axios\src\helpers\date.ts
 */
import { isPlainObject } from "./util";

export function transformRequest(data: any): any {
    // 判断是否是普通对象
    if (isPlainObject(data)) {
        return JSON.stringify(data);
    }
    return data
}