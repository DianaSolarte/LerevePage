<template> <!-- HTML -->
  <div class="relative min-h-screen">
    <Navbar class="navbar"/>
    <div class="container bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto my-12">
      <h1 class="text-4xl font-bold mb-6">Términos y condiciones</h1>
      <p class="text-lg mb-4">
        Esta página se utiliza para informar a los visitantes del sitio web sobre nuestras políticas con respecto a la recopilación, uso y divulgación de Información Personal si alguien decide utilizar nuestro Servicio, el sitio web de Le Reve.
      </p>
      <p class="text-gray-500 mb-10">Actualizado el 06/05/2024</p>
      <br/>
    </div>
    <div class="container bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto my-12">
      <h1 class="text-4xl font-bold mb-6">Políticas de privacidad</h1>
      <p class="text-lg mb-4">
        xxx
      </p>
      <p class="text-gray-500">Actualizado el 06/05/2024</p>
    </div>
    <Whatsapp/><!-- Boton de WA -->
    <Footer />
  </div>
</template>

<script>  /* js */
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import Whatsapp from '../layouts/Whatsapp.vue';

export default {
  name: 'TermsAndConditions',
  components: {
    Navbar,
    Footer,
    Whatsapp,
  },
}
</script>

<style scoped> 
/* Aquí puedes agregar estilos adicionales específicos de esta página si lo necesitas */
</style>
