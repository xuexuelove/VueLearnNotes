<template>
  <div>
    <!-- <h3>{{msg}}</h3> -->
    <h4>{{$store.state.counter}}</h4>
     <h2>hello里面的相关getters内容</h2>
    <h4>{{$store.getters.powerCounter}}</h4>
    <h4>{{$store.getters.lg20Stu}}</h4>
    <h4>{{$store.getters.lgAgeStu(12)}}</h4>
  </div>
 
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App for vuex'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
