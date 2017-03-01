import Vue from 'vue'
import App from './app.vue'
import $ from 'jquery'
import mui from '../../assets/js/mui.min'
import '../../assets/css/mui.min.css'
new Vue({
  el: '#app',
  mounted: function(){
  	$("body").css('background','#fff');
  	mui.toast('143');
  },
  render: h => h(App)
})
