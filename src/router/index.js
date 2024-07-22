import { createRouter, createWebHistory } from 'vue-router'
import PageLayout from '../components/Layout/PageLayout.vue'
import HomePage from '../views/HomePage.vue'
import NotFound from '../views/NotFound.vue'
import PosterBuilder from '../views/PosterBuilder.vue'

const routes = [
  {
    children: [
      {
        component: HomePage,
        name: 'homePage',
        path: '/',
      },
      {
        component: PosterBuilder,
        name: 'posterBuilder',
        path: '/build-a-poster',
      },
    ],
    component: PageLayout,
    path: '/',
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const scrollBehavior = function (to, _from, savedPosition) {
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
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior,
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
