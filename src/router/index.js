import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/mitomi',
    name: 'home',
    component: HomeView,
    //重定向
    redirect:'mitomi/techno',
    children:[
      {
        path: 'techno',
        component: () => import('../views/techno/TechnoView'),
        meta: {
          title: '米To米-手机'
        }
      },
      {
        path: 'clothing',
        component:() => import('../views/clothing/ClothingView'),
        meta: {
          title: '米To米-服装'
        }
      },
      {
        path: 'food',
        component:() => import('../views/food/FoodView'),
        meta: {
          title: '米To米-食品'
        }
      },
      {
        path: 'fresh',
        component:() => import('../views/fresh/FreshView'),
        meta: {
          title: '米To米-生鲜'
        }
      },
      {
        path: 'appliance',
        component:() => import('../views/appliance/ApplianceView'),
        meta: {
          title: '米To米-家电'
        }
      },
      {
        path: 'industrialProducts',
        component:() => import('../views/industrialProducts/IndustrialProductsView'),
        meta: {
          title: '米To米-工业品'
        }
      },
    ],
  },
  {
    path: '/',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to, from, next) => {

  document.title = to.meta.title ? to.meta.title : "米To米商城";
  next();
})