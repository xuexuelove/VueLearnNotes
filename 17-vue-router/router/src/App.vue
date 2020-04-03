<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <router-link to="/home">主页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/vue">vue-helloworld</router-link>
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
body{
  font-size: large;
  color: yellow;
  /* background-color: brown; */
}
</style>
