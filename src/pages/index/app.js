import Vue from 'vue'
import App from './app.vue'
import $ from 'jquery'
import mui from '../../assets/js/mui.min'
import '../../assets/css/mui.min.css'
new Vue({
  el: '#app',
  mounted: function(){
  	$("body").css('background','#eee');
  	mui.toast('12443');
  },
  render: h => h(App)
})
