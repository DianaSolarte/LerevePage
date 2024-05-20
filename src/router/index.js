import { createRouter, createWebHistory } from 'vue-router';
// Importar componentes
import HomeView from '../components/views/HomeView.vue';
import Navbar from '../components/layouts/Navbar.vue';
import Footer from '../components/layouts/Footer.vue';
import Form from '../components/layouts/Form.vue';
import FormView from '../components/views/FormView.vue';
import TycView from '../components/views/TycView.vue';
import AttributionsView from '../components/views/AttributionsView.vue';
import ManagementView from '../components/views/ManagementView.vue'; // Importar ManagementView
import WhatsApp from '../components/layouts/Whatsapp.vue'; 

import '../style.css';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomeView,
        Navbar: Navbar,
        Footer: Footer,
        WhatsApp: WhatsApp,
      },
    },
    {
      path: '/form',
      name: 'Form',
      components: {
        default: FormView,
        Form: Form,
        Navbar: Navbar,
        Footer: Footer,
        WhatsApp: WhatsApp,
      },
    },
    {
      path: '/tyc',
      name: 'TycView',
      components: {
        default: TycView,
        Navbar: Navbar,
        Footer: Footer,
        WhatsApp: WhatsApp,
      },
    },
    {
      path: '/attributions',
      name: 'AttributionsView',
      components: {
        default: AttributionsView,
        Navbar: Navbar,
        Footer: Footer,
        WhatsApp: WhatsApp,
      },
    },
    {
      path: '/management',
      name: 'ManagementView',
      components: {
        default: ManagementView,
        Navbar: Navbar,
        Footer: Footer,
        WhatsApp: WhatsApp,
      },
    },
  ],
});

export default router;
