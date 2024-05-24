<template>
  <div class="servicesOne relative min-h-screen">
    <Navbar/>
    <div class="container mx-auto px-4 py-8">
      <h1 class="webL_titulo_grande font-bold mb-4">Asesoría Financiera Integral</h1>
      <p class="text-base sm:text-lg md:text-xl text-black-800 pb-6">Realizamos un análisis exhaustivo de la situación financiera de la familia, teniendo en cuenta sus activos, pasivos, flujos de efectivo y objetivos financieros a corto y largo plazo.</p>
      <InitialChartOne/>
    </div>
    <AdvantagesOne/> 
    <FrequentQuestionsOne/>
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
import InitialChartOne from '../../components/layouts/layoutServicesOne/InitialChartOne.vue';
import AdvantagesOne from '../../components/layouts/layoutServicesOne/AdvantagesOne.vue';
import FrequentQuestionsOne from '../../components/layouts/layoutServicesOne/FrequentQuestionsOne.vue';

export default {
  name: 'servicesViewOne',
  components: {
    Navbar,
    InitialChartOne,
    AdvantagesOne, 
    FrequentQuestionsOne,
    Footer,
    Ready,
    Whatsapp,
  },
}
</script>

<style scoped>
.servicesOne {
  margin: 20px auto; 
  max-width: 1400px; 
}
@media screen and (max-width: 320px) {
  h1 {
    font-size: 40px;
  }
}
</style>
