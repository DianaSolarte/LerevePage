<template>
  <div class="porque text-white p-8 rounded-lg">
    <p class="text-sm">¿Por qué Le Reve?</p>
    <p class="font-bold text-lg mt-2 mb-4">Transformamos su negocio</p>
    <p class="text-sm">Más de {{ years }} años de experiencia brindando asesoría financiera y empresarial de primer nivel. <BR/> </p>
    
    <!-- Contenedor de imágenes con diseño responsive -->
    <div class="flex flex-col md:flex-row md:justify-between mt-10 space-y-4 md:space-y-0 md:space-x-4">
      <div class="flex-1 text-left image-container">
        <a href="#">
          <img src="../../../assets/Home/Frame 14212.png" alt="Imagen 1" class="image"> 
        </a>
        <p class="font-bold mt-4">Asesoría experta</p>
        <p class="mt-2">Le brindamos un servicio personalizado y adaptado a sus necesidades específicas, garantizando un plan financiero que se ajuste a su realidad.</p>
      </div>
      <div class="flex-1 text-left image-container">
        <a href="#">
          <img src="../../../assets/Home/Frame 14213.png" alt="Imagen 2" class="image">
        </a>
        <p class="font-bold mt-4">Experiencia comprobada</p>
        <p class="mt-2">Nuestro equipo de profesionales altamente calificados cuenta con una amplia experiencia en asesoría financiera y empresarial, brindándole el conocimiento y la experiencia necesarios para tomar decisiones informadas.</p>
      </div>
      <div class="flex-1 text-left image-container">
        <a href="#">
          <img src="../../../assets/Home/Frame 14214.png" alt="Imagen 3" class="image">
        </a>
        <p class="font-bold mt-4">Confidencialidad y excelencia</p>
        <p class="mt-2">Mantenemos la más estricta confidencialidad de su información financiera y le ofrecemos un servicio de excelencia en todo momento.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const years = 20; // Puedes ajustar el número de años según sea necesario
</script>

<style scoped>
.porque {
  background-color: #232323;
  border-radius: 24px;
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

.flex-col {
  flex-direction: column;
}

.flex-1 {
  flex: 1;
}

.w-full {
  width: 100%;
}

.image {
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  height: 300px;
  padding: 50px;
}

.text-left {
  text-align: left;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}

.md\:space-x-4 > * + * {
  margin-left: 1rem;
}

.md\:space-y-0 {
  margin-top: 0 !important;
}

@media (min-width: 640px) {
  .flex-col.md\:flex-row {
    flex-direction: row;
  }
}
</style>
