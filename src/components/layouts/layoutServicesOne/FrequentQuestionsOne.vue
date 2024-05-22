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
          question: '¿Cuál es el proceso para comenzar a trabajar con ustedes?',
          answer: 'El primer paso es programar una consulta inicial donde discutiremos sus objetivos financieros y cómo podemos ayudarlo. A partir de ahí, desarrollaremos un plan de acción personalizado para satisfacer sus necesidades.',
          showAnswer: false,
        },
        {
          question: '¿Qué tipo de clientes suelen beneficiarse más de su asesoría financiera?',
          answer: 'Nuestros servicios están diseñados para clientes de alto patrimonio neto, incluidos individuos, familias y Family Offices que buscan optimizar la gestión de su patrimonio y alcanzar sus objetivos financieros a largo plazo.',
          showAnswer: false,
        },
        {
          question: '¿Cuál es la diferencia entre asesoría financiera y gestión de inversiones?',
          answer: 'La asesoría financiera abarca una gama más amplia de servicios, que incluyen planificación financiera integral, gestión de riesgos, planificación tributaria, entre otros. La gestión de inversiones se centra específicamente en la gestión activa de carteras de inversión para maximizar el rendimiento y minimizar el riesgo.',
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
