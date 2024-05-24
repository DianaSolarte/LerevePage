<template>
  <div class="container mx-auto py-12 px-4">
    <div class="text-left mb-8">
      <h2 class="inline-block border border-blue-500 text-black-500 py-2 px-4 rounded-full text-sm">Preguntas Frecuentes</h2>
    </div>
    <div class="text-left mb-8">
      <h3 class="text-2xl font-bold mb-2">¿Tienes preguntas?</h3>
      <p>Consulta nuestras Preguntas Frecuentes para obtener información rápida sobre cómo trabajamos, qué ofrecemos y cómo podemos ayudar a que tu marca brille.</p>
    </div>
    <div class="space-y-4">
      <div v-for="(faq, index) in faqs" :key="index" class="bg-custom-gray p-4 rounded-lg">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h4 class="text-lg font-semibold">{{ faq.question }}</h4>
          <button @click="toggleAnswer(index)" class="text-blue-500 text-2xl font-bold mt-2 sm:mt-0">
            {{ faq.showAnswer ? '-' : '+' }}
          </button>
        </div>
        <p v-if="faq.showAnswer" class="mt-2">{{ faq.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrequentQuestions',
  data() {
    return {
      faqs: [
        {
          question: '¿Cuál es su enfoque en la gestión de arrendamientos?',
          answer: 'Nos enfocamos en garantizar un flujo de ingresos estable para nuestros clientes a través de una gestión eficiente de arrendamientos, que incluye la selección de inquilinos, negociación de contratos y resolución de problemas.',
          showAnswer: false,
        },
        {
          question: '¿Cómo seleccionan las propiedades para inversión?',
          answer: 'Nuestro equipo realiza un análisis exhaustivo del mercado y evalúa cada oportunidad de inversión en función de su potencial de rentabilidad , riesgo objetivos y perfil de riesgo de nuestros clientes.',
          showAnswer: false,
        },
        {
          question: '¿Ofrecen servicios de gestión de propiedades en el extranjero?',
          answer: 'Sí, tenemos experiencia en la gestión de propiedades tanto a nivel nacional como internacional. Trabajamos con una red de socios y expertos locales para ofrecer servicios de gestión de propiedades en una variedad de ubicaciones.',
          showAnswer: false,
        },
      ],
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].showAnswer = !this.faqs[index].showAnswer;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 4rem;
}
.bg-custom-gray {
  background-color: #E8E8E8;
}
.text-left {
  text-align: left;
}
</style>
