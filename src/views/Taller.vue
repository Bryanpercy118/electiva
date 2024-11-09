<template>
    <div class="p-8 max-w-3xl mx-auto">
      <!-- Introducción al Taller Dinámico -->
      <h1 class="text-3xl font-bold text-blue-600 mb-4">Taller Dinámico</h1>
      <p class="text-gray-700 text-lg mb-4">
        Fomentar la actividad física y la coordinación motora a través de juegos.
      </p>
      <button 
        @click="showDetails = !showDetails" 
        class="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 hover:bg-blue-600"
      >
        Click aquí para conocer el taller
      </button>
  
      <!-- Detalles del Taller -->
      <div v-if="showDetails" class="mt-8">
        <!-- Título de la Sección de Detalles del Taller -->
        <h2 class="text-2xl font-bold text-blue-500 mb-4">Detalles del Taller</h2>
  
        <!-- Duración del Taller -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-blue-500 mb-2">Duración</h3>
          <p class="text-gray-600">1 hora</p>
        </div>
  
        <!-- Actividades a Realizar -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-blue-500 mb-2">Actividades a Realizar</h3>
          <ul class="list-decimal list-inside text-gray-700 space-y-2">
            <li><span class="font-semibold">Calentamientos:</span> Realizar ejercicios básicos de calentamiento para preparar el cuerpo.</li>
            <li><span class="font-semibold">Juego de coordinación con estiramientos:</span> Actividad lúdica para mejorar la coordinación y flexibilidad.</li>
            <li><span class="font-semibold">Correr y monitorear por 10 minutos:</span> Carrera breve mientras se monitorean las constantes (pulso, pasos, etc.) con un dispositivo.</li>
            <li><span class="font-semibold">Cierre reflexivo:</span> Reflexión grupal con preguntas sobre la actividad.
              <ul class="list-disc list-inside ml-6 mt-2 text-gray-600">
                <li>¿Cómo me pareció el ejercicio?</li>
                <li>¿Es significativo utilizar los dispositivos electrónicos?</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TallerPage",
    data() {
      return {
        showDetails: false, // Controla la visibilidad de los detalles del taller
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  