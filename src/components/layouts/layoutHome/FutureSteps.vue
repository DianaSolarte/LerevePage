<template>
  <div class="future text-white p-8 rounded-lg">
    <!-- CUADRO DE 3 PASOS "3 pasos hacia un futuro financiero sólido" -->
    <div class="pasos container mx-auto text-white p-6 rounded-lg animate__backInLeft">
      <p class="text-sm">¿Cómo funciona?</p>
      <h2 class="text-2xl font-bold mt-4 mb-6">3 pasos hacia un futuro financiero sólido</h2>
      <p class="mb-6">Seguimos un proceso estructurado para garantizar que reciba la mejor atención y los mejores resultados.</p>
      
      <div class="steps-container flex flex-wrap space-x-4">
        <!-- Primer cuadro -->
        <div class="step flex-1 bg-white text-black p-4 rounded-lg transition-all duration-300" :class="{ 'h-auto': evaluacionVisible, 'h-32': !evaluacionVisible }">
          <div class="flex justify-between items-center mb-2">
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
        <div class="step flex-1 bg-white text-black p-4 rounded-lg transition-all duration-300" :class="{ 'h-auto': disenoVisible, 'h-32': !disenoVisible }">
          <div class="flex justify-between items-center mb-2">
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
        <div class="step flex-1 bg-white text-black p-4 rounded-lg transition-all duration-300" :class="{ 'h-auto': implementacionVisible, 'h-32': !implementacionVisible }">
          <div class="flex justify-between items-center mb-2">
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
  </div>
</template>

<script setup>
import { ref } from 'vue';

const evaluacionVisible = ref(false);
const disenoVisible = ref(false);
const implementacionVisible = ref(false);
</script>

<style scoped>
.future {
  background-color: #232323;
  border-radius: 24px;
}

.steps-container {
  display: flex;
  flex-wrap: wrap;
}

.step {
  flex: 1 1 30%;
  margin-bottom: 1rem;
  padding: 1rem; /* Reduce padding for a thinner appearance */
}

.text-blue {
  color: #1C76FF;
}

@media screen and (max-width: 1024px) {
  .steps-container {
    flex-direction: column;
    align-items: center;
  }

  .step {
    flex: 1 1 100%;
    margin-bottom: 1rem;
    margin-left: 0; /* Ensure no margin on the left */
    margin-right: 0; /* Ensure no margin on the right */
  }
}
</style>
