<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <h2>app 里面的counter</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
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
    }
  }
};
</script>

<style>
</style>
