<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <br />
    <!-- active-class='active' -->
    <router-link to="/home" tag="button">主页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link to="/hellword">vue-helloworld</router-link>

    <!-- 代码进行路由跳转 -->
    <!-- <button @click="home">主页</button>
    <button @click="about">关于</button>
    <button @click="vue">vue-helloworld</button>-->
    <!-- 动态路由的使用   params传递参数 -->
    <router-link :to="'/user/'+userName">用户</router-link>
    <!-- query 传递参数的方式 -->
    <router-link :to="{path:'/profile',query:{id:123,name:'zhangsan'}}">档案</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userName: "tianhong"
    };
  },
  methods: {
    home() {
      this.$router.push("/home");
      // this.$router.replace('/home') 不能进行历史的后退的方法
      console.log("代码路由跳转到home");
    },
    about() {
      this.$router.push("/about");
      console.log("about");
    },
    vue() {
      this.$router.push("/hellword");
      console.log("代码跳转到的vue 的helloworld");
    },
    // 代码传递参数 params 类型
    user() {
      this.$router.push("/user" + this.userName);
    },
    profile() {
      this.$router.push({
        path: "/profile",
        query: {
          id: 123,
          name: "zhangsan"
        }
      });
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  font-size: large;
  color: yellow;
  /* background-color: brown; */
}
/* 默认的选中的clss名字 */
.router-link-active {
  background-color: red;
}
</style>
