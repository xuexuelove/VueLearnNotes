<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="btclick">发送axios请求</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "components/HelloWorld.vue";
import request from "network/request";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    btclick() {
      request({
        url: "/ip"
      })
        .then(res => {
          console.log("请求成功");
          alert(res.data);
          console.log(res.data);
          
        })
        .catch(erro => {
          console.log("请求失败" + erro);
        });
    }
  }
};
</script>
