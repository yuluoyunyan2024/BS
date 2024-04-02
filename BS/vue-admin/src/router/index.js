import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/IndexView.vue')
    },
    {
      path: '/Main',
      name: 'Main',
      component: () => import('../views/MainView.vue'),
      children: [
        {
          path: 'goods',
          name: 'goods',
          component: () => import('../views/GoodsView.vue')
        },
        {
          path: 'crud/:method',
          name: 'crud',
          component: () => import('../components/GoodsInfo.vue')
        },
        {
          path: 'orders',
          name: 'orders',
          component: () => import('../views/OrdersView.vue')
        },
        {
          path: 'feedback',
          name: 'feedback',
          component: () => import('../views/FeedbackView.vue')
        },
        {
          path: 'adminInfo',
          name: 'adminInfo',
          component: () => import('../views/AdminInfoView.vue')
        },
        {
          path: 'customer',
          name: 'customer',
          component: () => import('../views/CustomerView.vue')
        }
      ]
    }
  ]
})

export default router
