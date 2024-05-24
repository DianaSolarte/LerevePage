<template>
  <footer class="bg-black text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between mb-8">
        <!-- Parte izquierda -->
        <div class="w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-start">
          <img src="../../assets/LeReve.svg" alt="Logo" class="h-15 w-15 mb-2">
          <span class="text-lg font-semibold">Preservando tu legado, asegurando tu futuro</span>
        </div>
        <!-- Parte central -->
        <div class="w-full md:w-1/3 mb-8 md:mb-0 ">
          <h3 class="text-lg font-semibold mb-4">Explorar</h3>
          <div class="w-full mb-4">
            <ul class="flex flex-wrap justify space-x-4">
              <li><a href="/aboutus">Nosotros</a></li>
            </ul>
          </div>
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

        <!-- Parte derecha -->
        <div class="w-full md:w-1/3 ">
          <h3 class="text-lg font-semibold mb-4">Compañía</h3>
          <div class="w-full mb-4">
            <ul>
              <li><a href="/aboutus">Acerca de</a></li>
            </ul>
          </div>
          <div class="w-full">
            <ul>
              <li><a href="/form">Contacto</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Enlaces adicionales -->
      <div class="webL_texto text-center mb-4 ">
        <ul class="flex flex-wrap justify-center space-x-4">
          <li><a href="/tyc" class="text-gray-400" >Términos y condiciones</a></li>
          <li><a href="/tyc" class="text-gray-400">Políticas de privacidad</a></li>
          <li><a href="/attributions" class="text-gray-400">Atribuciones</a></li>
        </ul>
      </div>

      <!-- Pie de página -->
      <div class="text-center">
        <p>Le Reve &copy; 2024 Todos los derechos reservados.</p>
        <p>Diseño ✨Juan Pablo Ardila.</p>
        <p>Desarrollo Solarte Store.</p>
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
        { name: 'Planificación financiera', href: '/servicesone' },
        { name: 'Gestión Inmobiliaria', href: '/servicestwo' },
        { name: 'Administración del Family Office', href: '/servicesthree' },
        { name: 'Gestión de Inversiones', href: '/servicesfour' },
        { name: 'Planificación para la Gobernanza', href: '/servicesfive' },
        { name: 'Gestión de Asuntos Legales y Corporativos', href: '/servicessix' }
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

/* Responsive Styles */
@media (max-width: 768px) {
  .flex-wrap {
    flex-wrap: wrap;
  }

  .mb-8 {
    margin-bottom: 4rem;
  }

  .md\:w-1\/3 {
    width: 100%;
  }

  .md\:mb-0 {
    margin-bottom: 0;
  }
}
</style>
