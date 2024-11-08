<template>
    <nav class="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-4 flex justify-between items-center relative">
      <!-- Logo o Título del sitio -->
      <router-link class="text-lg font-bold" to="/">Futuro Saludable</router-link>
      
      <!-- Botón de hamburguesa para pantallas pequeñas -->
      <button @click="toggleMenu" class="block md:hidden focus:outline-none">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
  
      <!-- Fondo semitransparente para el menú móvil -->
      <div v-if="isMenuOpen" @click="toggleMenu" class="fixed inset-0 bg-black bg-opacity-50 md:hidden"></div>
  
      <!-- Menú de navegación -->
      <div
        :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'"
        class="fixed top-0 left-0 h-full w-3/4 bg-gradient-to-b from-blue-500 to-blue-600 p-6 space-y-4 transform transition-transform duration-300 md:relative md:translate-x-0 md:flex md:space-y-0 md:space-x-4 md:bg-transparent md:w-auto md:p-0"
      >
        <router-link @click="closeMenu" class="nav-link" to="/">Inicio</router-link>
        <router-link @click="closeMenu" class="nav-link" to="/alcance">Alcance</router-link>
        <router-link @click="closeMenu" class="nav-link" to="/propuesta">Propuesta</router-link>
        <router-link @click="closeMenu" class="nav-link" to="/taller">Taller</router-link>
        <router-link @click="closeMenu" class="nav-link" to="/tecnologia">Tecnología</router-link>
        <router-link @click="closeMenu" class="nav-link" to="/curricular">Curricular</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavbarComponent",
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
        this.isMenuOpen = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Clase común para los enlaces del menú */
  .nav-link {
    @apply block md:inline-block text-lg font-semibold px-2 py-1 rounded;
    background: linear-gradient(to right, #3b82f6, #2563eb); /* Fondo degradado azul */
    transition: background-color 0.3s ease;
  }
  
  /* Eliminar cambio de color en hover para mantener la consistencia visual */
  .nav-link:hover {
    background: linear-gradient(to right, #3b82f6, #2563eb); /* Mantener el mismo fondo */
  }
  </style>
  