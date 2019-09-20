/* 
包含n个接口请求函数的模块
每个函数的返回值都是promise对象
*/
import ajax from './ajax'

/* 
根据经纬度获取位置详情
*/
export const reqAddress = (latitude, longitude) => ajax ({
  // method: 'GET',
  url: `/position/${latitude},${longitude}`
})

/* 
另一种写法
ajax(`/position/${latitude},${longitude}`)
ajax.get(`/position/${latitude},${longitude}`)
*/