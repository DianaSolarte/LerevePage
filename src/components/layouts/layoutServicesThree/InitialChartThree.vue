<template>
  <div class="renta p-8 rounded-lg text-white">
    <div class="flex flex-col items-center mb-8">
      <!-- Icono azul con blanco -->
      <div class="bg-blue-500 p-4 rounded-full">
        <img src="../../../assets/Frame 14249.png" class="h-10 w-10 text-white" alt="Icono" />
      </div>
      <h1 class="text-3xl font-bold mt-4">XXXX</h1>
      <h2 class="text-xl mt-2">XXXX</h2>
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
        <h4 class="text-xl font-semibold mb-2">XXXXX</h4>
        <p class="text-left text-black mb-4"><br/> Maximizar la rentabilidad y preservar el capital de la familia a lo largo del tiempo.</p>
      </div>
      
      <!-- Segundo cuadro -->
      <div class="bg-white text-blue-500 p-6 rounded-lg flex flex-col items-start shadow-lg w-1/3 mx-2">
        <div class="relative w-32 h-32 mb-4">
          <img src="../../../assets/Ellipse 5.png" class="w-full h-full rounded-full" alt="Imagen 2" />
          <div class="absolute top-0 left-0 w-full h-full rounded-full"></div>
        </div>
        <h3 class="text-4xl font-bold mb-2" style="color: #1C76FF;"><br/> 02</h3>
        <div class="line-right"></div>
        <h4 class="text-xl font-semibold mb-2">XXXXX </h4>
        <p class="text-left text-black mb-4"><br/>  Proporcionar servicios financieros y administrativos personalizados y adaptados a las necesidades específicas de cada familia.</p>
      </div>
      
      <!-- Tercer cuadro -->
      <div class="bg-white text-blue-500 p-6 rounded-lg flex flex-col items-start shadow-lg w-1/3 mx-2">
        <div class="relative w-32 h-32 mb-4">
          <img src="../../../assets/Ellipse 5 (1).png" class="w-full h-full rounded-full" alt="Imagen 3" />
          <div class="absolute top-0 left-0 w-full h-full  rounded-full"></div>
        </div>
        <h3 class="text-4xl font-bold mb-2" style="color: #1C76FF;"><br/> 03</h3>
        <div class="line-right"></div>
        <h4 class="text-xl font-semibold mb-2">XXXXX</h4>
        <p class="text-left text-black mb-4"><br/> Coordinar la gestión de inversiones, planificación patrimonial, gestión de riesgos, asuntos fiscales y legales, y otros aspectos relacionados con el patrimonio familiar.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InitialChartThree',
}
</script>

<style scoped>
.renta{
  background-color: #232323;
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
 
}
</style>
