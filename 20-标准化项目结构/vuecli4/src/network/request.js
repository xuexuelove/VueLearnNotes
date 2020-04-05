/**
 * 网络请求封装
 * 封装的目的是为了 如果axios不进行维护了以后 我们可以立马更改这个包里面的请求方便
 * 后期的维护 通过Promise封装新的网络请求就可以不用更改其他的里面的请求
 * 
 */
import axios from 'axios'

//分支测试
/**
 * 
 * 利用 axios的实例是 AxiosPromise 原型
 * 可以直接return出去
 * @param {*} config 请求参数 
 */
export default function requestByAxios(config) {
  const instance = axios.create({
    //范例--
    baseURL: 'https://httpbin.org/',
    timeout: 5000
  });
  // 添加请求拦截器
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  // 添加响应拦截器
  instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  return instance(config)
}