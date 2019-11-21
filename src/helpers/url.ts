/*
 * @Author: your name
 * @Date: 2019-11-21 00:16:52
 * @LastEditTime: 2019-11-22 00:11:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-axios\src\helpers\url.ts
 */
import { isDate, isPlainObject } from './util'

function encode(val: string): string {
	return encodeURIComponent(val)
		.replace(/%40/g, '@')
		.replace(/%3A/gi, ':')
		.replace(/%24/g, '$')
		.replace(/%2C/gi, ',')
		.replace(/%20/g, '+')
		.replace(/%5B/gi, '[')
		.replace(/%5D/gi, ']')
}

export function buildURL(url: string, params?: any): string {
	// 如果参数不存在就不需要拼接参数
	if (!params) {
		return url
	}

	const parts: string[] = []
	// 遍历对象获取值
	Object.keys(params).forEach(key => {
		const val = params[key]
		// 判断值是不是空
		if (val === null || typeof val === 'undefined') {
			return
		}
		let values = []
		// 判断值是不是数组
		if (Array.isArray(val)) {
			values = val
			key += '[]'  // 表示参数是一个数组
		} else {
			values = [val]
		}
		values.forEach(val => {
			if (isDate(val)) { 			// 判断是不是日期对象
				val = val.toISOString()
			} else if (isPlainObject(val)) {	// 判断是不是对象
				val = JSON.stringify(val)
			}
			// 将参数和值拼接成参数字符串放到数组中
			parts.push(`${encode(key)}=${encode(val)}`)
		})
	})
	// 将参数数组拼接成参数格式的字符串
	let serializedParams = parts.join('&')

	if (serializedParams) {
		// 去除hash表示的#字符
		const markIndex = url.indexOf('#')
		if (markIndex !== -1) {
			url = url.slice(0, markIndex)
		}

		url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
	}

	return url
}
