import { createRouter, createWebHistory } from 'vue-router'
import QuizComponent from './../views/Quiz-Component.vue'
import HomeComponent from './../views/Home-Component.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: QuizComponent
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('./../views/Contact-Component.vue')
  },
  {
    path: '/score',
    name: 'Score',
    component: () => import('./../views/Score-Component.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
