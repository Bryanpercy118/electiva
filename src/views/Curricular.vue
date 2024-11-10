<template>
    <div class="min-h-screen bg-gradient-to-b from-yellow-100 to-blue-100 p-8">
      <!-- Imagen de fondo en la parte superior -->
      <div class="relative w-full h-64 md:h-80 bg-cover bg-center mb-8" 
           style="background-image: url('/images/curriculum.jpg');">
        <!-- Superposición de color oscuro translúcido -->
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white">Curricular 📚</h1>
        </div>
      </div>
  
      <!-- Descripción de la sección -->
      <p class="text-lg text-gray-800 text-center max-w-3xl mx-auto mb-10">
        Incorporación de la tecnología en el currículo de educación física, creando una unidad adicional que contiene objetivos relacionados con la actividad física, el uso de tecnología significativa y el progreso en coordinación.
      </p>
  
      <!-- Cuadros para los elementos curriculares -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Cuadro 1: Objetivos Relacionados con la Actividad Física -->
        <div class="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105">
          <div class="text-5xl mb-4">🎯</div> <!-- Emoji del objetivo -->
          <h3 class="text-2xl font-semibold text-green-600 mb-2">Objetivos de Actividad Física</h3>
          <p class="text-gray-700 text-sm text-justify">
            Establecer objetivos claros y medibles para fomentar la actividad física, promoviendo el desarrollo de habilidades motrices y una vida saludable.
          </p>
        </div>
  
        <!-- Cuadro 2: Tecnología Significativa para los Ejercicios -->
        <div class="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105">
          <div class="text-5xl mb-4">💻</div> <!-- Emoji de tecnología -->
          <h3 class="text-2xl font-semibold text-blue-600 mb-2">Tecnología Significativa</h3>
          <p class="text-gray-700 text-sm text-justify">
            Integrar dispositivos y aplicaciones que hagan los ejercicios más interactivos y atractivos, motivando a los estudiantes a mantenerse activos.
          </p>
        </div>
  
        <!-- Cuadro 3: Progreso en Coordinación por Medio de los Dispositivos -->
        <div class="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105">
          <div class="text-5xl mb-4">📈</div> <!-- Emoji de progreso -->
          <h3 class="text-2xl font-semibold text-purple-600 mb-2">Progreso en Coordinación</h3>
          <p class="text-gray-700 text-sm text-justify">
            Medir el progreso de los estudiantes en habilidades de coordinación utilizando dispositivos para seguimiento de sus logros en tiempo real.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CurricularPage",
  };
  </script>
  
  <style scoped>
  /* Fondo degradado */
  .bg-gradient-to-b {
    background: linear-gradient(to bottom, #fef3c7, #a7f3d0);
  }
  
  /* Estilos para la imagen de fondo en la parte superior */
  .bg-cover {
    background-size: cover;
  }
  .bg-center {
    background-position: center;
  }
  </style>
  