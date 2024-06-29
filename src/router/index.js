import { createRouter, createWebHistory } from 'vue-router'
import PageLayout from '../components/Layout/PageLayout.vue'
import HomePage0628 from '../views/HomePage0628.vue'
import HomePage0625 from '../views/HomePage0625.vue'
import HomePage0624a from '../views/HomePage0624a.vue'
import HomePage0624b from '../views/HomePage0624b.vue'
import HomePage0620 from '../views/HomePage0620.vue'
import NotFound from '../views/NotFound.vue'
import PosterMaker from '../views/PosterMaker.vue'

const routes = [
  {
    path: '/',
    children: [
      {
        component: HomePage0628,
        name: 'homePage',
        path: '/',
      },
      {
        component: HomePage0628,
        name: 'homePage0628',
        path: '/home-0628',
      },
      {
        component: HomePage0625,
        name: 'homePage0625',
        path: '/home-0625',
      },
      {
        component: HomePage0624a,
        name: 'homePage0624a',
        path: '/home-0624a',
      },
      {
        component: HomePage0624b,
        name: 'homePage0624b',
        path: '/home-0624b',
      },
      {
        component: HomePage0620,
        name: 'homePage0620',
        path: '/home-0620',
      },
      {
        component: PosterMaker,
        name: 'posterMaker',
        path: '/poster-maker',
      },
    ],
    component: PageLayout,
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
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

router.beforeEach((to, from, next) => {
  const redirectPath = sessionStorage.getItem('redirectPath')
  if (redirectPath) {
    sessionStorage.removeItem('redirectPath')
    next(redirectPath)
  } else {
    next()
  }
})

export default router
