<template>
  <div class="carousel-container">
    <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentSlide * 50}%)` }">
      <div class="carousel-item">
        <div class="carousel-content" style="background-color: #F6F6F6;">
          <img src="../../../assets/AboutUs/Rectangle 19.png" alt="Imagen 1" class="carousel-image" style="width: 50%; float: left;">
          <div style="float: left; margin-left: 10px;">
            <p class="carousel-text">Economista con énfasis en finanzas de la Universidad de los Andes. Especialista y Magister en finanzas corporativas del CESA. Doctor en Finanzas por la Swiss Management Center University. Candidato a Doctor en administración financiera de la Universidad Central de Nicaragua.
              Dieciocho años de experiencia en el sector bursátil en mercados de renta fija, renta variable, divisas y derivados; tanto en plazas locales, como internacionales. Desempeño laboral como asesor de inversiones, comisionista de bolsa y jefe de mesa del sector real.
              Actualmente Director de Recaudación de Fondos y Estructuración en Genesis US Properties, así como también Director de Inversiones de un Family Office y miembro del consejo asesor de Seguridad Superior.
            </p>
            <p style="font-weight: bold;"><br/> <br/>John Jiménez</p>
            <p>Gerente general</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-content" style="background-color: #F6F6F6;">
          <img src="../../../assets/AboutUs/Rectangle 19 (1).png" alt="Imagen 2" class="carousel-image" style="width: 50%; float: left;">
          <div style="float: left; margin-left: 10px;">
            <p class="carousel-text">Administradora de Empresas con diplomado en contaduría y marketing, con más de 10 años de experiencia en la administración de inmuebles a terceros, asesoría en creación de empresas , asesorías contables y legales.  </p>
            <p style="font-weight: bold;"><br/> <br/>Lina Burbano</p>
            <p>Gerente jurídico y contable</p>
          </div>
        </div>
      </div>
      
      <div class="carousel-item">
        <div class="carousel-content" style="background-color: #F6F6F6;">
          <img src="../../../assets/AboutUs/Rectangle 19 (2).png" alt="Imagen 3" class="carousel-image" style="width: 50%; float: left;">
          <div style="float: left; margin-left: 10px;">
            <p class="carousel-text">Economista con énfasis en finanzas de la Universidad de los Andes. Especialista y Magister en finanzas corporativas del CESA. Doctor en Finanzas por la Swiss Management Center University. Candidato a Doctor en administración financiera de la Universidad Central de Nicaragua.
              Dieciocho años de experiencia en el sector bursátil en mercados de renta fija, renta variable, divisas y derivados; tanto en plazas locales, como internacionales. Desempeño laboral como asesor de inversiones, comisionista de bolsa y jefe de mesa del sector real.
              Actualmente Director de Recaudación de Fondos y Estructuración en Genesis US Properties, así como también Director de Inversiones de un Family Office y miembro del consejo asesor de Seguridad Superior.
            </p>
            <p style="font-weight: bold;"><br/> <br/>Juan Jiménez</p>
            <p>Gerente administrativa</p>
          </div>
        </div>
      </div>
    </div>
    <button class="prev-button" @click="prevSlide">&lt;</button>
    <button class="next-button" @click="nextSlide">&gt;</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = 2; // Volver al último slide si estamos en el primero
      }
    },
    nextSlide() {
      if (this.currentSlide < 2) { // Permitir avanzar si no estamos en el último slide
        this.currentSlide++;
      } else {
        this.currentSlide = 0; // Volver al primer slide si estamos en el último
      }
    },
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  overflow: hidden;
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.5s ease; /* Agregamos transición para un desplazamiento suave */
}

.carousel-item {
  flex: 0 0 50%; /* Cada item ocupa la mitad del contenedor */
  padding: 0 10px;
  margin-left:68px;
}

.carousel-content {
  background-color: #F6F6F6;
  padding: 20px;
  border-radius: 24px;
  overflow: hidden; 
  border: 2px solid #E8E8E8; 
  height: 100%; 
}

.carousel-image {
  margin-bottom: 10px;
  max-width: 100%;
}

.carousel-text {
  color: #333;
}

.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 24px;
  cursor: pointer;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}
</style>
