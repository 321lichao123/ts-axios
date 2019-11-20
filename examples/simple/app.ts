/*
 * @Author: your name
 * @Date: 2019-11-20 23:48:47
 * @LastEditTime: 2019-11-20 23:55:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-axios\examples\simple\app.ts
 */
import axios from '../../src/index'

axios({
    method: 'get',
    url: '/simple/get',
    params: {
        a: 1,
        b: 2
    }
})