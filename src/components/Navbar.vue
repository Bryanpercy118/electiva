<template>
    <nav class="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-4 flex justify-between items-center">
      <!-- Logo o Título del sitio -->
      <router-link class="text-lg font-bold" to="/">Futuro Saludable</router-link>
      
      <!-- Botón de hamburguesa para pantallas pequeñas -->
      <button @click="toggleMenu" class="block md:hidden focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
  
      <!-- Menú de navegación -->
      <div :class="isMenuOpen ? 'block w-full mt-2' : 'hidden' " class="md:flex md:w-auto md:space-x-4">
        <router-link class="block md:inline-block text-lg font-semibold px-2 py-1 rounded hover:bg-white hover:bg-opacity-20" to="/">Inicio</router-link>
        <router-link class="block md:inline-block text-lg font-semibold px-2 py-1 rounded hover:bg-white hover:bg-opacity-20" to="/alcance">Alcance</router-link>
        <router-link class="block md:inline-block text-lg font-semibold px-2 py-1 rounded hover:bg-white hover:bg-opacity-20" to="/propuesta">Propuesta</router-link>
        <router-link class="block md:inline-block text-lg font-semibold px-2 py-1 rounded hover:bg-white hover:bg-opacity-20" to="/taller">Taller</router-link>
        <router-link class="block md:inline-block text-lg font-semibold px-2 py-1 rounded hover:bg-white hover:bg-opacity-20" to="/tecnologia">Tecnología</router-link>
        <router-link class="block md:inline-block text-lg font-semibold px-2 py-1 rounded hover:bg-white hover:bg-opacity-20" to="/curricular">Curricular</router-link>
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
    },
  };
  </script>
  
  <style scoped>
  nav a {
    transition: background-color 0.3s;
  }
  </style>
  