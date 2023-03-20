import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import ListarUsuario from '../components/ListarUsuario.vue'
import CrearUsuario from '../components/CrearUsuario.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/ListarUsuario',
      name: 'ListarUsuario',
      component: ListarUsuario
    },
    {
      path: '/CrearUsuario',
      name: 'CrearUsuario',
      component: CrearUsuario
    }
    
  ]
})

export default router
