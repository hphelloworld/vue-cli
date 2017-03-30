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