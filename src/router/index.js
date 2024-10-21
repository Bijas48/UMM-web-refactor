import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AwardsView from '@/views/AwardsView.vue'
import PerformanceView from '@/views/PerformanceView.vue'
import MagazineView from '@/views/MagazineView.vue'
import NotFoundPageView from '../views/NotFoundPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Official Website - UMM'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'About | UMM'
      }
    },
    {
      path: '/awards',
      name: 'awards',
      component: AwardsView,
      meta: {
        title: 'Awards | UMM'
      }
    },
    {
      path: '/performance',
      name: 'performance',
      component: PerformanceView,
      meta: {
        title: 'Performance | UMM'
      }
    },
    {
      path: '/magazine',
      name: 'magazine',
      component: MagazineView,
      meta: {
        title: 'Digital Magazines | UMM'
      }
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundPageView,
      meta: {
        title: 'Sorry Not Found the Page'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
