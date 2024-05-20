<template>
  <div class="relative min-h-screen">
    <Navbar /> <!-- Ubicacion NAVBAR -->
    <div class="max-w-xl mx-auto py-12">
      <h2 class="text-2xl font-semibold mb-4">¿Listo para maximizar tu patrimonio?</h2>
      <p class="mb-8">Nuestro equipo de expertos está listo para ayudarle a alcanzar sus objetivos financieros y patrimoniales. ¡No dude en ponerse en contacto con nosotros para una consulta gratuita!</p>
      
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
          <input type="text" id="nombre" v-model="formData.nombre" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>

        <div>
          <label for="apellido" class="block text-sm font-medium text-gray-700">Apellido</label>
          <input type="text" id="apellido" v-model="formData.apellido" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Mail Empresarial</label>
          <input type="email" id="email" v-model="formData.email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>

        <div>
          <label for="mensaje" class="block text-sm font-medium text-gray-700">Mensaje</label>
          <textarea id="mensaje" v-model="formData.mensaje" rows="4" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
        </div>

        <div>
          <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Enviar
          </button>
        </div>
      </form>

      <p class="mt-8 text-center">Llámanos: +57 (601) 612-8418 <br> Escríbenos: servicioalcliente@lereve.com.co <br> Encuéntranos: Bogotá, Cr 7 Bis 124-26 Colombia.</p>
    </div>
    <Footer /> <!-- Ubicacion FOOter -->
    <Whatsapp /> <!-- Boton de WA -->
  </div>
</template>

<script>
import Navbar from '../layouts/Navbar.vue';
import Footer from '../layouts/Footer.vue';
import Whatsapp from '../layouts/Whatsapp.vue';

export default {
  name: 'ContactForm',
  components: {
    Navbar,
    Footer,
    Whatsapp,
  },
  data() {
    return {
      formData: {
        nombre: '',
        apellido: '',
        email: '',
        mensaje: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes enviar los datos del formulario a través de una petición HTTP o hacer cualquier otra acción que necesites
      console.log('Formulario enviado:', this.formData);
    }
  }
}
</script>

<style scoped>
/* Asegúrate de que el contenedor principal tenga al menos la altura de la pantalla */
.min-h-screen {
  min-height: 100vh;
}

/* Estilo adicional para el botón de WhatsApp */
.fixed {
  position: fixed;
  bottom: 1.25rem; /* 5 */
  right: 1.25rem; /* 5 */
}

.whatsapp-icon {
  background-color: #25d366; /* WhatsApp green */
  border-radius: 50%;
  padding: 1rem; /* 4 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.whatsapp-icon:hover {
  background-color: #128c7e; /* Darker WhatsApp green */
}

.whatsapp-icon img {
  height: 2rem; /* 8 */
  width: 2rem; /* 8 */
}
</style>
