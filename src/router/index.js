import { createRouter, createWebHistory } from 'vue-router'

import AboutRoom from '@/views/rooms/AboutRoom.vue'
import BlogRoom from '@/views/rooms/BlogRoom.vue'
import ContactRoom from '@/views/rooms/ContactRoom.vue'
import LandingRoom from '@/views/rooms/LandingRoom.vue'
import ProjectsRoom from '@/views/rooms/ProjectsRoom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'landing',
      path: '/',
      component: LandingRoom,
    },
    {
      name: 'about',
      path: '/about',
      component: AboutRoom,
    },
    {
      name: 'projects',
      path: '/projects',
      component: ProjectsRoom,
    },
    {
      name: 'contact',
      path: '/contact',
      component: ContactRoom,
    },
    {
      name: 'blog',
      path: '/blog',
      component: BlogRoom,
    },
  ],
})

export default router
