<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <h1>
      <a href="https://vuex.vuejs.org/zh/guide/" target="__blank">Vuex官网</a>
    </h1>
    <h2>app 内容</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCountType(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <button @click="updateInfo">响应式修改(添加 删除)信息的属性</button>
    <button @click="asyncUpdateInfo">异步修改（dev-tools可监测）信息的属性</button>
    <h3>info{{$store.state.info}}</h3>
    <h2>App里面的相关getters内容</h2>
    <h4>{{$store.getters.powerCounter}}</h4>
    <h4>{{$store.getters.lg20Stu}}</h4>
    <h4>{{$store.getters.lg20StuLength}}</h4>
    <label for>参数化设置age大小</label>
    <h4>{{$store.getters.lgAgeStu(12)}}</h4>
    <h4>modules的使用</h4>
    <h4>moduleA : {{$store.state.a.name}} ===state</h4>
    <button @click="appModuleUpdateName">module--mutations的使用</button>
    <h4>moduleA : {{$store.getters.fullName}}====getters</h4>
    <h4>moduleA : {{$store.getters.fullName1}}====getters 复用</h4>
    <h4>moduleA : {{$store.getters.fullName2}}=====getters引用主模块的state</h4>
      <button @click="asynsUpateName">acitons--module异步的使用</button>
    <h2>HelloWorld 内容</h2>
    <hr />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  methods: {
    add() {
      this.$store.commit("increment");
    },
    sub() {
      this.$store.commit("decrement");
    },
    // mutation 传参数
    addCount(count) {
      // mutation payload 负载
      // 普通提交风格
      this.$store.commit("incrementCount", count);
    },
    // mutation 传参数
    addCountType(count) {
      // mutation payload 负载
      // payload提交风格
      this.$store.commit({
        type: "incrementCountType",
        count
      });
    },
    addStudent() {
      // mutation payload 负载
      const stu = { id: 108, name: "tianhong", age: 30 };
      this.$store.commit("pushStudent", stu);
    },
    //响应添加store里面没有的属性
    updateInfo(){
      this.$store.commit('updateStoreInfo')
    },
    asyncUpdateInfo(){
      // 普通武回调通知的异步调用
      // this.$store.dispatch('aUpdateInfo','我是payload')

      /**
       * 异步调用回调通知 修改完成
       * 1:通过回调函数实现
       * 2:通过promise实现
       */
      // 第一种实现方式
       this.$store.dispatch('aUpdateInfo',{
         msg :'我是携带的信息',
         success: result=>{
           console.log(result);  
         }
       }
      )
       // 第二种实现方式 promise 实现
      //  this.$store.dispatch('aUpdateInfo','我是携带的信息--promise').then(result=>console.log(result));
      
        
    },

    appModuleUpdateName(){
      this.$store.commit({
        type : 'updateName',
        newName:'lisi'
      })
    },
    asynsUpateName(){
      this.$store.dispatch('asynsUpateName','wangwu').then(result=>alert(result))
    }
    
  }
};
</script>

<style>
</style>
