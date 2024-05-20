<template>
  <footer class="bg-black text-white py-8">
    <div class="container mx-auto px-4">
      <!-- Logo y Slogan -->
      <div class="flex items-center justify-between mb-8">
        <div class="flex items-center">
          <img src="../../assets/LeReve.svg" alt="Logo" class="h-15 w-15 mr-2"> 
          <br/>
          <span class="text-lg font-semibold">Preservando tu legado, asegurando tu futuro</span>
        </div>
      </div>

      <!-- Enlaces de navegación -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <!-- Nosotros -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Nosotros</h3>
          <ul>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>

        <!-- Servicios -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Servicios</h3>
          <ul>
            <li><a href="#">Servicio 1</a></li>
            <li><a href="#">Servicio 2</a></li>
            <li><a href="#">Servicio 3</a></li>
          </ul>
        </div>

        <!-- Acerca de -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Acerca de</h3>
          <ul>
            <li><a href="#">Misión</a></li>
            <li><a href="#">Visión</a></li>
            <li><a href="#">Valores</a></li>
          </ul>
        </div>

        <!-- Contacto -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Contacto</h3>
          <u    l>
            <li>Dirección: Av. Principal 123</li>
            <li>Teléfono: +123 456 789</li>
            <li>Email: info@tudominio.com</li>
          </u>
        </div>
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
}
</script>

<style scoped>
footer {
  background-color: #232323;
}
/* Aquí puedes agregar estilos adicionales específicos del footer si lo necesitas */
</style>
