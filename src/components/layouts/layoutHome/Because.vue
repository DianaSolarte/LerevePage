<template>
  <div class="porque text-white p-8 rounded-lg">
    <p class="text-sm">¿Por qué Le Reve?</p>
    <p class="font-bold text-lg mt-2 mb-4">Transformamos su negocio</p>
    <p class="text-sm">Más de {{ years }} años de experiencia brindando asesoría financiera y empresarial de primer nivel.</p>
    
    <div class="flex justify-between mt-10 space-x-4">
      <a href="#" class="flex-1">
        <img src="../../../assets/Home/Frame 14213.png" alt="Imagen 1" class="w-full">
      </a>
      <a href="#" class="flex-1">
        <img src="../../../assets/Home/Frame 14212.png" alt="Imagen 2" class="w-full">
      </a>
      <a href="#" class="flex-1">
        <img src="../../../assets/Home/Frame 14214.png" alt="Imagen 3" class="w-full">
      </a>
    </div>
  </div>
</template>

<script setup>
const years = 20; // Puedes ajustar el número de años según sea necesario
</script>

<style scoped>
.porque {
  background-color: #232323;
  border-radius: 24px; /* Agregamos el radio de borde */
}

.text-white {
  color: white;
}

.p-8 {
  padding: 2rem;
}

.font-bold {
  font-weight: bold;
}

.text-lg {
  font-size: 1.125rem;
}

.text-sm {
  font-size: 0.875rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.mt-10 {
  margin-top: 2.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}

.space-x-4 {
  gap: 1rem;
}

.flex-1 {
  flex: 1;
}

.w-full {
  width: 100%;
}
</style>
