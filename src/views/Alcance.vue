<template>
    <div class="p-8 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      <!-- Título de la sección -->
      <h1 class="text-4xl font-bold text-blue-600 text-center mb-6">Alcance</h1>
      <p class="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10 text-justify">
        Nuestro proyecto se enfoca en el desarrollo de una plataforma digital que fomente hábitos saludables en los niños, promoviendo la actividad física y una vida activa desde una edad temprana mediante el uso de tecnología.
      </p>
  
      <!-- Cuadros de Alcance -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Cuadro 1 -->
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
          <div class="flex items-center mb-4">
            <span class="text-4xl mr-3">💻</span> <!-- Emoji en lugar de SVG -->
            <h2 class="text-2xl font-semibold text-blue-600">Desarrollar una plataforma digital interactiva</h2>
          </div>
          <p class="text-gray-600 text-lg text-justify">
            Crear una plataforma dirigida a niños entre 5 y 12 años de instituciones del país, que les permita interactuar y aprender sobre hábitos de vida saludable de manera lúdica y educativa.
          </p>
        </div>
  
        <!-- Cuadro 2 -->
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
          <div class="flex items-center mb-4">
            <span class="text-4xl mr-3">🏃‍♂️</span> <!-- Emoji en lugar de SVG -->
            <h2 class="text-2xl font-semibold text-green-600">Fomentar la actividad física en niños</h2>
          </div>
          <p class="text-gray-600 text-lg text-justify">
            Integrar tecnologías y herramientas que motiven a los niños a moverse, mejorar su coordinación y adoptar hábitos activos y saludables desde una edad temprana.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AlcancePage",
  };
  </script>
  
  <style scoped>
  /* Personaliza el diseño de los cuadros para una transición suave y sombras */
  </style>
  