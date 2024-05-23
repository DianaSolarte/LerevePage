<template>
  <div class="formdiv relative min-h-screen">
    <Navbar /> <!-- Ubicacion NAVBAR -->
    <div class="w-full px-4 py-12">
      <p class="">Contáctenos hoy para comenzar</p>
      <h1 class="text-6xl font-semibold mb-4">¿Listo para maximizar tu patrimonio?</h1>
      <p class="mb-8">Nuestro equipo de expertos está listo para ayudarle a alcanzar sus objetivos financieros y patrimoniales. ¡No dude en ponerse en contacto con nosotros para una consulta gratuita!</p>
      
      <form @submit.prevent="submitForm" class="space-y-8">
        <div class="relative">
          <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
          <input type="text" id="nombre" v-model="formData.nombre" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-custom-input">
          <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
        </div>

        <div class="relative">
          <label for="apellido" class="block text-sm font-medium text-gray-700">Apellido</label>
          <input type="text" id="apellido" v-model="formData.apellido" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-custom-input">
          <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
        </div>

        <div class="relative">
          <label for="email" class="block text-sm font-medium text-gray-700">Mail Empresarial</label>
          <input type="email" id="email" v-model="formData.email" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-custom-input">
          <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
        </div>

        <div class="relative">
          <label for="mensaje" class="block text-sm font-medium text-gray-700">Mensaje</label>
          <textarea id="mensaje" v-model="formData.mensaje" rows="4" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-custom-input"></textarea>
          <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
        </div>
        <br>
        <div class="flex justify-center">
          <button type="submit" class="inline-flex items-center justify-center w-56 h-14 border border-transparent text-lg font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Enviar
          </button>
        </div>
        <br>
      </form>

      <p class="mt-8 text-left"><br><br>Llámanos: +57 (601) 612-8418 <br><br> Escríbenos: servicioalcliente@lereve.com.co <br><br> Encuéntranos: Bogotá, Cr 7 Bis 124-26 Colombia.</p>
      <p class="mt-8 text-left  text-gray-900" ><br><br>Todos los campos son obligatorios. Al enviar el formulario, aceptas los Términos y Condiciones y la Política de Privacidad.</p>
    </div>

  </div>
    <Footer /> <!-- Ubicacion FOOter -->
  <Whatsapp /> <!-- Boton de WA -->
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
.form{
    margin: 20px auto; 
   max-width: 1100px; 
}
.min-h-screen {
  min-height: 100vh;
}

.relative .absolute {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
}

.relative .h-0.5 {
  height: 2px; /* Mantener la línea delgada */
}

.text-blue-500 {
  color: #1C76FF;
}

.focus\:ring-blue-500:focus {
  --tw-ring-color: #1C76FF;
}

.focus\:border-blue-500:focus {
  border-color: #1C76FF;
}

.bg-blue-500 {
  background-color: #1C76FF;
}

.hover\:bg-blue-600:hover {
  background-color: #1C76FF; /* Mantener el mismo azul en hover */
}

.focus\:ring-blue-500:focus {
  --tw-ring-color: #1C76FF;
}

.inline-flex {
  display: inline-flex;
  align-items: center;
}

.w-56 {
  width: 14rem; /* Aumentar el ancho del botón */
}

.h-56 {
  height: 14rem; /* Aumentar la altura del botón */
}

.rounded-full {
  border-radius: 9999px;
}

.focus\:outline-none:focus {
  outline: 0;
}

.focus\:ring-2:focus {
  box-shadow: 0 0 0 2px var(--tw-ring-color);
}

.focus\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}

.focus\:ring-blue-500:focus {
  --tw-ring-color: #1C76FF;
}

.text-left {
  text-align: left;
}


.formdiv {
    margin: 20px auto; 
    max-width: 1400px; 
    
}
input, textarea {
   background-color: #F9FAEF ;
}
</style>
