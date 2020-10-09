import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stake',
    name: 'Stake',
    component: () => import(/* webpackChunkName: "Stake" */ '../views/Stake.vue')
  },
  {
    path: '/stake/:id',
    name: 'StakeId',
    component: () => import(/* webpackChunkName: "StakeId" */ '../views/StakeId.vue')
  },
  {
    path: '/voting',
    name: 'Voting',
    component: () => import(/* webpackChunkName: "Voting" */ '../views/Voting.vue')
  },
  {
    path: '/deliver',
    name: 'Deliver',
    component: () => import(/* webpackChunkName: "Voting" */ '../views/Deliver.vue')
  },
  {
    path: '/tokenomics',
    name: 'Tokenomics',
    component: () => import(/* webpackChunkName: "Voting" */ '../views/Tokenomics.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
