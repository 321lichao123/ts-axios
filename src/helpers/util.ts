/*
 * @Author: your name
 * @Date: 2019-11-21 00:21:03
 * @LastEditTime: 2019-11-21 02:11:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-axios\src\helpers\util.ts
 */
const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// export function isObject (val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    (to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
