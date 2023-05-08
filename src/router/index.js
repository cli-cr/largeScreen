import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/ai'
    },
    {
      // 大屏首页（懒加载的方式引入路由）
      path: '/ai',
      name: 'ai',
      component: () => import('../views/AIIndex/index.vue')
    },
  ]
})
