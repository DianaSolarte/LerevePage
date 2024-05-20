<template>
  <div class="bg-black p-8 rounded-lg text-white">
    <div class="flex flex-col items-center mb-8">
      <!-- Icono azul con blanco -->
      <div class="bg-blue-500 p-4 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 class="text-3xl font-bold mt-4">XXX</h1>
      <h2 class="text-xl mt-2">XXX</h2>
    </div>
    
    <div class="flex justify-around">
      <!-- Primer cuadro -->
      <div class="bg-white text-blue-500 p-6 rounded-lg flex flex-col items-center shadow-lg w-1/3 mx-2">
        <div class="relative w-24 h-24 mb-4">
          <div class="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-full" style="clip-path: polygon(0 20%, 100% 20%, 100% 100%, 0% 100%);"></div>
          <div class="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-full"></div>
        </div>
        <h3 class="text-4xl font-bold mb-2">01</h3>
        <hr class="border-blue-500 w-full mb-4" />
        <h4 class="text-xl font-semibold mb-2">Asesoramiento personalizado</h4>
        <p class="text-center">Garantizar el cumplimiento normativo y legal en todas las actividades de la organización o familia.</p>
      </div>
      
      <!-- Segundo cuadro -->
      <div class="bg-white text-blue-500 p-6 rounded-lg flex flex-col items-center shadow-lg w-1/3 mx-2">
        <div class="relative w-24 h-24 mb-4">
          <div class="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-full" style="clip-path: polygon(0 40%, 100% 40%, 100% 100%, 0% 100%);"></div>
          <div class="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-full"></div>
        </div>
        <h3 class="text-4xl font-bold mb-2">02</h3>
        <hr class="border-blue-500 w-full mb-4" />
        <h4 class="text-xl font-semibold mb-2">Diversificación de la cartera</h4>
        <p class="text-center">Proteger los activos y los intereses de la organización o familia mediante una gestión efectiva de riesgos legales.</p>
      </div>
      
      <!-- Tercer cuadro -->
      <div class="bg-white text-blue-500 p-6 rounded-lg flex flex-col items-center shadow-lg w-1/3 mx-2">
        <div class="relative w-24 h-24 mb-4">
          <div class="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-full" style="clip-path: polygon(0 95%, 100% 95%, 100% 100%, 0% 100%);"></div>
          <div class="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-full"></div>
        </div>
        <h3 class="text-4xl font-bold mb-2">03</h3>
        <hr class="border-blue-500 w-full mb-4" />
        <h4 class="text-xl font-semibold mb-2">Acceso a oportunidades exclusivas</h4>
        <p class="text-center">Optimizar la estructura corporativa para maximizar la eficiencia operativa y minimizar los riesgos legales.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InitialChart',
}
</script>

<style scoped>
.bg-black {
  background-color: #000;
}

.bg-blue-500 {
  background-color: #3b82f6;
}

.text-blue-500 {
  color: #3b82f6;
}
</style>
