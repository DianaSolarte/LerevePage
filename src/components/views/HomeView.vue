<template>
  <div class="homediv relative min-h-screen">
    <Navbar /> <!-- UBICACION NAVBAR -->

    <div class="container mx-auto flex ">
      <!-- cuadro asesoria financiera -->
      <!-- Cuadro izquierdo -->
      <div class="w-1/2 p-6">
        <p class="text-sm text-gray-500">Maximice su patrimonio con nuestro expertise</p>
        <h2 class="text-6xl font-bold mt-6 mb-8">Asesoría Financiera e Inmobiliaria para Family Office</h2>
        <p class="text-gray-700">Somos una firma especializada en proporcionar asesoramiento financiero y empresarial a su Family Office. Nuestra experiencia y compromiso nos permiten ofrecer soluciones integrales para proteger y hacer crecer su patrimonio.</p>
        <button class="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Contáctenos
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
    <div class="pasos container mx-auto text-white p-6 rounded-lg animate__backInLeft">
      <p class="text-sm">¿Cómo funciona?</p>
      <h2 class="text-2xl font-bold mt-4 mb-6">3 pasos hacia un futuro financiero sólido</h2>
      <p class="mb-6">Seguimos un proceso estructurado para garantizar que reciba la mejor atención y los mejores resultados.</p>
      
      <div class="flex space-x-6">
        <!-- Primer cuadro -->
        <div class="flex-1 bg-white text-black p-6 rounded-lg transition-all duration-300" :class="{ 'h-auto': evaluacionVisible, 'h-32': !evaluacionVisible }">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold">
              <span class="text-blue">01</span> Evaluación
            </h3>
            <button @click="evaluacionVisible = !evaluacionVisible" class="text-blue text-2xl focus:outline-none">
              {{ evaluacionVisible ? '-' : '+' }}
            </button>
          </div>
          <p v-show="evaluacionVisible" class="transition-opacity duration-300">Evaluamos su situación financiera actual para identificar sus fortalezas, debilidades, oportunidades y amenazas.</p>
        </div>
        
        <!-- Segundo cuadro -->
        <div class="flex-1 bg-white text-black p-6 rounded-lg transition-all duration-300" :class="{ 'h-auto': disenoVisible, 'h-32': !disenoVisible }">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold">
              <span class="text-blue">02</span> Diseño Estratégico
            </h3>
            <button @click="disenoVisible = !disenoVisible" class="text-blue text-2xl focus:outline-none">
              {{ disenoVisible ? '-' : '+' }}
            </button>
          </div>
          <p v-show="disenoVisible" class="transition-opacity duration-300">Seguimos un proceso estructurado para garantizar que reciba la mejor atención y los mejores resultados.</p>
        </div>
        
        <!-- Tercer cuadro -->
        <div class="flex-1 bg-white text-black p-6 rounded-lg transition-all duration-300" :class="{ 'h-auto': implementacionVisible, 'h-32': !implementacionVisible }">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold">
              <span class="text-blue">03</span> Implementación y Seguimiento
            </h3>
            <button @click="implementacionVisible = !implementacionVisible" class="text-blue text-2xl focus:outline-none">
              {{ implementacionVisible ? '-' : '+' }}
            </button>
          </div>
          <p v-show="implementacionVisible" class="transition-opacity duration-300">Implementamos la estrategia diseñada y realizamos un seguimiento continuo para ajustarla según sea necesario.</p>
        </div>
      </div>
    </div>

    <!-- CARD De SERVICIOS INTEGRALES -->
    <IntegralServices />
    <Because />
    <Ready /> <!-- Listo para alcanzar las metas -->
  </div>
  <Whatsapp /> <!-- Boton de WA -->
    <Footer /> <!-- Ubicacion FOOter -->
</template>

<script setup>
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import Form from '../layouts/Form.vue';
import Ready from '../layouts/Ready.vue';
import Whatsapp from '../layouts/Whatsapp.vue';
import IntegralServices from '../layouts/layoutHome/IntegralServices.vue';
import Because from '../layouts/layoutHome/Because.vue';

import { ref } from 'vue';

const evaluacionVisible = ref(false);
const disenoVisible = ref(false);
const implementacionVisible = ref(false);
</script>

<style scoped>


.text-blue {
  color: #1C76FF;
}

.transition-all {
  transition: all 0.3s ease;
}

.transition-opacity {
  transition: opacity 0.3s ease;
}
.pasos{
  background-color:#232323;
}

.homediv {
    margin: 20px auto; 
    max-width: 1400px; 
    
}
.pasos {
  background-color: #232323;
  border-radius: 24px; /* Agregamos el radio de borde */
}
</style>
