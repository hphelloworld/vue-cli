<template>
	<div>
		<p>{{ message }}</p>
		<img src="../../assets/img/logo.png" alt="">
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				title: 'hello',
			}
		},
		computed: mapState([
			'message'
		]),
		mounted: function() {
			document.title = this.title;
			this.$store.commit('MESSAGE', 'hello');
		}
	}
</script>