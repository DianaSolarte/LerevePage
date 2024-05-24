<template>
  <div class="aboutus relative min-h-screen ">
    <div class="mt-6 mb-8">
      <Navbar class=" navbar" />
    </div>
    <!-- Contenedor para el título -->
    <div class="container mx-auto px-4 ">
      <div class="max-w-xl md:max-w-2xl lg:max-w-3xl"> <!-- Establecer un ancho máximo -->
        <h2 class="webL_subtitulo font-bold text-black mb-2">Nosotros</h2>
        <h1 class="webL_titulo_grande font-bold text-black mb-8">
          <span class="webL_titulo_grande inline-block font-bold md:text-left">Construyendo el futuro
            financiero de su </span>
          <span>empresa, <span class="text-blue-500">juntos</span> </span>
        </h1>
      </div>
    </div>

    <!-- Imagen de lado a lado -->
    <div class="mt-8">
      <picture>
        <img src="../../assets/AboutUs/Frame 14228.png" alt="Imagen" class="w-full" />
      </picture>
    </div>

    <Newspaper />
    <Carousel />
    <Pillars />
    <Ready /> <!-- Listo para alcanzar las metas -->
    <Whatsapp /><!-- Boton de WA -->

  </div>
  <Footer />
</template>

<script>
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import Whatsapp from '../layouts/Whatsapp.vue';
import Ready from '../layouts/Ready.vue';
import Newspaper from '../layouts/layoutAboutUs/Newspaper.vue';
import Carousel from '../layouts/layoutAboutUs/Carousel.vue';
import Pillars from '../layouts/layoutAboutUs/Pillars.vue';

export default {
  name: 'AboutUs',
  components: {
    Navbar,
    Ready,
    Newspaper,
    Carousel,
    Pillars,
    Footer,
    Whatsapp,
  },
}
</script>

<style scoped>
.aboutus {
  /*  margin: 0; */
  margin: 0 auto;
  max-width: 1400px;
}

.w-full {
  width: 100% !important;
}
</style>
