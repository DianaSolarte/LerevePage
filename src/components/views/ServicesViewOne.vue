<template>
<div>
<navbar/>
  <div class="container mx-auto px-4">
    <div class="py-8">
      <h1 class="text-6xl font-bold mb-4">Análisis Integral de la Situación Financiera</h1>
      <p class="text-black-800">Realizamos un análisis exhaustivo de la situación financiera de la familia, teniendo en cuenta sus activos, pasivos, flujos de efectivo y objetivos financieros a corto y largo plazo.</p>
    </div>
    <InitialChartOne/>
  </div>
    <AdvantagesOne/> 
    <FrequentQuestionsOne/>
  <ready/>
  <Footer/>
<Whatsapp/>
  </div>
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

<style>
/* Estilos personalizados si es necesario */
</style>
