import { createRouter, createWebHistory } from 'vue-router'

import AboutRoom from '@/views/rooms/AboutRoom.vue'
import BlogRoom from '@/views/rooms/BlogRoom.vue'
import ContactRoom from '@/views/rooms/ContactRoom.vue'
import LandingRoom from '@/views/rooms/LandingRoom.vue'
import ProjectsRoom from '@/views/rooms/ProjectsRoom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LandingRoom },
    { path: '/about', component: AboutRoom },
    { path: '/projects', component: ProjectsRoom },
    { path: '/contact', component: ContactRoom },
    { path: '/blog', component: BlogRoom },
  ],
})

export default router
