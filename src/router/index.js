import { createRouter, createWebHistory } from 'vue-router'

const routes = [
   {
     path: '/',
     name: 'Home',
     component: ()=>import("../views/Home-Component.vue")
   },
   {
    path: '/trending',
    name: 'Trending',
    component: ()=>import("../views/Trending-Component.vue")
  },
  {
    path: '/top-rated',
    name: 'Top-Rated',
    component: ()=>import("../views/TopRated-Component.vue")
  },
  {
    path: '/popular',
    name: 'Popular',
    component: ()=>import("../views/Popular-Component.vue")
  },
  {
    path: '/upcoming',
    name: 'upcoming',
    component: ()=>import("../views/Upcoming-Component.vue")
  },
  {
    path: '/search-results',
    name: 'SearchResults',
    component: ()=>import("../views/SearchResults.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
