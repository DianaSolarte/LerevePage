<template>
  <div>
    <Navbar class="navbar"/>

    <!-- Contenedor para el título -->
    <div class="container mx-auto px-4 mt-8">
      <div class="max-w-2xl"> <!-- Establecer un ancho máximo -->
        <h2 class="text-2xl font-bold text-black mb-3">Nosotros</h2>
        <h1 class="text-5xl font-bold text-black mb-8">
          <span class="inline-block md:text-left">Construyendo el futuro financiero de su empresa, <span class="text-blue-500">juntos</span></span>
        </h1>
      </div>
    </div>

    <!-- Imagen de lado a lado -->
    <img src="../../assets/AboutUs/Frame 14228.png" alt="Imagen" class="w-full" />
    <Newspaper/>
    <Carousel/>
    <Ready/> <!-- Listo para alcanzar las metas -->
    <Whatsapp/><!-- Boton de WA -->
    <Footer />
  </div>
</template>

<script>
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import Whatsapp from '../layouts/Whatsapp.vue';
import Ready from '../layouts/Ready.vue';
import Newspaper from '../layouts/layoutAboutUs/Newspaper.vue';
import Carousel from '../layouts/layoutAboutUs/Carousel.vue';

export default {
  name: 'AboutUs',
  components: {
    Navbar,
    Ready,
    Newspaper,
    Carousel,
    Footer,
    Whatsapp,
  },
}
</script>

<style scoped>
/* Aquí puedes agregar estilos adicionales específicos de esta página si lo necesitas */
</style>
