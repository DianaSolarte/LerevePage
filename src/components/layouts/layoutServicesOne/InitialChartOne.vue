<template>
  <div class="futuro p-8 pt-8 rounded-lg text-white">
    <div class="flex flex-col items-center mb-8">
      <!-- Icono azul con blanco -->
      <div class="bg-blue-500 p-4 rounded-full">
        <img src="../../../assets/Frame 14249.png" class="h-10 w-10 text-white" alt="Icono" />
      </div>
      <h1 class="text-3xl font-bold mt-4 text-center">Tome el control de su futuro financiero</h1>
      <h2 class="text-xl mt-2 text-center">Hay muchos beneficios de la planificación financiera, incluyendo:</h2>
    </div>
    
    <div class="flex flex-col md:flex-row justify-around">
      <!-- Primer cuadro -->
      <div class="bg-white text-blue-500 p-6 rounded-lg flex flex-col items-start shadow-lg w-full md:w-1/3 mb-6 md:mb-0 mx-2">
        <div class="relative w-32 h-32 mb-4">
          <img src="../../../assets/Ellipse 4.png" class="w-full h-full rounded-full" alt="Imagen 1" />
          <div class="absolute top-0 left-0 w-full h-full"></div>
        </div>
        <div class="flex items-center w-full mb-4">
          <h3 class="text-4xl font-bold" style="color: #1C76FF;">01</h3>
          <div class="flex-grow ml-4 h-px bg-blue-500"></div>
        </div>
        <h4 class="text-xl font-semibold mb-2">Asesoramiento personalizado</h4>
        <p class="text-left text-black mb-4">Nuestros expertos financieros trabajan directamente con usted para comprender sus objetivos financieros y diseñar estrategias adaptadas a sus necesidades específicas.</p>
      </div>
      
      <!-- Segundo cuadro -->
      <div class="bg-white text-blue-500 p-6 rounded-lg flex flex-col items-start shadow-lg w-full md:w-1/3 mb-6 md:mb-0 mx-2">
        <div class="relative w-32 h-32 mb-4">
          <img src="../../../assets/Ellipse 5.png" class="w-full h-full rounded-full" alt="Imagen 2" />
          <div class="absolute top-0 left-0 w-full h-full"></div>
        </div>
        <div class="flex items-center w-full mb-4">
          <h3 class="text-4xl font-bold" style="color: #1C76FF;">02</h3>
          <div class="flex-grow ml-4 h-px bg-blue-500"></div>
        </div>
        <h4 class="text-xl font-semibold mb-2">Análisis Profundo</h4>
        <p class="text-left text-black mb-4">Realizamos un análisis exhaustivo de su situación financiera actual y desarrollamos soluciones a medida para maximizar el rendimiento de su patrimonio.</p>
      </div>
      
      <!-- Tercer cuadro -->
      <div class="bg-white text-blue-500 p-6 rounded-lg flex flex-col items-start shadow-lg w-full md:w-1/3 mb-6 md:mb-0 mx-2">
        <div class="relative w-32 h-32 mb-4">
          <img src="../../../assets/Ellipse 5 (1).png" class="w-full h-full rounded-full" alt="Imagen 3" />
          <div class="absolute top-0 left-0 w-full h-full"></div>
        </div>
        <div class="flex items-center w-full mb-4">
          <h3 class="text-4xl font-bold" style="color: #1C76FF;">03</h3>
          <div class="flex-grow ml-4 h-px bg-blue-500"></div>
        </div>
        <h4 class="text-xl font-semibold mb-2">Planificación Integral</h4>
        <p class="text-left text-black mb-4">Desde la gestión de inversiones hasta la planificación tributaria y la gestión del riesgo, ofrecemos un enfoque integral para optimizar su patrimonio y alcanzar sus metas financieras a largo plazo.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InitialChartSix',
}
</script>

<style scoped>
.futuro {
  background-color: #232323;
}

.bg-blue-500 {
  background-color: #1C76FF; /* Cambio de color azul */
}

.text-blue-500 {
  color: #1C76FF; /* Cambio de color azul */
}


</style>
