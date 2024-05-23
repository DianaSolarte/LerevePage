<template>
<div class="servicesfour relative min-h-screen">
<navbar/>
  <div class="container mx-auto px-4">
    <div class="py-8">
    <p class="text-black-800">XXXXX</p>
      <h1 class="text-6xl font-bold mb-4">Gestión de Inversiones</h1>
      <p class="text-black-800">Gestión de Inversiones se enfoca en ayudarle a administrar tus activos financieros de manera eficiente y efectiva. Nuestro equipo de expertos en inversiones está dedicado a proporcionarle asesoramiento personalizado y soluciones adaptadas a sus objetivos financieros y tolerancia al riesgo. Ya sea que estés buscando aumentar su patrimonio, generar ingresos pasivos o diversificar tu cartera, estamos aquí para ayudarle a tomar decisiones informadas y estratégicas</p>
    </div>
    <InitialChartFour/>
  </div>
    <AdvantagesFour/> 
    <FrequentQuestionsFour/>
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
import InitialChartFour from '../../components/layouts/layoutServicesFour/InitialChartFour.vue';
import AdvantagesFour from '../../components/layouts/layoutServicesFour/AdvantagesFour.vue';
import FrequentQuestionsFour from '../../components/layouts/layoutServicesFour/FrequentQuestionsFour.vue';

export default {
  name: 'servicesViewFour',
  components: {
    Navbar,
    InitialChartFour,
    AdvantagesFour, 
    FrequentQuestionsFour,
    Footer,
    Ready,
    Whatsapp,
  },
}
</script>

<style>
.servicesfour {
    margin: 20px auto; 
    max-width: 1400px; 
    
}
</style>
