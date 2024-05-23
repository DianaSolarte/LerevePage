<template>
  <div>
    <!-- Títulos -->
    <div class="text-left my-8">
      <p class="text-sm text-gray-500">Lo que hacemos</p>
      <h2 class="text-4xl font-bold ">Servicios integrales para el éxito de su negocio</h2>
      <p class="text-gray-700">En Le Reve ofrecemos una amplia gama de servicios diseñados para ayudarlo a alcanzar sus objetivos financieros y empresariales.</p>
    </div>

    <!-- Cards -->
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="(service, index) in services" :key="index" class="bg-custom-gray border border-gray-200 p-6 rounded-lg shadow-lg">
        <div class="flex justify-center mb-4">
          <div v-html="service.icon" class="w-10 h-10 text-blue-500"></div>
        </div>
        <div class="text-left">
          <h3 class="text-xl font-bold mb-2">{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <div class="mt-4">
            <a :href="service.link" class="text-blue-500 hover:underline flex items-center">
              Ver más
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"/></svg>`,
    title: 'Asesoría Financiera Integral',
    description: 'Diseñamos un plan financiero personalizado a la medida de sus necesidades y objetivos, tomando en cuenta su situación financiera actual y sus metas a futuro.',
    link: '#'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/></svg>`,
    title: 'Gestión Inmobiliaria',
    description: 'Optimizamos sus procesos administrativos, liberando su tiempo para que pueda enfocarse en lo que realmente importa: el crecimiento de su negocio.',
    link: '#'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clip-rule="evenodd"/></svg>`,
    title: 'Planificación Patrimonial',
    description: 'Llevamos un control preciso de sus finanzas con servicios de facturación y registro impecables y actualizados.',
    link: '#'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z"/><path d="M5.25 4.5a2.25 2.25 0 0 0-2.25 2.25v12A2.25 2.25 0 0 0 5.25 21h12a2.25 2.25 0 0 0 2.25-2.25v-7.5a.75.75 0 0 0-1.5 0v7.5c0 .414-.336.75-.75.75h-12a.75.75 0 0 1-.75-.75v-12c0-.414.336-.75.75-.75h7.5a.75.75 0 0 0 0-1.5h-7.5Z"/></svg>`,
    title: 'Servicios inmobiliarios',
    description: 'Evaluamos y mitigamos riesgos financieros y operacionales para proteger su negocio.',
    link: '#'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"/></svg>`,
    title: 'Gestión de riesgos',
    description: 'Le ayudamos a encontrar la propiedad perfecta para su negocio o inversión, ya sea que requiera comprar, alquilar o administrar una propiedad.',
    link: '#'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z"/><path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z" clip-rule="evenodd"/><path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z"/></svg>`,
    title: 'Auditoría financiera y de procesos',
    description: 'Le ayudamos a encontrar la propiedad perfecta para su negocio o inversión, ya sea que requiera comprar, alquilar o administrar una propiedad.',
    link: '#'
  }
]);
</script>

<style scoped>

*{
  margin: 0; 
  padding: 0; 
  margin: 20px auto; 
  max-width: 1100px; 

}
.text-center p {
  color: #333;
}

.bg-custom-gray {
  background-color: #F6F6F6;
}

.border {
  border-color: #e0e7ff;
}

.p-6 {
  padding: 1.5rem;
}

.rounded-lg {
  border-radius: 0.75rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.mb-4 {
  margin-bottom: 1rem;
}

.text-3xl {
  font-size: 1.875rem;
}

.text-xl {
  font-size: 1.25rem;
}

.font-bold {
  font-weight: 700;
}

.text-gray-700 {
  color: #4a5568;
}



.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.md\:grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.gap-8 {
  gap: 2rem;
}

@media (min-width: 768px) {
  .md\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
