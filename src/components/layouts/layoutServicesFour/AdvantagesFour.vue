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
          <h3 class="text-lg font-semibold text-left">Diseño de cartera personalizada</h3>
          <p class="text-left">Creamos una cartera de inversiones adaptada a tus objetivos financieros, horizonte temporal y tolerancia al riesgo.</p>
        </div>
      </div>
      <div class="flex items-start">
        <span class="text-blue-500 text-2xl font-bold mr-4">✓</span>
        <div>
          <h3 class="text-lg font-semibold text-left">Selección de activos</h3>
          <p class="text-left">Seleccionamos cuidadosamente una combinación de acciones, bonos, fondos mutuos, ETFs y otros instrumentos financieros para construir una cartera diversificada.</p>
        </div>
      </div>
      <div class="flex items-start">
        <span class="text-blue-500 text-2xl font-bold mr-4">✓</span>
        <div>
          <h3 class="text-lg font-semibold text-left">Monitoreo y ajuste</h3>
          <p class="text-left">Supervisamos constantemente el rendimiento de tu cartera y realizamos ajustes según sea necesario para maximizar los resultados.</p>
        </div>
      </div>
      <!-- Segunda fila de 2 partes -->
      <div class="flex items-start">
        <span class="text-blue-500 text-2xl font-bold mr-4">✓</span>
        <div>
          <h3 class="text-lg font-semibold text-left">Estrategias de inversión alternativa</h3>
          <p>Exploramos opciones de inversión alternativa, como bienes raíces, materias primas y fondos de cobertura, para diversificar aún más tu cartera y buscar rendimientos superiores.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvantagesFour',
}
</script>

<style scoped>
.container {
  margin-top: 4rem;
}
</style>
