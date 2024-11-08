<template>
    <div class="min-h-screen flex flex-col">
      <main class="flex-grow">
        <Navbar />
        <router-view />
      </main>
      <footer class="bg-blue-800 text-white p-4 text-center">
        © Todos los derechos Reservados Katty 
      </footer>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';

  export default {
    name: "DefaultLayout",
    components: {
      Navbar
    }
  };
  </script>
  
  <style scoped>
  </style>
  