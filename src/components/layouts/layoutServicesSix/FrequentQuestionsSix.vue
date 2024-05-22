<template>
  <div class="container mx-auto py-12 px-4">
    <div class="text-left mb-8">
      <h2 class="inline-block bg-blue-500 text-white py-2 px-4 rounded-full text-sm">Preguntas Frecuentes</h2>
    </div>
    <div class="text-left mb-8">
      <h3 class="text-2xl font-bold mb-2">¿Tienes preguntas?</h3>
      <p>Consulta nuestras Preguntas Frecuentes para obtener información rápida sobre cómo trabajamos, qué ofrecemos y cómo podemos ayudar a que tu marca brille.</p>
    </div>
    <div class="space-y-4">
      <div v-for="(faq, index) in faqs" :key="index" class="bg-custom-gray p-4 rounded-lg">
        <div class="flex justify-between items-center">
          <h4 class="text-lg font-semibold">{{ faq.question }}</h4>
          <button @click="toggleAnswer(index)" class="text-blue-500 text-2xl font-bold">
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
          question: '¿Cuáles son los requisitos legales que debo cumplir como organización o familia?',
          answer: 'Los requisitos legales pueden variar según la jurisdicción y la naturaleza de la organización o familia, pero pueden incluir la presentación de informes financieros, el cumplimiento de regulaciones específicas de la industria y el cumplimiento de leyes laborales y fiscales, entre otros.',
          showAnswer: false,
        },
        {
          question: '¿Cuáles son los beneficios de trabajar con un servicio de planificación para la gobernanza?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida.',
          showAnswer: false,
        },
        {
          question: '¿Cómo puedo saber si mi organización o familia necesita ayuda en la planificación de la gobernanza?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida.',
          showAnswer: false,
        },
        {
          question: '¿Cómo proteger mi privacidad y seguridad financiera?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida.',
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
