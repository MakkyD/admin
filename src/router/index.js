import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Newbooking from '../views/Newbooking.vue'
import Viewbooking from '../views/Viewbooking.vue'
import Roomdetails from '../views/Roomdetails.vue'
import ViewRooms from '../views/ViewRooms.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Newbooking',
    name: 'Newbooking',
    component: Newbooking
  },
  {
    path:'/Viewbooking',
    name: 'Viewbooking',
    component: Viewbooking
  },
  {
    path: '/Roomdetails',
    name: 'Roomdetails',
    component: Roomdetails
  },
  {
    path: '/ViewRooms',
    name: 'ViewRooms',
    component: ViewRooms
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
