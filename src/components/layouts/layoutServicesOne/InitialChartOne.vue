<template>
  <div class="bg-black p-8 rounded-lg text-white">
    <div class="flex flex-col items-center mb-8">
      <!-- Icono azul con blanco -->
      <div class="bg-blue-500 p-4 rounded-full">
        <img src="../../../assets/Frame 14249.png" class="h-10 w-10 text-white" alt="Icono" />
      </div>
      <h1 class="text-3xl font-bold mt-4">Tome el control de su futuro financiero</h1>
      <h2 class="text-xl mt-2">Hay muchos beneficios de la planificación financiera, incluyendo:</h2>
    </div>
    
    <div class="flex justify-around">
      <!-- Primer cuadro -->
      <div class="bg-white text-blue-500 p-6 rounded-lg flex flex-col items-start shadow-lg w-1/3 mx-2">
        <div class="relative w-32 h-32 mb-4">
          <img src="../../../assets/Ellipse 4.png" class="w-full h-full rounded-full" alt="Imagen 1" />
          <div class="absolute top-0 left-0 w-full h-full "></div>
        </div>
        <h3 class="text-4xl font-bold mb-2" style="color: #1C76FF;"><br/> 01</h3>
        <div class="line-right"></div>
        <h4 class="text-xl font-semibold mb-2">Asesoramiento personalizado</h4>
        <p class="text-left text-black mb-4"><br/> GNuestros expertos financieros trabajan directamente con usted para comprender sus objetivos financieros y diseñar estrategias adaptadas a sus necesidades específicas..</p>
      </div>
      
      <!-- Segundo cuadro -->
      <div class="bg-white text-blue-500 p-6 rounded-lg flex flex-col items-start shadow-lg w-1/3 mx-2">
        <div class="relative w-32 h-32 mb-4">
          <img src="../../../assets/Ellipse 5.png" class="w-full h-full rounded-full" alt="Imagen 2" />
          <div class="absolute top-0 left-0 w-full h-full rounded-full"></div>
        </div>
        <h3 class="text-4xl font-bold mb-2" style="color: #1C76FF;"><br/> 02</h3>
        <div class="line-right"></div>
        <h4 class="text-xl font-semibold mb-2">Análisis Profundo </h4>
        <p class="text-left text-black mb-4"><br/>  PRealizamos un análisis exhaustivo de su situación financiera actual y desarrollamos soluciones a medida para maximizar el rendimiento de su patrimonio.</p>
      </div>
      
      <!-- Tercer cuadro -->
      <div class="bg-white text-blue-500 p-6 rounded-lg flex flex-col items-start shadow-lg w-1/3 mx-2">
        <div class="relative w-32 h-32 mb-4">
          <img src="../../../assets/Ellipse 5 (1).png" class="w-full h-full rounded-full" alt="Imagen 3" />
          <div class="absolute top-0 left-0 w-full h-full  rounded-full"></div>
        </div>
        <h3 class="text-4xl font-bold mb-2" style="color: #1C76FF;"><br/> 03</h3>
        <div class="line-right"></div>
        <h4 class="text-xl font-semibold mb-2">Planificación Integral</h4>
        <p class="text-left text-black mb-4"><br/> Desde la gestión de inversiones hasta la planificación tributaria y la gestión del riesgo, ofrecemos un enfoque integral para optimizar su patrimonio y alcanzar sus metas financieras a largo plazo.</p>
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
.bg-black {
  background-color: #000;
}

.bg-blue-500 {
  background-color: #1C76FF; /* Cambio de color azul */
}

.text-blue-500 {
  color: #1C76FF; /* Cambio de color azul */
}

.line-right {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 2px;
  background-color: #1C76FF; /* Color de la línea azul */
}
</style>
