<template>
    <nav class="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-4 flex justify-around">
      <router-link class="text-lg font-semibold" to="/">Inicio</router-link>
      <router-link class="text-lg font-semibold" to="/alcance">Alcance</router-link>
      <router-link class="text-lg font-semibold" to="/propuesta">Propuesta</router-link>
      <router-link class="text-lg font-semibold" to="/taller">Taller</router-link>
      <router-link class="text-lg font-semibold" to="/tecnologia">Tecnología</router-link>
      <router-link class="text-lg font-semibold" to="/curricular">Curricular</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavbarComponent",
  };
  </script>
  
  <style scoped>
  nav a {
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: background-color 0.3s;
  }
  nav a:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  </style>
  