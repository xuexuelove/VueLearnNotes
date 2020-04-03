<!--  -->
<template>
  <div>
    <h2>我是用户</h2>
    <p>我是用户嘿嘿呵呵</p>
    <h2>用户名字：{{$route.params.userName}}</h2>
    <h2>用户名字：{{showName}}</h2>
  </div>
</template>

<script>
export default {
  name: "user",
  computed: {
    showName(){
      // 获取当前活跃的route 而非router ---$route 和 $router 区别
      return this.$route.params.userName
    }
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>