<template>
  <div>
    <navbar/> <!-- UBICACION NAVBAR -->

    <div class="container mx-auto flex">
    <!-- cuadro asesoria financiera -->
      <!-- Cuadro izquierdo -->
      <div class="w-1/2 p-6">
        <p class="text-sm text-gray-500">Maximice su patrimonio con nuestro expertise</p>
        <h2 class="text-6xl font-bold mt-6 mb-8">Asesoría Financiera e Inmobiliaria para Family Office</h2>
        <p class="text-gray-700">Somos una firma especializada en proporcionar asesoramiento financiero y empresarial a su Family Office. Nuestra experiencia y compromiso nos permiten ofrecer soluciones integrales para proteger y hacer crecer su patrimonio.</p>
        <button class="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Contactenos
          <svg class="w-4 h-4 ml-2 -mr-1" xmlns="../../assets/Frame 14344.png" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M13.293 9l-3.147 3.146a.5.5 0 01-.708-.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 01.708-.708L13.293 7.5a2 2 0 000 2.829z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <!-- Cuadro derecho con imagen -->
      <div class="w-1/2 p-6">
        <img src="../../assets/Frame 14344.png" alt="Imagen" class="rounded-lg">
      </div>
    </div>

    <!-- CUADRO DE 3 PASOS "3 pasos hacia un futuro financiero sólido" -->
    <div class="container mx-auto bg-black text-white p-6 rounded-lg">
      <p class="text-sm">¿Cómo funciona?</p>
      <h2 class="text-2xl font-bold mt-4 mb-6">3 pasos hacia un futuro financiero sólido</h2>
      <p class="mb-6">Seguimos un proceso estructurado para garantizar que reciba la mejor atención y los mejores resultados.</p>
      
      <div class="flex space-x-6">
        <!-- Primer cuadro -->
        <div class="flex-1 bg-white text-black p-6 rounded-lg">
          <h3 class="text-xl font-bold mb-4">01 Evaluación</h3>
          <p v-show="evaluacionVisible">Evaluamos su situación financiera actual para identificar sus fortalezas, debilidades, oportunidades y amenazas.</p>
          <button @click="evaluacionVisible = !evaluacionVisible" class="mt-4 bg-transparent border border-black px-3 py-1 rounded hover:bg-black hover:text-white">
            {{ evaluacionVisible ? '-' : '+' }}
          </button>
        </div>
        
        <!-- Segundo cuadro -->
        <div class="flex-1 bg-white text-black p-6 rounded-lg">
          <h3 class="text-xl font-bold mb-4">02 Diseño Estratégico</h3>
          <p v-show="disenoVisible">Seguimos un proceso estructurado para garantizar que reciba la mejor atención y los mejores resultados.</p>
          <button @click="disenoVisible = !disenoVisible" class="mt-4 bg-transparent border border-black px-3 py-1 rounded hover:bg-black hover:text-white">
            {{ disenoVisible ? '-' : '+' }}
          </button>
        </div>
        
        <!-- Tercer cuadro -->
        <div class="flex-1 bg-white text-black p-6 rounded-lg">
          <h3 class="text-xl font-bold mb-4">03 Implementación y Seguimiento</h3>
          <p v-show="implementacionVisible">Implementamos la estrategia diseñada y realizamos un seguimiento continuo para ajustarla según sea necesario.</p>
          <button @click="implementacionVisible = !implementacionVisible" class="mt-4 bg-transparent border border-black px-3 py-1 rounded hover:bg-black hover:text-white">
            {{ implementacionVisible ? '-' : '+' }}
          </button>
        </div>
      </div>
    </div>
    <!-- CARD De SERVICIOS INTEGRALES -->


    
 <Ready></Ready> <!-- Listo para alcanzar las metas -->
 <Whatsapp/><!-- Boton de WA -->
 <Footer/><!-- Ubicacion FOOter -->
  </div>
</template>

<script setup>
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import Form from '../layouts/Form.vue';
import Ready from '../layouts/Ready.vue';
import Whatsapp from '../layouts/Whatsapp.vue';

import { ref } from 'vue';

const evaluacionVisible = ref(false);
const disenoVisible = ref(false);
const implementacionVisible = ref(false);

</script>

<style scoped>
.container {
  margin-top: 4rem;
}
</style>

