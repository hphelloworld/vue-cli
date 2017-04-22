<template>
  <div class="app">
    {{message}}
    <br>
    <a href="index.html">首页</a>
    <a href="user.html">用户中心</a>
  </div>
</template>
<style>
  
</style>
<script >
  export default {
    data() {
      return {
        message: '用户中心!'
      };
    }
  };
</script>
