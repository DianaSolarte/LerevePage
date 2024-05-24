<template>
  <div class="fixed bottom-5 md:right-5 lg:right-10 z-50">
    <a href="https://wa.me/573227023917" target="_blank" class="inline-block bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition-transform transform hover:rotate-12">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" class="h-8 w-8 rotate-animation">
    </a>
  </div>
</template>

<script>
export default {
  name: 'Whatsapp',
}
</script>

<style scoped>
.rotate-animation {
  transition: transform 0.5s ease-in-out; /* Define una transición suave */
}

.rotate-animation:hover {
  transform: rotate(360deg); /* Aplica una rotación de 360 grados al pasar el mouse */
}
</style>
