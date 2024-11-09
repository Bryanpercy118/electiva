<template>
    <div class="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 p-8">
      <!-- Título de la sección -->
      <h1 class="text-4xl font-bold text-blue-600 text-center mb-6">Tecnología 🚀</h1>
      
      <!-- Descripción de la tecnología -->
      <p class="text-lg text-gray-800 text-center max-w-3xl mx-auto mb-10 text-justify">
        En la institución educativa, los <span class="text-green-500 font-bold">relojes inteligentes</span> de los niños fueron empleados como herramienta clave para monitorear y promover hábitos de vida saludable, enfocándose en la actividad física, el sueño y la reducción del sedentarismo. Estos dispositivos recolectaron datos detallados, como:
      </p>
      
      <!-- Lista de características con emojis -->
      <ul class="list-disc list-inside text-gray-700 text-lg max-w-3xl mx-auto space-y-2 mb-10">
        <li><span class="text-blue-600">👟</span> Número de pasos diarios</li>
        <li><span class="text-red-600">❤️</span> Frecuencia cardíaca</li>
        <li><span class="text-yellow-500">⏰</span> Minutos de actividad física</li>
        <li><span class="text-purple-600">🌙</span> Patrones de sueño (duración y calidad)</li>
      </ul>
  
      <!-- Card para mostrar la imagen del dispositivo -->
      <div class="flex justify-center">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs transform transition duration-300 hover:scale-105">
          <!-- Imagen -->
          <img src="https://images.pexels.com/photos/8613368/pexels-photo-8613368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
               alt="Reloj inteligente" class="w-full h-56 object-cover">
          <!-- Descripción de la tarjeta -->
          <div class="p-4 text-center">
            <h3 class="text-xl font-semibold text-green-600 mb-2">Reloj Inteligente ⌚</h3>
            <p class="text-gray-600 text-sm">
              Monitorea el estado físico y hábitos saludables de los niños.
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TecnologiaPage",
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales */
  .bg-gradient-to-b {
    background: linear-gradient(to bottom, #cce7ff, #a7f3d0);
  }
  .text-center {
    text-align: center;
  }
  .text-justify {
    text-align: justify;
  }
  </style>
  