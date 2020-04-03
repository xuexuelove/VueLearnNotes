<!--  -->
<template>
  <div>
    <h2>这是我的profile</h2>
    <!-- route的query对象传递函数 -->
    <h4>{{$route.query.id}}</h4>
    <h4>{{$route.query.name}}</h4>
    <h4>{{$route.query}}</h4>
  </div>
</template>

<script>
export default {
  name : 'profile',
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