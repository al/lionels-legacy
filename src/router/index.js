import { createRouter, createWebHistory } from 'vue-router'
import PageLayout from '../components/Layout/PageLayout.vue'
import HomePage from '../views/HomePage.vue'
import HomePage1 from '../views/HomePage1.vue'
import HomePage2 from '../views/HomePage2.vue'
import PosterMaker from '../views/PosterMaker.vue'

const routes = [
  {
    path: '/',
    children: [
      {
        component: HomePage,
        name: 'homePage',
        path: '/',
      },
      // FIXME: Remove.
      //
      {
        component: HomePage1,
        name: 'homePage1',
        path: '/home1',
      },
      // FIXME: Remove.
      //
      {
        component: HomePage2,
        name: 'homePage2',
        path: '/home2',
      },
      {
        component: PosterMaker,
        name: 'posterMaker',
        path: '/poster-maker',
      },
    ],
    component: PageLayout,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.querySelector(to.hash)
          if (element) {
            const style = window.getComputedStyle(element)
            const scrollMarginTop = parseInt(style.scrollMarginTop, 10) || 0

            resolve({
              behavior: 'smooth',
              el: to.hash,
              top: scrollMarginTop,
            })
          } else {
            resolve({ left: 0, top: 0 })
          }
        }, 300)
      })
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
