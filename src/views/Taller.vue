<template>
    <div class="bg-gradient-to-b from-yellow-100 to-green-200 min-h-screen">
      <!-- Sección con Imagen de Fondo y Título Principal -->
      <div class="relative w-full h-80 md:h-[32rem] bg-center" 
           style="background-image: url('/images/taller.jpg'); background-size: cover; background-position: top;">
        <!-- Superposición ligera para mejorar el contraste -->
        <div class="absolute inset-0 bg-black opacity-10"></div> <!-- Opacidad reducida a 10% -->
  
        <!-- Contenido centrado sobre la imagen -->
        <div class="relative flex flex-col items-center justify-center h-full text-center px-4">
         
            <button 
            @click="showDetails = !showDetails" 
            class="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 hover:bg-blue-600"
          >
            Click aquí para conocer el Taller Dinamico
          </button>
        </div>
      </div>
  
      <!-- Sección de Introducción al Taller Dinámico -->
      <div class="max-w-5xl mx-auto mt-8 px-4">
       
       
        <!-- Detalles del Taller -->
        <div v-if="showDetails" class="mt-10 bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-2xl font-bold text-blue-500 mb-4 text-center">Detalles del Taller</h3>
  
          <!-- Duración del Taller -->
          <div class="mb-6">
            <h4 class="text-xl font-semibold text-blue-500 mb-2">Duración</h4>
            <p class="text-gray-600">1 hora</p>
          </div>
  
          <!-- Actividades a Realizar -->
          <div class="mb-6">
            <h4 class="text-xl font-semibold text-blue-500 mb-2">Actividades a Realizar</h4>
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
  /* Animaciones para el contenido */
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes fade-in-slow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }
  
  .animate-fade-in-slow {
    animation: fade-in-slow 1.5s ease-out;
  }
  </style>
  