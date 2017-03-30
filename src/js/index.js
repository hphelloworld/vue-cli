import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from 'modules/Index/app';
import route from '../router';
import stores from '../store';

Vue.use(Vuex);
Vue.use(VueRouter);

// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
	routes: route
});

// 创建一个 store 对象用于管理应用状态
const store = new Vuex.Store(stores);


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	render: (h) => (h(App))
});
