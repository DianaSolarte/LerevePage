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
  name: 'FrequentQuestionsFive',
  data() {
    return {
      faqs: [
        {
          question: '¿Cuál es la importancia de tener una estructura de gobernanza sólida?',
          answer: 'Una estructura de gobernanza sólida es fundamental porque proporciona un marco claro de roles, responsabilidades y procesos de toma de decisiones dentro de una organización o familia. Promueve la transparencia y la rendición de cuentas, facilita la toma de decisiones eficiente y estratégica',
          showAnswer: false,
        },
        {
          question: '¿Cuáles son los beneficios de trabajar con un servicio de planificación para la gobernanza?',
          answer: 'Experiencia y conocimientos especializados en la creación y mejora de estructuras de gobernanza. Asesoramiento personalizado y adaptado a las necesidades específicas de tu organización o familia, Acceso a herramientas y enfoques probados para abordar desafíos de gobernanza, Orientación continua y apoyo durante todo el proceso de implementación',
          showAnswer: false,
        },
        {
          question: '¿Cómo puedo saber si mi organización o familia necesita ayuda en la planificación de la gobernanza?',
          answer: 'Algunas señales de que tu organización o familia podría necesitar ayuda en la planificación de la gobernanza incluyen: Confusión o conflicto en los roles y responsabilidades. Decisiones tomadas de manera inconsistente o sin un proceso claro. Falta de transparencia o comunicación efectiva. Riesgos no gestionados o falta de rendición de cuentas. Deseo de mejorar la eficiencia y la efectividad de las operaciones',
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
