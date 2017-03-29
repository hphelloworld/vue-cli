import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import $ from 'jquery'
import App from './app.vue'
import route from '../../routes';
import stores from '../../store';
import mui from '../../assets/js/mui.min'
import '../../assets/css/mui.min.css'

Vue.use(Vuex);
Vue.use(VueRouter);

// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
	routes: route
});

// 创建一个 store 对象用于管理应用状态
const store = new Vuex.Store(stores);

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})