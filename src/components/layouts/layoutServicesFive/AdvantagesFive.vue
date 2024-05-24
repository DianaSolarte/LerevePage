<template>
  <div class="container mx-auto py-12 px-4">
    <div class="text-center mb-12">
      <h3 class="webL_texto text-black-500 text-left">Fortalezca su estructura familiar</h3>
      <h1 class="webL_titulo_grande font-bold mb-4 text-left">Planificación para la Gobernanza</h1>
      <h3 class="webL_texto text-black-500 text-left">Nuestro servicio puede ayudarle a establecer una estructura de gobierno efectiva para su familia. Nos especializamos en brindar asesoría para desarrollar políticas, procedimientos y sistemas que promuevan una gestión eficiente y transparente, para la toma de decisiones</h3>
    </div>
    <div class="flex flex-col space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
      <!-- Primera fila de 3 partes -->
      <div class="flex items-start">
        <span class="text-blue-500 text-2xl font-bold mr-4">✓</span>
        <div>
          <h3 class="font-bold text-left">Evaluación de Gobernanza</h3>

          <p class="text-left">Realizamos evaluaciones exhaustivas de la estructura de gobierno actual de su organización o familia para identificar áreas de mejora y oportunidades de fortalecimiento.</p> 
        </div>
      </div>
      <div class="flex items-start">
        <span class="text-blue-500 text-2xl font-bold mr-4">✓</span>
        <div>
          <h3 class="webL_texto font-semibold text-left">Desarrollo de Políticas y Procedimientos</h3>
          <p class="text-left">Trabajamos de la mano para diseñar políticas y procedimientos claros y efectivos que aborden aspectos clave de la gobernanza, como la toma de decisiones, la delegación de autoridad, la gestión de riesgos y la rendición de cuentas.</p>
        </div>
      </div>
      <div class="flex items-start">
        <span class="text-blue-500 text-2xl font-bold mr-4">✓</span>
        <div>
          <h3 class="webL_texto font-semibold text-left">Reuniones y Comunicación</h3>
          <p class="text-left">Ayudamos a facilitar reuniones estratégicas y de toma de decisiones, así como a mejorar la comunicación entre los diferentes grupos de interés, promoviendo así una cultura de transparencia y colaboración.</p> 
        </div>
      </div>
      <!-- Segunda fila de 2 partes -->
      <div class="flex items-start">
        <span class="text-blue-500 text-2xl font-bold mr-4">✓</span>
        <div>
          <h3 class="webL_texto font-semibold text-left">Resolución de Conflictos</h3>
          <p class="text-left">Ofrecemos herramientas y procesos para abordar y resolver conflictos de manera constructiva, promoviendo relaciones saludables y productivas entre los miembros del equipo, accionistas o miembros de la familia.</p> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvantagesFive',
}
</script>

<style scoped>
.container {
  margin-top: 4rem;
}

h3{
  padding-bottom:10px ;
  font-weight: bold;
}
@media screen and (max-width: 500px) {
  h1 {
    font-size: 40px;
  }
}
</style>
