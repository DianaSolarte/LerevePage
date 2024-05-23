<template>
<div class="servicestwo relative min-h-screen">
<navbar/>
  <div class="container mx-auto px-4">
    <div class="py-8">
    <p class="text-black-800">xxxx</p>
      <h1 class="text-6xl font-bold mb-4">Gestión Inmobiliaria</h1>
      <p class="text-black-800">Gestión experta de sus activos inmobiliarios para maximizar su valor y rentabilidad.</p>
    </div>
    <InitialChartTwo/>
  </div>
    <AdvantagesTwo/> 
    <FrequentQuestionsTwo/>
  <ready/>
 
<Whatsapp/>
  </div>
   <Footer/>
</template>

<script>
import Navbar from '../layouts/Navbar.vue';
import Ready from '../layouts/Ready.vue';
import Footer from '../layouts/Footer.vue';
import Whatsapp from '../layouts/Whatsapp.vue';
import InitialChartTwo from '../../components/layouts/layoutServicesTwo/InitialChartTwo.vue';
import AdvantagesTwo from '../../components/layouts/layoutServicesTwo/AdvantagesTwo.vue';
import FrequentQuestionsTwo from '../../components/layouts/layoutServicesTwo/FrequentQuestionsTwo.vue';

export default {
  name: 'servicesViewOne',
  components: {
    Navbar,
    InitialChartTwo,
    AdvantagesTwo, 
    FrequentQuestionsTwo,
    Footer,
    Ready,
    Whatsapp,
  },
}
</script>

<style>
.servicestwo {
    margin: 20px auto; 
    max-width: 1400px; 
    
}
</style>