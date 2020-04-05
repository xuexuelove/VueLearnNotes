import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Axios,
  render: h => h(App)
})

Axios({   
  method: 'get',
  // url: 'https://httpbin.org/headers',
  url: 'https://httpbin.org/get',
  // data: params
})
.then(res => {  
  // console.log(res);
  // for (const key in res.data.headers) {
  //   console.log(res.data.headers[key]);
    
  // }
  // if (res.data.status == 1) {
  //   console.log(res.data)
  // } else {
  //   this.$message(res.data.msg);
  // }
})
.catch(error => {});