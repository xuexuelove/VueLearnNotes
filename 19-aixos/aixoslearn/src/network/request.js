/**
 * 网络请求封装
 * 封装的目的是为了 如果axios不进行维护了以后 我们可以立马更改这个包里面的请求方便
 * 后期的维护 通过Promise封装新的网络请求就可以不用更改其他的里面的请求
 * 
 */
import axios from 'axios'



/**
 * 
 * 利用 axios的实例是 AxiosPromise 原型
 * 可以直接return出去
 * @param {*} config 请求参数 
 */
export function requestByAxios(config) {
  const instance = axios.create({
    baseURL: 'https://httpbin.org/',
    timeout: 5000
  });
  return instance(config)
}


/**
 *  通过promise进行封装需求
 * @param {*} config 请求设置
 */
export function requestByPromise(config) {
  const instance = axios.create({
    baseURL: 'https://httpbin.org/',
    timeout: 5000
  });

  return new Promise((resovle, reject) => {
    instance(config)
      .then((res) => {
        resovle(res)
      }).catch(error => {
        reject(error)
      })
  })
}

/**
 * 第一种封装方式
 * @param {*} config  请求设置
 * @param {*} success  成功回调函数
 * @param {*} error 失败回调函数
 */
export function request1(config, success, error) {
  const instance = axios.create({
    baseURL: 'https://httpbin.org/',
    timeout: 5000
  });

  instance(config)
    .then(res => {
      success(res)
    })
    .catch(res => {
      error(res)
    })
}

/**
 * 网络封装的第2中实现方式
 * @param {*} config  config是个对象 里面包含config对象== success erro回调函数
 * config baseConfig 
 * suceess 回调函数
 * error 回调函数
 */
export function request2(config) {
  const instance = axios.create({
    baseURL: 'https://httpbin.org/',
    timeout: 6000
  });
  instance(config.baseConfig)
    .then(res => {
      config.success(res)
    })
    .catch(error => {
      config.error(error)
    })
}

