<template>
  <div class="homediv relative min-h-screen">
    <Navbar /> <!-- UBICACION NAVBAR -->

    <div class="container mx-auto flex flex-col lg:flex-row">
      <!-- Cuadro izquierdo -->
      <div class="left-content w-full lg:w-1/2 p-6">
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
      <div class="right-content w-full lg:w-1/2 p-6">
        <img src="../../assets/Frame 14344.png" alt="Imagen" class="rounded-lg">
      </div>
    </div>
    <FutureSteps/>
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
import FutureSteps from '../layouts/layoutHome/FutureSteps.vue';

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

.pasos {
  background-color: #232323;
}

/* Ajustes de responsive para móviles y tabletas */
@media screen and (max-width: 1024px) {
  .homediv {
    margin: 10px auto;
    max-width: 800px;
  }

  .container {
    flex-direction: column;
  }

  .left-content {
    order: 1;
  }

  .right-content {
    order: 4;
    margin-top: 1rem;
  }

  .left-content p.text-sm {
    order: 2;
    font-size: 0.875rem; /* Reducir el tamaño del texto */
  }

  .left-content h2 {
    order: 3;
    font-size: 2rem; /* Reducir el tamaño del título */
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .left-content p.text-gray-700 {
    order: 4;
    margin-bottom: 1rem;
  }
}
</style>
