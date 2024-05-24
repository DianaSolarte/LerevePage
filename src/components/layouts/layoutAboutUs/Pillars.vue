<template>
  <div class="about-us">
    <div class="section">
      <h3 class="webL_subtitulo text-left mt-8">Los valores que guían nuestro trabajo</h3>
      <h2 class="webL_subtitulo text-left font-bold">Los pilares de nuestra cultura empresarial</h2>
      <p class="webL_texto text-left">Estamos comprometidos con brindar a nuestros clientes un servicio personalizado y
        de alta
        calidad.</p>
    </div>

    <div class="values-section flex flex-col md:flex-row md:justify-between">
      <div class="value-card">
        <h4 class="webL_texto text-blue-500 font-bold">Excelencia</h4>
        <p class=" webL_texto text-left">Buscamos constantemente <strong class="font-bold">la más alta calidad</strong>
          en todo lo que
          hacemos. Nos
          esforzamos por
          superar las expectativas, alcanzar los más altos estándares y buscar la mejora continua en todos los aspectos
          de nuestro trabajo y servicio.</p>
      </div>
      <div class="value-card">
        <h4 class="text-blue-500 font-bold webL_texto">Integridad</h4>
        <p class="webL_texto text-left">Siempre prima <strong class="font-bold">la honestidad, la ética y la
            coherencia</strong> en nuestras acciones y
          decisiones.
          Actuamos con principios morales sólidos, transparentes en nuestras comunicaciones y mantenemos altos
          estándares de conducta profesional en todo momento.</p>
      </div>
      <div class="value-card">
        <h4 class="webL_texto text-blue-500 font-bold">Confidencialidad</h4>
        <p class="webL_texto text-left">Es la base de todas nuestras relaciones, tanto internas como externas. Se
          construye a
          través de la <strong class="font-bold">fiabilidad, la credibilidad y la consistencia</strong> en nuestras
          acciones y palabras. Significa cumplir
          nuestras promesas, ser honestos y confiables, y demostrar respeto y lealtad hacia nuestros clientes, colegas y
          socios comerciales.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pillars',
};
</script>

<style scoped>
.about-us {
  padding: 20px;
  /* Reducido el padding para una apariencia más compacta */
}

.section {
  text-align: center;
  margin-bottom: 30px;
}

.section h3 {
  color: #000;
}

.section h2 {
  color: #000;
  font-size: 24px;
  margin-bottom: 10px;
}

.values-section {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .values-section {
    flex-direction: row;
    justify-content: space-between;
  }
}

.value-card {
  flex: 1;
  background-color: #fff;
  padding: 15px;
  /* Reducido el padding para minimizar la altura */
  border-radius: 24px;
  border: 2px solid #E8E8E8;
  box-shadow: 0 0 30px rgba(28, 118, 255, 0.5);
  /* Reducida la sombra */
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  .value-card {
    margin-bottom: 0;
    margin-left: 10px;
    /* Añadido margen entre las tarjetas en pantallas grandes */
    margin-right: 10px;
    /* Añadido margen entre las tarjetas en pantallas grandes */
  }

  .values-section>.value-card:first-child {
    margin-left: 0;
    /* Eliminar margen izquierdo para la primera tarjeta */
  }

  .values-section>.value-card:last-child {
    margin-right: 0;
    /* Eliminar margen derecho para la última tarjeta */
  }
}

.value-card h4 {
  margin-bottom: 10px;
  color: #1C76FF;
}

.value-card p {
  color: #333;
}
</style>
