<template>
	<div>
		<p>{{ message }}</p>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				title: '404',
			}
		},
		computed: mapState([
			'message'
		]),
		mounted: function() {
			document.title = this.title;
			this.$store.commit('MESSAGE', '404 Not Found！');
		}
	}
</script>