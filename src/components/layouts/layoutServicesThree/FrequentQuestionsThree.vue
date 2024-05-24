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
  name: 'FrequentQuestionsThree',
  data() {
    return {
      faqs: [
        {
          question: '¿Qué es un family office y por qué necesito uno?',
          answer: 'El Family Office es una entidad dedicada a la gestión integral del patrimonio familiar, y esto implica abordar una variedad de áreas de conocimiento, como inversiones, planificación patrimonial, gestión de riesgos, asuntos legales y fiscales, entre otros. La complejidad de estas áreas requiere la colaboración de expertos en múltiples disciplinas que trabajen en conjunto para garantizar el éxito y la preservación del patrimonio familiar a lo largo del tiempo. La singularidad del Family Office radica en su enfoque exclusivo en el beneficio y los intereses de la familia a la que sirve.',
          showAnswer: false,
        },
        {
          question: '¿Cuáles son los servicios ofrecidos por un family office?',
          answer: 'Los servicios pueden incluir gestión de inversiones, planificación patrimonial, asesoramiento fiscal, gestión de riesgos, servicios administrativos y educación financiera, entre otros.',
          showAnswer: false,
        },
        {
          question: '¿Cómo seleccionar un family office adecuado para mi familia?',
          answer: 'La familia desempeña un papel importante al proporcionar orientación estratégica, comunicarse abiertamente con el family office y participar en la toma de decisiones importantes.',
          showAnswer: false,
        },
        {
          question: '¿Cuál es el papel de la familia en la administración del family office?',
          answer: 'XXXX',
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
