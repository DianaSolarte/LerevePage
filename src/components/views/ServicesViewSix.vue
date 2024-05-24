<template>
  <div class="servicessix relative min-h-screen">
    <Navbar class="navbar" />
    <div class="content-container">
      <div class="mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Gestión de asuntos <br class="hidden lg:inline"/> Legales y Corporativos</h1>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl mb-8">
          Este servicio se enfoca en la gestión eficiente y estratégica de los aspectos legales y corporativos de la familia. Nuestro equipo de expertos se encarga de coordinar todos los asuntos relacionados con el cumplimiento legal, la estructura corporativa y la gestión de riesgos legales para garantizar el cumplimiento normativo y proteger los intereses de nuestros clientes.
        </p>
        <InitialChartSix/>
      </div>
    </div>
    <AdvantagesSix/> 
    <FrequentQuestionsSix/>
    <Ready/> <!-- Listo para alcanzar las metas -->
  </div>
  <Footer class="footer" />
  <Whatsapp />
</template>

<script>
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import Whatsapp from '../layouts/Whatsapp.vue';
import InitialChartSix from '../../components/layouts/layoutServicesSix/InitialChartSix.vue';
import AdvantagesSix from '../../components/layouts/layoutServicesSix/AdvantagesSix.vue';
import FrequentQuestionsSix from '../../components/layouts/layoutServicesSix/FrequentQuestionsSix.vue';
import Ready from '../layouts/Ready.vue';

export default {
  name: 'ServicesViewSix',
  components: {
    Navbar,
    Footer,
    Whatsapp,
    InitialChartSix,
    AdvantagesSix, 
    FrequentQuestionsSix,
    Ready,
  },
}
</script>

<style scoped>
.servicessix {
  margin: 20px auto; 
  max-width: 1400px; 
}
</style>
