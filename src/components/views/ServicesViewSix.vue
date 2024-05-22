<template>
  <div class="relative min-h-screen">
    <Navbar class="navbar" />
    <div class="content-container">
      <div class=" mx-auto py-12 px-6">
        <h1 class="text-6xl font-bold mb-6">Gestión de asuntos <br/> Legales y Corporativos</h1>
        <p class="text-lg mb-8">
          Este servicio se enfoca en la gestión eficiente y estratégica de los aspectos legales y corporativos de la familia. Nuestro equipo de expertos se encarga de coordinar todos los asuntos relacionados con el cumplimiento legal, la estructura corporativa y la gestión de riesgos legales para garantizar el cumplimiento normativo y proteger los intereses de nuestros clientes.
        </p>
        <InitialChartSix/>
      </div>
    </div>
    <AdvantagesSix/> 
  
    <FrequentQuestionsSix/>
      <Ready/> <!-- Listo para alcanzar las metas -->
    <Footer class="footer" />
    <Whatsapp />
  </div>
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
/* Puedes agregar estilos específicos aquí */
</style>
