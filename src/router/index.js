import { createRouter, createWebHashHistory } from 'vue-router';
// Importar componentes
import HomeView from '../components/views/HomeView.vue';
import Navbar from '../components/layouts/Navbar.vue';
import Footer from '../components/layouts/Footer.vue';
import Form from '../components/layouts/Form.vue';
import FormView from '../components/views/FormView.vue';
import TycView from '../components/views/TycView.vue';
import AttributionsView from '../components/views/AttributionsView.vue';
import ServicesSix from '../components/views/ServicesViewSix.vue'; 
import ServicesViewOne from '../components/views/ServicesViewOne.vue'; // Importar la nueva vista
import AboutUs from '../components/views/AboutUs.vue'; // Importar la nueva vista
import WhatsApp from '../components/layouts/Whatsapp.vue'; 
import ServicesViewTwo from '../components/views/ServicesViewTwo.vue'; // Importar la nueva viTwo
import ServicesViewThree from '../components/views/ServicesViewThree.vue';
import ServicesViewFour from '../components/views/ServicesViewFour.vue';
import ServicesViewFive from '../components/views/ServicesViewFive.vue';

import '../style.css';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '#/', /* RUTA  */
      name: 'Home',
      components: {
        default: HomeView,
        Navbar: Navbar,
        Footer: Footer,
        WhatsApp: WhatsApp,
      },
    },
    {
      path: '#/form',
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
      path: '#/tyc',
      name: 'TycView',
      components: {
        default: TycView,
        Navbar: Navbar,
        Footer: Footer,
        WhatsApp: WhatsApp,
      },
    },
    {
      path: '#/attributions',
      name: 'AttributionsView',
      components: {
        default: AttributionsView,
        Navbar: Navbar,
        Footer: Footer,
        WhatsApp: WhatsApp,
      },
    },
    {
      path: '#/servicessix',
      name: 'ServicesviewSix',
      components: {
        default: ServicesSix,
        Navbar: Navbar,
        Footer: Footer,
        WhatsApp: WhatsApp,
      },
    },
    {
      path: '#/servicesone',
      name: 'ServicesViewOne',
      components: {
        default: ServicesViewOne,
        Navbar: Navbar,
        Footer: Footer,
        WhatsApp: WhatsApp,
      },
    },
    {
      path: '#/servicestwo',
      name: 'ServicesViewTwo',
      components: {
        default: ServicesViewTwo,
        Navbar: Navbar,
        Footer: Footer,
        WhatsApp: WhatsApp,
      },
    },
    {
      path: '#/servicesthree',
      name: 'ServicesViewThree',
      components: {
        default: ServicesViewThree,
        Navbar: Navbar,
        Footer: Footer,
        WhatsApp: WhatsApp,
      },
    },
    {
      path: '#/servicesfour',
      name: 'ServicesViewFour',
      components: {
        default: ServicesViewFour,
        Navbar: Navbar,
        Footer: Footer,
        WhatsApp: WhatsApp,
      },
    },
    {
      path: '#/servicesfive',
      name: 'ServicesViewFive',
      components: {
        default: ServicesViewFive,
        Navbar: Navbar,
        Footer: Footer,
        WhatsApp: WhatsApp,
      },
    },
    {
      path: '#/aboutus', // Ruta para la vista "AboutUs"
      name: 'AboutUs',
      components: {
        default: AboutUs,
        Navbar: Navbar,
        Footer: Footer,
       
        WhatsApp: WhatsApp,
      },
    },
  ],
});

export default router;
