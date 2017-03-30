<template>
	<div id="app">
		<p>首页</p>
		<br>
		<a href="index.html">首页</a>
		<a href="user.html">用户中心</a>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	};
</script>

<style>
	a{
		display: flex;
		box-shadow: 0 0 5px rgba(0,0,0,.3);
		transform: translateX(20px)
	}
</style>