<template>
  <div id="app">
    <div class="dd">
      主页
    </div>
    <img v-bind:src="logoImg">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import logo from 'assets/img/logo.png'
export default {
  data () {
    return {
      msg: 'Use Vue',
      logoImg: logo
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
