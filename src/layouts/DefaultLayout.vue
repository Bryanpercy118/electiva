<template>
    <div class="min-h-screen flex flex-col">
      <header class="bg-blue-800 text-white p-4">
        <h1 class="text-2xl font-bold">Electiva</h1>
      </header>
      <main class="flex-grow">
        <router-view />
      </main>
      <footer class="bg-blue-800 text-white p-4 text-center">
        © Todos los derechos Reservados Katty 
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "DefaultLayout",
  };
  </script>
  
  <style scoped>
  </style>
  