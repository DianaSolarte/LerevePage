<template>
  <div class="carousel-container">
    <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }">
      <div class="carousel-item">
        <div class="carousel-content" style="background-color: #F6F6F6;">
          <img src="../../../assets/AboutUs/Rectangle 19.png" alt="Imagen 1" class="carousel-image">
          <div class="carousel-text-container">
            <p class="carousel-text">Economista con énfasis en finanzas de la Universidad de los Andes. Especialista y Magister en finanzas corporativas del CESA. Doctor en Finanzas por la Swiss Management Center University. Candidato a Doctor en administración financiera de la Universidad Central de Nicaragua.
              Dieciocho años de experiencia en el sector bursátil en mercados de renta fija, renta variable, divisas y derivados; tanto en plazas locales, como internacionales. Desempeño laboral como asesor de inversiones, comisionista de bolsa y jefe de mesa del sector real.
              Actualmente Director de Recaudación de Fondos y Estructuración en Genesis US Properties, así como también Director de Inversiones de un Family Office y miembro del consejo asesor de Seguridad Superior.
            </p>
            <p class="carousel-name"><br/><br/>John Jiménez</p>
            <p>Gerente general</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-content" style="background-color: #F6F6F6;">
          <img src="../../../assets/AboutUs/Rectangle 19 (1).png" alt="Imagen 2" class="carousel-image">
          <div class="carousel-text-container">
            <p class="carousel-text">Administradora de Empresas con diplomado en contaduría y marketing, con más de 10 años de experiencia en la administración de inmuebles a terceros, asesoría en creación de empresas, asesorías contables y legales.</p>
            <p class="carousel-name"><br/><br/>Lina Burbano</p>
            <p>Gerente jurídico y contable</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-content" style="background-color: #F6F6F6;">
          <img src="../../../assets/AboutUs/Rectangle 19 (2).png" alt="Imagen 3" class="carousel-image">
          <div class="carousel-text-container">
            <p class="carousel-text">Economista con énfasis en finanzas de la Universidad de los Andes. Especialista y Magister en finanzas corporativas del CESA. Doctor en Finanzas por la Swiss Management Center University. Candidato a Doctor en administración financiera de la Universidad Central de Nicaragua.
              Dieciocho años de experiencia en el sector bursátil en mercados de renta fija, renta variable, divisas y derivados; tanto en plazas locales, como internacionales. Desempeño laboral como asesor de inversiones, comisionista de bolsa y jefe de mesa del sector real.
              Actualmente Director de Recaudación de Fondos y Estructuración en Genesis US Properties, así como también Director de Inversiones de un Family Office y miembro del consejo asesor de Seguridad Superior.
            </p>
            <p class="carousel-name"><br/><br/>Juan Jiménez</p>
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
      slideWidth: 50, // Ancho de cada slide en porcentaje
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = 1; // Volver al penúltimo slide si estamos en el primero
      }
    },
    nextSlide() {
      if (this.currentSlide < 1) { // Permitir avanzar si no estamos en el último slide
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
  width: 100%;
}

.carousel-wrapper {
  display: flex;
  transition: transform 
0.5s ease;
}

.carousel-item {
  flex: 0 0 50%; /* Cada item ocupa el 50% del contenedor */
  height: 800px;
  box-sizing: border-box;
}

.carousel-content {
  background-color: #F6F6F6;
  padding: 20px;
  border-radius: 24px;
  border: 2px solid #E8E8E8;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinear contenido a la izquierda */
}

.carousel-image {
  width: 270px; /* Ancho de la imagen */
  height: 363.89px; /* Altura de la imagen */
  margin-right: 10px; /* Espacio entre la imagen y el texto */
  border-radius: 12px;
}

.carousel-text-container {
  text-align: left;
}

.carousel-text {
  color: #333;
}

.carousel-name {
  font-weight: bold;
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
/* Estilos para dispositivos móviles */
@media (max-width: 640px) {
  .carousel-wrapper {
    overflow-x: hidden; /* Ocultar desplazamiento horizontal */
    scroll-snap-type: none; /* Deshabilitar el desplazamiento de tarjetas */
    -webkit-overflow-scrolling: touch; /* Desplazamiento suave para dispositivos iOS */
    flex-wrap: nowrap; /* Alinear las tarjetas en una sola fila */
  }
  
  .carousel-item {
    flex: 0 0 100%; /* Cada tarjeta ocupa el 100% del contenedor */
  }
}
</style>


