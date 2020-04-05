<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <button @click="btclick">发送axios请求</button>
    <button @click="btclick1">发送axios请求dele</button>
    <button @click="btclick2">发送axios请求get</button>
    <button @click="btclick3">发送axios并发请求</button>
    <br />
    <h3>将网络请求进行封装方便后期维护</h3>
    <button @click="btRequest">封装网络请求的调用回调函数request1</button>
    <br />
    <button @click="btRequest2">封装网络请求的调用对象回调函数request2</button><br>
    <button @click="byPromisRequst">封装网络请求的bypromise</button><br>
    <button @click="byInstancePromise">封装网络请求的axios实例的原型</button>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
import { request1, request2,requestByPromise,requestByAxios} from "@/network/request";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    btclick() {
      this.$axios({
        method: "get",
        url: "https://httpbin.org/ip",
        params: {
          id: 123,
          name: "tianhong"
        }
      })
        .then(res => {
          alert(res.data.origin);
          console.log(res.data);

          // if (res.data.status == 1) {
          //   console.log(res.data)
          // } else {
          //   this.$message(res.data.msg);
          // }
        })
        .catch(error => {});
    },

    btclick1() {
      this.$axios({
        method: "delete",
        url: "https://httpbin.org/delete"
        // data: {
        //   user : 'tianhong',
        //   passwd:'tianhong'
        // }
      })
        .then(res => {
          console.log("-----------");
          console.log(res.data);

          for (const key in res.data) {
            console.log(res.data[key]);
          }
        })
        .catch(error => {});
    },

    btclick2() {
      this.$axios.get("https://httpbin.org/ip").then(res => {
        console.log(res.data);
      });
    },

    btclick3() {
      alert("--------");
      const getIP = () => {
        this.$axios.get("https://httpbin.org/ip");
      };
      const getHeaders = () => {
        this.$axios.get("https://httpbin.org/headers");
      };

      this.$axios.all([getIP(), getHeaders()]).then(
        this.$axios.spread(function(Ip, Headers) {
          console.log(Ip);
          console.log(Headers);
        })
      );
    },
    // request1封装网络请求的调用
    btRequest() {
      request1(
        {
          url: "/ip",
          params: {
            id: 123,
            name: "tianhong"
          }
        },
        function(result) {
          console.log(result.data);
        },
        function(error) {
          console.log("请求失败" + error);
        }
      );
    },
      // request2封装网络请求的调用
    btRequest2() {
      request2({
        baseConfig: {
          url: "/ip"
        },
        success: res => {
          console.log("请求成功,数据\t" + res.data);
          console.log(res.data);
          
        },
        error: msg => {
          console.log("请求失败,失败信息" + msg);
        }
      });
    },
    byPromisRequst(){
       requestByPromise({
         url:'/ip'
       }).then((res)=>{
         console.log('请求成功');
         console.log(res.data);
         
       }).catch(error=>{
         console.log('请求失败');
         console.log(error);
         
         
       })
    },

    byInstancePromise(){
        requestByAxios({
          url:'/ip'
        }).then(res=>{
          console.log('请求成功');
          console.log(res.data);
        }).catch(error=>{
          console.log('请求失败');
          console.log(error);     
        })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
