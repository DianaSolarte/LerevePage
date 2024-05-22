<template>
  <footer class="bg-black text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between mb-8">
        <!-- Logo y Slogan -->
        <div class="w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-start">
          <img src="../../assets/LeReve.svg" alt="Logo" class="h-15 w-15 mb-2">
          <span class="text-lg font-semibold">Preservando tu legado, asegurando tu futuro</span>
        </div>

        <!-- Enlaces de navegación central -->
        <div class="w-full md:w-1/3 mb-8 md:mb-0 text-center">
          <h3 class="text-lg font-semibold mb-4">Explorar</h3>
          <div class="flex flex-wrap justify-center">
            <div class="w-1/2 mb-4">
              
              <ul>
                <li><a href="#">Nosotros</a></li>
                
              </ul>
            </div>
            <div class="w-1/2 mb-4">
              <h4 class="text-md font-semibold mb-2">Servicios</h4>
              <div @click="toggleDropdown" class="cursor-pointer">
                <span>Servicios</span>
                <svg :class="{ 'transform rotate-180': isDropdownOpen }" class="inline-block w-4 h-4 ml-2 transition-transform">
                  <path fill="currentColor" d="M5.75 8.75L9.5 12.5L13.25 8.75H5.75Z" />
                </svg>
              </div>
              <ul v-show="isDropdownOpen" class="mt-2 bg-gray-800 rounded-lg shadow-lg p-2">
                <li v-for="(product, index) in products" :key="index" class="py-1 px-2 hover:bg-gray-700 rounded">
                  <a :href="product.href">{{ product.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Contacto -->
        <div class="w-full md:w-1/3 text-right">
          <h3 class="text-lg font-semibold mb-4">Compañía</h3>
          <ul>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
      </div>

      <!-- Enlaces adicionales -->
      <div class="text-center mb-4">
        <ul class="flex flex-wrap justify-center space-x-4">
          <li><a href="#">Términos y condiciones</a></li>
          <li><a href="#">Políticas de privacidad</a></li>
          <li><a href="#">Atribuciones</a></li>
        </ul>
      </div>

      <!-- Pie de página -->
      <div class="text-center">
        <p>Le Reve &copy; 2024 Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      isDropdownOpen: false,
      products: [
        { name: 'Planificación financiera', href: '#' },
        { name: 'Sistemas de gestión', href: '#' },
        { name: 'Sistemas de inversión', href: '#' },
        { name: 'Servicios inmobiliarios', href: '#' },
        { name: 'Gestión de riesgos', href: '#' },
        { name: 'Auditoria financiera y de procesos', href: '#' }
      ]
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }
}
</script>

<style scoped>
footer {
  background-color: #232323;
}
</style>
