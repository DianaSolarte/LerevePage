<template>
<div class="servicesfive relative min-h-screen">
<navbar/>
  <div class="container mx-auto px-4">
    <div class="py-8">
    <p class="text-black-800">XXXXX</p>
      <h1 class="text-6xl font-bold mb-4">Planificación para la Gobernanza</h1>
      <p class="text-black-800">Nuestro servicio puede ayudarle a establecer una estructura de gobierno efectiva para su familia. Nos especializamos en brindar asesoría para desarrollar políticas, procedimientos y sistemas que promuevan una gestión eficiente y transparente, para la toma de decisiones</p>
    </div>
    <InitialChartFive/>
  </div>
    <AdvantagesFive/> 
    <FrequentQuestionsFive/>
  <ready/>

  </div>
    <Footer/>
<Whatsapp/>
</template>

<script>
import Navbar from '../layouts/Navbar.vue';
import Ready from '../layouts/Ready.vue';
import Footer from '../layouts/Footer.vue';
import Whatsapp from '../layouts/Whatsapp.vue';
import InitialChartFive from '../../components/layouts/layoutServicesFive/InitialChartFive.vue';
import AdvantagesFive from '../../components/layouts/layoutServicesFive/AdvantagesFive.vue';
import FrequentQuestionsFive from '../../components/layouts/layoutServicesFive/FrequentQuestionsFive.vue';

export default {
  name: 'servicesViewFive',
  components: {
    Navbar,
    InitialChartFive,
    AdvantagesFive, 
    FrequentQuestionsFive,
    Footer,
    Ready,
    Whatsapp,
  },
}
</script>

<style>
.servicesfive {
    margin: 20px auto; 
    max-width: 1400px; 
    
}
</style>
