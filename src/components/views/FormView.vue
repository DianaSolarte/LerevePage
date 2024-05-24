<template>
  <div class="formdiv relative min-h-screen bg-[#F9FAEF] ">
    <Navbar /> <!-- Ubicacion NAVBAR -->
    <div class="w-full px-12 py-12 ml-8">
      <p class="webL_subtitulo">Contáctenos hoy para comenzar</p>
      <h1 class="webL_titulo_grande font-semibold mb-4">¿Listo para maximizar su patrimonio?</h1>
      <p class="webL_texto mb-8">Nuestro equipo de expertos está listo para ayudarle a alcanzar sus objetivos
        financieros y patrimoniales. ¡No dude en ponerse en contacto con nosotros para una consulta gratuita!</p>

      <form @submit.prevent="submitForm" class="space-y-8">
        <div class="relative">
          <label for="nombre" class="L_texto block text-sm font-medium text-gray-700">Nombre</label>
          <input type="text" id="nombre" v-model="formData.nombre"
            :class="{ 'border-red-500': errors.nombre, 'border-gray-300': !errors.nombre }"
            class="L_texto mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md bg-gray-100">
          <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
          <div v-if="errors.nombre" class="text-red-500 text-xs mt-1">{{ errors.nombre }}</div>
        </div>

        <div class="relative">
          <label for="apellido" class="L_texto block text-sm font-medium text-gray-700">Apellido</label>
          <input type="text" id="apellido" v-model="formData.apellido"
            :class="{ 'border-red-500': errors.apellido, 'border-gray-300': !errors.apellido }"
            class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md bg-gray-100">
          <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
          <div v-if="errors.apellido" class="text-red-500 text-xs mt-1">{{ errors.apellido }}</div>
        </div>

        <div class="relative">
          <label for="email" class="L_texto block text-sm font-medium text-gray-700">Mail Empresarial</label>
          <input type="email" id="email" v-model="formData.email"
            :class="{ 'border-red-500': errors.email, 'border-gray-300': !errors.email }"
            class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md bg-gray-100">
          <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
          <div v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</div>
        </div>

        <div class="relative">
          <label for="mensaje" class="L_texto block text-sm font-medium text-gray-700">Mensaje</label>
          <textarea id="mensaje" v-model="formData.mensaje"
            :class="{ 'border-red-500': errors.mensaje, 'border-gray-300': !errors.mensaje }" rows="4"
            class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md bg-gray-100"></textarea>
          <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
          <div v-if="errors.mensaje" class="text-red-500 text-xs mt-1">{{ errors.mensaje }}</div>
        </div>

        <div class="flex justify-center">
          <button type="submit"
            class="webL_boton inline-flex items-center justify-center w-56 h-14 border border-transparent text-lg font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Enviar
          </button>
        </div>
      </form>

      <p class="webL_texto mt-8 text-left">Llámanos: +57 (601) 612-8418<br>Escríbenos:
        servicioalcliente@lereve.com.co<br>Encuéntranos: Bogotá, Cr 7 Bis 124-26 Colombia.</p>
      <p class="webL_texto mt-8 text-left text-gray-400">Todos los campos son obligatorios. Al enviar el formulario,
        aceptas los Términos y Condiciones y la Política de Privacidad.</p>
    </div>
  </div>
  <Footer /> <!-- Ubicacion Footer -->
  <Whatsapp /> <!-- Boton de WA -->
</template>


<script>
import emailjs from 'emailjs-com';
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
      },
      errors: {}
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.formData.nombre) {
        this.errors.nombre = 'El nombre es obligatorio.';
      }

      if (!this.formData.apellido) {
        this.errors.apellido = 'El apellido es obligatorio.';
      }

      if (!this.formData.email) {
        this.errors.email = 'El email es obligatorio.';
      } else if (!this.validEmail(this.formData.email)) {
        this.errors.email = 'El email no es válido.';
      }

      if (!this.formData.mensaje) {
        this.errors.mensaje = 'El mensaje es obligatorio.';
      }

      return Object.keys(this.errors).length === 0;
    },
    validEmail(email) {
      const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
      return re.test(email);
    },
    submitForm() {
      if (this.validateForm()) {
        // Enviar los datos a través de EmailJS
        // Se deben poner el service id, template id y el PUBLIC KEY .... tambien mnodificar el INDEX.HTML
        emailjs.send('service_tgocqku', 'template_decmfia', this.formData, 'pLxtho9v7C0g7V7gv')
          .then((response) => {
            // console.log('Formulario enviado:', response.status, response.text);
            alert('Formulario enviado exitosamente!');
            // Resetea el formulario después de enviarlo
            this.formData = {
              nombre: '',
              apellido: '',
              email: '',
              mensaje: ''
            };
          }, (error) => {
            // console.error('Error al enviar el formulario:', error);
            alert('Ocurrió un error al enviar el formulario. Por favor, intente de nuevo.');
          });
      }
    }
  }
}
</script>
