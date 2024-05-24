<template>
  <div class="relative min-h-screen">
    <Navbar class="navbar" />
    <div class="content-container">
      <div class="max-w-3xl mx-auto py-8 px-4 md:py-12 md:px-6">
        <h1 class="text-3xl md:text-4xl font-bold mb-6">Gestión de asuntos legales y corporativos</h1>
        <p class="text-base md:text-lg mb-8">
          Este servicio se enfoca en la gestión eficiente y estratégica de los aspectos legales y corporativos de la familia. Nuestro equipo de expertos se encarga de coordinar todos los asuntos relacionados con el cumplimiento legal, la estructura corporativa y la gestión de riesgos legales para garantizar el cumplimiento normativo y proteger los intereses de nuestros clientes.
        </p>
        <InitialChart />
      </div>
    </div>
    <Footer class="footer" />
    <Whatsapp />
  </div>
</template>

<script>
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import Whatsapp from '../layouts/Whatsapp.vue';
import InitialChart from '../../components/layouts/layoutManagement/InitialChart.vue';

export default {
  name: 'ManagementView',
  components: {
    Navbar,
    Footer,
    Whatsapp,
    InitialChart,
  },
}
</script>

<style scoped>

</style>
