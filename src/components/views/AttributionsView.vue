<template>
  <div>
    <Navbar /> <!-- Ubicación Navbar -->
    <div class="max-w-3xl mx-auto py-12 px-4">
      <h1 class="text-4xl font-bold mb-6">Atribuciones</h1>
      <h2 class="text-2xl font-semibold mb-4">Los íconos utilizados en nuestro sitio web son cortesía de FlatIcon.</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>
          <a href="https://www.flaticon.es/iconos-gratis/y2k" title="y2k iconos" class="text-blue-500 hover:underline">
            <img src="../../assets/iconosLogo/Flaticon.png" alt="y2k iconos" class="inline h-5 w-5 mr-2"> Y2k iconos creados por GOWI - Flaticon
          </a>
        </li>
        <li>
          <a href="https://www.flaticon.es/iconos-gratis/superposicion" title="superposición iconos" class="text-blue-500 hover:underline">
            <img src="https://www.flaticon.es/svg/static/icons/svg/3135/3135715.svg" alt="superposición iconos" class="inline h-5 w-5 mr-2"> Superposición iconos creados por GOWI - Flaticon
          </a>
        </li>
        <li>
          <a href="https://www.flaticon.es/iconos-gratis/proteger" title="proteger iconos" class="text-blue-500 hover:underline">
            <img src="https://www.flaticon.es/svg/static/icons/svg/889/889140.svg" alt="proteger iconos" class="inline h-5 w-5 mr-2"> Proteger iconos creados por Freepik - Flaticon
          </a>
        </li>
        <li>
          <a href="https://www.flaticon.es/iconos-gratis/verificacion" title="verificación iconos" class="text-blue-500 hover:underline">
            <img src="https://www.flaticon.es/svg/static/icons/svg/2917/2917997.svg" alt="verificación iconos" class="inline h-5 w-5 mr-2"> Verificación iconos creados por Freepik - Flaticon
          </a>
        </li>
        <li>
          <a href="https://www.flaticon.es/iconos-gratis/plan-de-accion" title="plan de accion iconos" class="text-blue-500 hover:underline">
            <img src="https://www.flaticon.es/svg/static/icons/svg/2911/2911690.svg" alt="plan de accion iconos" class="inline h-5 w-5 mr-2"> Plan de accion iconos creados por Freepik - Flaticon
          </a>
        </li>
        <li>
          <a href="https://www.flaticon.es/iconos-gratis/agregado-inmobiliario" title="agregado inmobiliario iconos" class="text-blue-500 hover:underline">
            <img src="https://www.flaticon.es/svg/static/icons/svg/2845/2845846.svg" alt="agregado inmobiliario iconos" class="inline h-5 w-5 mr-2"> Agregado inmobiliario iconos creados por gravisio - Flaticon
          </a>
        </li>
        <li>
          <a href="https://www.flaticon.es/iconos-gratis/cuenta-financiera" title="cuenta financiera iconos" class="text-blue-500 hover:underline">
            <img src="https://www.flaticon.es/svg/static/icons/svg/3061/3061934.svg" alt="cuenta financiera iconos" class="inline h-5 w-5 mr-2"> Cuenta financiera iconos creados por Onesadya.Std - Flaticon
          </a>
        </li>
        <li>
          <a href="https://www.flaticon.es/iconos-gratis/ganancias" title="ganancias iconos" class="text-blue-500 hover:underline">
            <img src="https://www.flaticon.es/svg/static/icons/svg/2073/2073080.svg" alt="ganancias iconos" class="inline h-5 w-5 mr-2"> Ganancias iconos creados por denimao - Flaticon
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
  },
}
</script>

<style scoped>
/* Aquí puedes agregar estilos adicionales específicos de esta página si lo necesitas */
</style>
