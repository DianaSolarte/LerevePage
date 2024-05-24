<template>
  <div>

    <div class="w-full  order-2 md:order-1 mt-8">
      <div class="mb-4">
        <h4 class="webL_subtitulo font-bold text-black-500 mt-12 mb-2">Un equipo comprometido con su éxito</h4>
        <h2 class="L_frames_titulo font-bold text-black-500" style="color: #000;"><strong>Conozca al equipo</strong>
        </h2>
        <p class="webL_texto text-black-700 mt-8 w-full">En Le Reve, contamos con un equipo de profesionales altamente
          calificados y experimentados que están comprometidos con el éxito de nuestros clientes. Cada miembro de
          nuestro equipo aporta su experiencia y conocimientos únicos para brindar un servicio integral y
          personalizado..</p>
      </div>
    </div>
  </div>
  <div class="carousel-container mt-12">
    <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }">
      <div class="carousel-item">
        <div class="carousel-content" style="background-color: #F6F6F6;">
          <img src="../../../assets/AboutUs/Rectangle 19.png" alt="Imagen 1" class="carousel-image">
          <div class="carousel-text-container mt-12 webL_texto">
            <p>Economista con énfasis en finanzas de la Universidad de los Andes. Especialista y
              Magister en finanzas corporativas del CESA. Doctor en Finanzas por la Swiss Management Center University.
              Candidato a Doctor en administración financiera de la Universidad Central de Nicaragua.
              Dieciocho años de experiencia en el sector bursátil en mercados de renta fija, renta variable, divisas y
              derivados; tanto en plazas locales, como internacionales. Desempeño laboral como asesor de inversiones,
              comisionista de bolsa y jefe de mesa del sector real.
              Actualmente Director de Recaudación de Fondos y Estructuración en Genesis US Properties, así como también
              Director de Inversiones de un Family Office y miembro del consejo asesor de Seguridad Superior.
            </p>
            <div class="flex flex-wrap justify-between mt-12">
              <div>
                <p class="carousel-name mt-12">John Jiménez</p>
                <p class="text-blue-500">Gerente general</p>
              </div>
              <div>
                <a href="https://www.linkedin.com/" class="-m-1.5 p-1.5">

                  <img class="h-8 w-auto" src="/src/assets/AboutUs/linkedin-logo-linkedin-icon-transparent-free-.png"
                    alt="Linkdlein" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-content" style="background-color: #F6F6F6;">
          <img src="../../../assets/AboutUs/Rectangle 19 (1).png" alt="Imagen 2" class="carousel-image">
          <div class="carousel-text-container webL_texto mt-12">
            <p>Administradora de Empresas con diplomado en contaduría y marketing, con más
              de 10
              años de experiencia en la administración de inmuebles a terceros, asesoría en creación de empresas,
              asesorías contables y legales.</p>
            <div class="flex flex-wrap justify-between mt-12">
              <div>
                <p class="carousel-name">Lina Burbano</p>
                <p class="text-blue-500">Gerente jurídico y contable</p>
              </div>
              <div>
                <a href="https://www.linkedin.com/" class="-m-1.5 p-1.5">
                  <img class="h-8 w-auto" src="/src/assets/AboutUs/linkedin-logo-linkedin-icon-transparent-free-.png"
                    alt="Linkdlein" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-content" style="background-color: #F6F6F6;">
          <img src="../../../assets/AboutUs/Rectangle 19 (2).png" alt="Imagen 3" class="carousel-image">
          <div class="carousel-text-container webL_texto mt-12 flex flex-col">
            <p class="carousel-text">
              Economista con énfasis en finanzas de la Universidad de los Andes. Especialista y
              Magister en finanzas corporativas del CESA. Doctor en Finanzas por la Swiss Management Center University.
              Candidato a Doctor en administración financiera de la Universidad Central de Nicaragua.
              Dieciocho años de experiencia en el sector bursátil en mercados de renta fija, renta variable, divisas y
              derivados; tanto en plazas locales, como internacionales. Desempeño laboral como asesor de inversiones,
              comisionista de bolsa y jefe de mesa del sector real.
              Actualmente Director de Recaudación de Fondos y Estructuración en Genesis US Properties, así como también
              Director de Inversiones de un Family Office y miembro del consejo asesor de Seguridad Superior.
            </p>
            <div class="flex flex-wrap justify-between mt-12">
              <div>
                <p class="carousel-name mt-12">Ana Maria Rojas</p>
                <p class="text-blue-500">Gerente administrativa</p>
              </div>
              <div>
                <a href="https://www.linkedin.com/" class="-m-1.5 p-1.5">

                  <img class="h-8 w-auto" src="/src/assets/AboutUs/linkedin-logo-linkedin-icon-transparent-free-.png"
                    alt="Linkdlein" />
                </a>
              </div>
            </div>
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
  transition: transform 0.5s ease;
}

.carousel-item {
  flex: 0 0 50%;
  /* Cada item ocupa el 50% del contenedor */
  height: 900px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-content {
  background-color: #F6F6F6;
  padding: 20px;
  border-radius: 24px;
  border: 2px solid #E8E8E8;
  display: flex;
  flex-direction: column;
  height: 900px;
  margin-right: 30px;
  align-items: flex-start;
  /* Alinear contenido a la izquierda */
}

.carousel-image {
  width: 270px;
  /* Ancho de la imagen */
  height: 363.89px;
  /* Altura de la imagen */
  margin-right: 10px;
  /* Espacio entre la imagen y el texto */
  border-radius: 12px;
}

.carousel-text-container {
  text-align: left;
  display: flex;
  flex-direction: column;
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
    overflow-x: hidden;
    /* Ocultar desplazamiento horizontal */
    scroll-snap-type: none;
    /* Deshabilitar el desplazamiento de tarjetas */
    -webkit-overflow-scrolling: touch;
    /* Desplazamiento suave para dispositivos iOS */
    flex-wrap: nowrap;
    /* Alinear las tarjetas en una sola fila */
  }

  .carousel-item {
    flex: 0 0 100%;
    height: 900px;
    /* Cada tarjeta ocupa el 100% del contenedor */

  }
}
</style>
