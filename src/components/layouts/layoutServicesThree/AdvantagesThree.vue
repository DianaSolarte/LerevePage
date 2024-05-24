<template>
  <div class="container mx-auto py-12 px-4">
    <div class="text-center mb-12">
      <h3 class="text-sm text-black-500 text-left">XXX</h3>
      <h1 class="text-4xl font-bold mb-4 text-left">XXX</h1>
      <h3 class="text-sm text-black-500 text-left">XXX</h3>
    </div>
    <div class="flex flex-col space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
      <!-- Primera fila de 3 partes -->
      <div class="flex items-start">
        <span class="text-blue-500 text-2xl font-bold mr-4">✓</span>
        <div>
          <h3 class="text-lg font-semibold text-left">Gestión de inversiones</h3>
          <p class="text-left">Diseño y ejecución de estrategias de inversión personalizadas para alcanzar los objetivos financieros de la familia.</p> 
        </div>
      </div>
      <div class="flex items-start">
        <span class="text-blue-500 text-2xl font-bold mr-4">✓</span>
        <div>
          <h3 class="text-lg font-semibold text-left">Planificación patrimonial</h3>
          <p class="text-left">Desarrollo de estrategias para proteger y transferir el patrimonio de manera eficiente y efectiva a través de generaciones.</p>
        </div>
      </div>
      <div class="flex items-start">
        <span class="text-blue-500 text-2xl font-bold mr-4">✓</span>
        <div>
          <h3 class="text-lg font-semibold text-left">Gestión de riesgos</h3>
          <p class="text-left">Identificación y mitigación de riesgos financieros, legales y operativos que puedan afectar el patrimonio familiar.</p> 
        </div>
      </div>
      <!-- Segunda fila de 2 partes -->
      <div class="flex items-start">
        <span class="text-blue-500 text-2xl font-bold mr-4">✓</span>
        <div>
          <h3 class="text-lg font-semibold text-left">Asesoramiento fiscal</h3>
          <p>Optimización de la estructura fiscal de la familia y cumplimiento de las obligaciones fiscales.</p> 
        </div>
      </div>
      <div class="flex items-start">
        <span class="text-blue-500 text-2xl font-bold mr-4">✓</span>
        <div>
          <h3 class="text-lg font-semibold text-left">Servicios administrativos</h3>
          <p>Administración de asuntos cotidianos como contabilidad, gestión de nóminas, seguros y otros servicios administrativos.</p> 
        </div>
      </div>
      <div class="flex items-start">
        <span class="text-blue-500 text-2xl font-bold mr-4">✓</span>
        <div>
          <h3 class="text-lg font-semibold text-left">Educación y capacitación</h3>
          <p>Provisión de educación financiera y capacitación para preparar a las generaciones futuras para administrar el patrimonio familiar de manera efectiva</p> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvantagesThree',
}
</script>

<style scoped>
.container {
  margin-top: 4rem;
}
</style>
