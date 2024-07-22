import { createRouter, createWebHistory } from 'vue-router'
import PageLayout from '../components/Layout/PageLayout.vue'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    children: [
      {
        component: HomePage,
        name: 'homePage',
        path: '/',
      },
    ],
    component: PageLayout,
    path: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
