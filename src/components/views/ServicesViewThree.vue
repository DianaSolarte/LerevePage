<template>
  <div class="servicesthree relative min-h-screen">
    <Navbar/>
    <div class="container mx-auto px-4">
      <div class="py-8">
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-black-800">XXXXX</p>
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Administración del Family Office</h1>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-black-800">El servicio de Administración del Family Office se centra en la gestión integral de los activos financieros y no financieros de familias adineradas o de alto patrimonio neto. Nuestro equipo de expertos se encarga de coordinar todas las actividades financieras, legales y administrativas necesarias para preservar y hacer crecer el patrimonio familiar, así como para facilitar la consecución de los objetivos financieros y no financieros de la familia.</p>
      </div>
      <InitialChartThree/>
    </div>
    <AdvantagesThree/> 
    <FrequentQuestionsThree/>
    <Ready/>
    <Whatsapp/>
  </div>
  <Footer/>
</template>

<script>
import Navbar from '../layouts/Navbar.vue';
import Ready from '../layouts/Ready.vue';
import Footer from '../layouts/Footer.vue';
import Whatsapp from '../layouts/Whatsapp.vue';
import InitialChartThree from '../../components/layouts/layoutServicesThree/InitialChartThree.vue';
import AdvantagesThree from '../../components/layouts/layoutServicesThree/AdvantagesThree.vue';
import FrequentQuestionsThree from '../../components/layouts/layoutServicesThree/FrequentQuestionsThree.vue';

export default {
  name: 'servicesViewThree',
  components: {
    Navbar,
    InitialChartThree,
    AdvantagesThree, 
    FrequentQuestionsThree,
    Footer,
    Ready,
    Whatsapp,
  },
}
</script>

<style>
.servicesthree {
  margin: 20px auto; 
  max-width: 1400px; 
}
</style>
