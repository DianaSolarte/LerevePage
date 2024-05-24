<template>
  <div>
    <Navbar /> <!-- Ubicación Navbar -->
    
    <div class="py-8 px-10 md:py-12 md:px-6 text-left text-black">
      <h1 class="text-3xl md:text-4xl ml-12 font-bold mb-6">Atribuciones</h1>
      <h2 class="text-xl md:text-2xl ml-12 font-semibold mb-10">Los íconos utilizados en nuestro sitio web son cortesía de FlatIcon.</h2>

      
      <ul class="list-none pl-0 md:pl-5 space-y-2 ml-6">
        <li>
          <a href="https://www.flaticon.es/iconos-gratis/y2k" title="y2k iconos" class="text-black-500 hover:underline">
            Y2k iconos creados por GOWI - Flaticon
          </a>
        </li>
        <li>
          <a href="https://www.flaticon.es/iconos-gratis/superposicion" title="superposición iconos" class="text-black-500 hover:underline">
            <span class="inline h-5 w-5 mr-2">Superposición</span> iconos creados por GOWI - Flaticon
          </a>
        </li>
        <li>
          <a href="https://www.flaticon.es/iconos-gratis/proteger" title="proteger iconos" class="text-black-500 hover:underline">
            <span class="inline h-5 w-5 mr-2">Proteger</span> iconos creados por Freepik - Flaticon
          </a>
        </li>
        <li>
          <a href="https://www.flaticon.es/iconos-gratis/verificacion" title="verificación iconos" class="text-black-500 hover:underline">
            <span class="inline h-5 w-5 mr-2">Verificación</span> iconos creados por Freepik - Flaticon
          </a>
        </li>
        <li>
          <a href="https://www.flaticon.es/iconos-gratis/plan-de-accion" title="plan de accion iconos" class="text-black-500 hover:underline">
            <span class="inline h-5 w-5 mr-2">Plan de acción</span> iconos creados por Freepik - Flaticon
          </a>
        </li>
        <li>
          <a href="https://www.flaticon.es/iconos-gratis/agregado-inmobiliario" title="agregado inmobiliario iconos" class="text-black-500 hover:underline">
            <span class="inline h-5 w-5 mr-2">Agregado inmobiliario</span> iconos creados por gravisio - Flaticon
          </a>
        </li>
        <li>
          <a href="https://www.flaticon.es/iconos-gratis/cuenta-financiera" title="cuenta financiera iconos" class="text-black-500 hover:underline">
            <span class="inline h-5 w-5 mr-2">Cuenta financiera</span> iconos creados por Onesadya.Std - Flaticon
          </a>
        </li>
        <li>
          <a href="https://www.flaticon.es/iconos-gratis/ganancias" title="ganancias iconos" class="text-black-500 hover:underline">
            <span class="inline h-5 w-5 mr-2">Ganancias</span> iconos creados por denimao - Flaticon
          </a>
        </li>
      </ul>
    </div>
    
    <Whatsapp/><!-- Boton de WA -->
    <Footer /> <!-- Ubicación Footer -->
  </div>
</template>


<script>
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import Whatsapp from '../layouts/Whatsapp.vue';

export default {
  name: 'AttributionsView',
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
