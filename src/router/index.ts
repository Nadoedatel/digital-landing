import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage.vue";
import ServicesPage from "@/views/ServicesPage.vue";
import WorksPage from "@/views/WorksPage.vue";
import ProcessPage from "@/views/ProcessPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import CareersPage from "@/views/CareersPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesPage,
    },
    {
      path: '/work',
      name: 'work',
      component: WorksPage,
    },
    {
      path: '/process',
      name: 'process',
      component: ProcessPage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/careers',
      name: 'careers',
      component: CareersPage,
    },
  ],
})

export default router
