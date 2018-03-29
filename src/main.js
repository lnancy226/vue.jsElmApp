import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// 1.引入路由组件
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

// 2.定义路由(routes)，components还可以是Vue.extend()创建的
const routes = [{
        path: '/',
        redirect: '/goods'
    },
    {
        path: '/goods',
        component: goods
    },
    {
        path: '/ratings',
        component: ratings
    },
    {
        path: '/seller',
        component: seller
    }
];
// 3.创建路由实例
const router = new VueRouter({
    // ES6缩写语法，相当于routes:routes
    routes,
    linkActiveClass: 'active'
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
// 4.创建vue实例并挂载
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

// 打开网址定位的页面
// router.go('/goods');