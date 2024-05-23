<template>
  <div class="about-us">
    <div class="section">
      <h3 style="text-align: left;"><br/><br/> Los valores que guían nuestro trabajo</h3>
      <h2 style="text-align: left; font-weight: bold;">Los pilares de nuestra cultura empresarial</h2>
      <p style="text-align: left;">Estamos comprometidos con brindar a nuestros clientes un servicio personalizado y de alta calidad.</p>
    </div>

    <div class="values-section">
      <div class="value-card">
        <h4 style="color: #1C76FF;font-weight: bold">Excelencia</h4>
        <p style="text-align: left;">Buscamos constantemente la más alta calidad en todo lo que hacemos. Nos esforzamos por superar las expectativas, alcanzar los más altos estándares y buscar la mejora continua en todos los aspectos de nuestro trabajo y servicio.</p>
      </div>
      <div class="value-card">
        <h4 style="color: #1C76FF;font-weight: bold">Integridad</h4>
        <p style="text-align: left;">Siempre prima la honestidad, la ética y la coherencia en nuestras acciones y decisiones. Actuamos con principios morales sólidos, transparentes en nuestras comunicaciones y mantenemos altos estándares de conducta profesional en todo momento.</p>
      </div>
      <div class="value-card">
        <h4 style="color: #1C76FF;font-weight: bold">Confidencialidad</h4>
        <p style="text-align: left; ">Es la base de todas nuestras relaciones, tanto internas como externas. Se construye a través de la fiabilidad, la credibilidad y la consistencia en nuestras acciones y palabras. Significa cumplir nuestras promesas, ser honestos y confiables, y demostrar respeto y lealtad hacia nuestros clientes, colegas y socios comerciales.</p>
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
  padding: 99px;
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
  justify-content: space-between;
}

.value-card {
  flex: 0 0 30%;
  background-color: #;
  padding: 20px;
  border-radius: 24px;
  border: 2px solid #E8E8E8;  
  box-shadow: 0 0 60px rgba(28, 118, 255, 0.5); 

}

.value-card h4 {
  margin-bottom: 10px;
  color: #1C76FF;
  
}

.value-card p {
  color: #333;
}
</style>
