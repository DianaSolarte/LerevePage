<template>
  <header class="navbar rounded-full">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <!-- Sección izquierda: Logo -->
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Le Reve</span>
          <img class="h-8 w-auto" src="/src/assets/LeReve.svg" alt="Le Reve Logo" />
        </a>
      </div>

      <!-- Sección central: Navegación -->
      <div class="hidden lg:flex lg:gap-x-12">
        <!-- Menú desplegable de Servicios -->
        <Popover class="relative">
          <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white-900">
            Servicios
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </PopoverButton>
          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel
              class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div v-for="item in services" :key="item.name"
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div class="flex-auto">
                    <a :href="item.href" class="block font-semibold text-gray-900">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </a>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <!-- Enlace de Acerca de -->
        <a href="/aboutus" class="text-sm font-semibold leading-6 text-white-900">Acerca de</a>
        <!-- Enlace de Contacto  -->
        <a href="/form" class="text-sm font-semibold leading-6 text-white-900">Contacto</a>
      </div>

      <!-- Sección derecha: Botón de Contactenos -->
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="/form" target="_blank"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full rounded flex items-center">
          <span aria-hidden="true">&rarr;</span> Contactenos
        </a>
      </div>

      <!-- Menú móvil -->
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </nav>

    <!-- Menú móvil -->
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#/" class="-m-1.5 p-1.5">
            <span class="sr-only">Le Reve</span>
            <img class="h-8 w-auto" src="/src/assets/LeReve.svg" alt="Le Reve Logo" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Servicios
                  <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton v-for="item in services" :key="item.name" as="a" :href="item.href"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    {{ item.name }}
                  </DisclosureButton>
                </DisclosurePanel>
              </Disclosure>
              <a href="/aboutus"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Acerca
                de</a>
              <a href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contacto</a>
            </div>
            <div class="py-6">
              <a href="/form"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contactenos</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const services = [
  { name: 'S1 - Planificación financiera', description: 'Planificación financiera', href: '/servicesone' },
  { name: 'S2 - Gestión Inmobiliaria', description: 'Gestión Inmobiliaria', href: '/servicestwo' },
  { name: 'S3 - Administración del Family Office', description: 'Administración del Family Office', href: '/servicesthree' },
  { name: 'S4 - Gestión de Inversiones', description: 'Gestión de Inversiones', href: '/servicesfour' },
  { name: 'S5 - Planificación para la Gobernanza', description: 'Planificación para la Gobernanza', href: '/servicesfive' },
  { name: 'S6 - Gestión de Asuntos Legales y Corporativos', description: 'Gestión de Asuntos Legales y Corporativos', href: '/servicessix' }
]

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.navbar {
  background-color: #232323;
  color: #ffff;
  margin-left: 1cm;
  margin-right: 1cm;
  /* marging-top: 100cm; */
}

/* Estilos para dispositivos móviles y tablets */
@media (max-width: 1023px) {
  .navbar {
    margin-left: 0;
    margin-right: 0;
    marging-top: 0;
  }
}
</style>
