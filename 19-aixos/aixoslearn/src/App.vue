<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h3><a href="http://www.axios-js.com/zh-cn/docs/" target="_blank">axios中文学习文档</a></h3>
    <h3><a href="https://httpbin.org/" target="_blank">测试接口的网站httpbin</a></h3>
    <router-link to='/home'>首页</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
