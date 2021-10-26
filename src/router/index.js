import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../components/login.vue'),
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/home',
    redirect: '/welcome',
    meta: {
      title: '首页'
    },
    component: () => import('../components/home.vue'),
    children: [
      {
        path: '/welcome',
        component: () => import('../components/Welcome.vue'),
      },
      {
        path:'/users',
        component:()=> import ('../components/user/Users.vue')
      }
    ]
  },
  {
    path: '/page2',
    meta: {
      title: '关于'
    },
    component: () => import('../components/page2.vue')
  },
  {
    path: '/user/:id',
    meta: {
      title: '用户'
    },
    component: () => import('../components/user.vue')
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next();
  //获取token
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/login');
  next();
})
export default router