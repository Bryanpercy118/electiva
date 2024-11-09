<template>
    <div class="relative min-h-screen bg-cover bg-center bg-no-repeat p-8" 
         style="background-image: url('https://images.pexels.com/photos/8613368/pexels-photo-8613368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');">
         
      <!-- Superposición de color con desenfoque para mejorar la legibilidad -->
      <div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
  
      <!-- Contenido de la Propuesta con fondo translúcido para el texto -->
      <div class="relative max-w-4xl mx-auto text-center text-white py-16 bg-black bg-opacity-70 rounded-lg px-8">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Propuesta</h1>
        <p class="text-lg md:text-xl text-justify">
          Consiste en crear un enfoque innovador que busque combinar la actividad física con el uso moderado de la tecnología.
          Esto incluirá la creación de páginas interactivas que enseñen y pregunten a los niños sobre coordinación y movimiento,
          transformando la educación física en algo más divertido y educativo. Dentro de la página web también se incluirán 
          videos educativos que explican los movimientos adecuados para activar el sistema musculo-esquelético, fomentando una experiencia completa y saludable.
        </p>
      </div>
  
      <!-- Sección de Videos Educativos -->
      <div class="relative max-w-5xl mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <iframe src="https://www.youtube.com/embed/video1" class="w-full h-48 md:h-56" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="p-4">
            <h3 class="text-xl font-semibold text-blue-600">Coordinación y Movimiento</h3>
            <p class="text-gray-700 text-sm mt-2 text-justify">
              Video educativo sobre ejercicios de coordinación para niños, promoviendo la actividad física y el desarrollo motriz.
            </p>
          </div>
        </div>
  
        <!-- Card 2 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <iframe src="https://www.youtube.com/embed/video2" class="w-full h-48 md:h-56" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="p-4">
            <h3 class="text-xl font-semibold text-green-600">Movimientos Musculares</h3>
            <p class="text-gray-700 text-sm mt-2 text-justify">
              Aprende los movimientos adecuados para activar el sistema musculo-esquelético, contribuyendo a una vida saludable.
            </p>
          </div>
        </div>
  
        <!-- Card 3 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <iframe src="https://www.youtube.com/embed/video3" class="w-full h-48 md:h-56" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="p-4">
            <h3 class="text-xl font-semibold text-purple-600">Rutinas Divertidas</h3>
            <p class="text-gray-700 text-sm mt-2 text-justify">
              Conoce diferentes rutinas de ejercicios pensadas para hacer la actividad física divertida y educativa para los niños.
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PropuestaPage",
  };
  </script>
  
  <style scoped>
  /* Estilos de fondo */
  .bg-cover {
    background-size: cover;
  }
  .bg-opacity-50 {
    opacity: 0.5;
  }
  .backdrop-blur-md {
    backdrop-filter: blur(10px); /* Ajusta el nivel de desenfoque */
  }
  .absolute {
    position: absolute;
  }
  .relative {
    position: relative;
  }
  .text-justify {
    text-align: justify;
  }
  </style>
  