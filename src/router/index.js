import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DetailedMovieView from '../views/DetailedMovieView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title : 'Homepage'
    }
  },
  {
    path: '/movie/:id',
    name: 'DetailedMovieView',
    component: DetailedMovieView,
    meta:{
      title : 'About Movie'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from,next)=>{
  document.title = `VMovies | ${to.meta.title} `
  next()
})
export default router
