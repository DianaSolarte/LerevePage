<template>
  <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-xl mx-auto">
      <h2 class="text-2xl font-semibold mb-4 text-center sm:text-left">¿Listo para maximizar tu patrimonio?</h2>
      <p class="mb-8 text-center sm:text-left">Nuestro equipo de expertos está listo para ayudarle a alcanzar sus objetivos financieros y patrimoniales. ¡No dude en ponerse en contacto con nosotros para una consulta gratuita!</p>
      
      <form @submit.prevent="submitForm" class="space-y-4">
        <div class="mb-4">
          <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
          <input type="text" id="nombre" v-model="formData.nombre" class="custom-input mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>

        <div class="mb-4">
          <label for="apellido" class="block text-sm font-medium text-gray-700">Apellido</label>
          <input type="text" id="apellido" v-model="formData.apellido" class="custom-input mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Mail Empresarial</label>
          <input type="email" id="email" v-model="formData.email" class="custom-input mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>

        <div class="mb-4">
          <label for="mensaje" class="block text-sm font-medium text-gray-700">Mensaje</label>
          <textarea id="mensaje" v-model="formData.mensaje" rows="4" class="custom-input mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
        </div>

        <div>
          <button type="submit" class="inline-flex items-center px-4 py-2 rounded-full text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto justify-center">
            Enviar
          </button>
        </div>
      </form>

      <p class="mt-8 text-center sm:text-left">Llámanos: +57 (601) 612-8418 <br> Escríbenos: servicioalcliente@lereve.com.co <br> Encuéntranos: Bogotá, Cr 7 Bis 124-26 Colombia. <br> <br> Todos los campos son obligatorios. Al enviar el formulario, aceptas los Términos y Condiciones y la Política de Privacidad. </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
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
      console.log('Formulario enviado:', this.formData);
    }
  }
}
</script>

<style scoped>
.custom-input {
  background-color: #000 !important;
}

@media (max-width: 640px) {
  .text-center {
    text-align: center;
  }
}
</style>
