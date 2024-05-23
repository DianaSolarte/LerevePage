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
  name: 'FrequentQuestionsFour',
  data() {
    return {
      faqs: [
        {
          question: '¿Cómo se determina la asignación de activos en mi cartera?',
          answer: 'La asignación de activos en tu cartera se determina en función de varios factores, incluyendo la tolerancia al riesgo, horizonte temporal de inversión, objetivos financieros y condiciones del mercado',
          showAnswer: false,
        },
        {
          question: '¿Qué tipo de rendimiento puedo esperar de mi cartera de inversiones?',
          answer: 'El rendimiento de tu cartera de inversiones dependerá de una variedad de factores, incluyendo la estrategia de inversión empleada, las condiciones del mercado, la diversificación de activos y la gestión activa de riesgos. Si bien no podemos garantizar ningún rendimiento específico, nuestro objetivo es diseñar una cartera que busque generar rendimientos consistentes y alineados con tus objetivos financieros a largo plazo.',
          showAnswer: false,
        },
          {
          question: '¿Con qué frecuencia recibiré actualizaciones sobre el rendimiento de mi cartera?',
          answer: 'La frecuencia de las actualizaciones sobre el rendimiento de tu cartera puede variar según sus preferencias y las políticas de comunicación del proveedor de servicios de gestión de inversiones. En general, puedes esperar recibir actualizaciones periódicas, que pueden ser mensuales, trimestrales o anuales, dependiendo de tus necesidades y requerimientos.',
          showAnswer: false,
        },
        {
          question: '¿Cómo proteger mi privacidad y seguridad financiera?',
          answer: 'Los proveedores de servicios de gestión de inversiones suelen tener políticas y procedimientos en vigor para proteger la privacidad y seguridad financiera de sus clientes. Esto puede incluir medidas de seguridad de datos, políticas de confidencialidad, y cumplimiento de regulaciones financieras y de privacidad aplicables. Antes de comprometerte con un servicio de gestión de inversiones, asegúrate de revisar y comprender sus políticas de seguridad y privacidad.',
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
