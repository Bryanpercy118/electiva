

<template>
  <div class="bg-gradient-to-b from-yellow-100 to-green-200 min-h-screen">
    <!-- Sección con Imagen de Fondo y Título Principal -->
    <div class="relative h-64 md:h-96 w-full">
      <div
        class="absolute inset-0 bg-cover bg-center opacity-70"
        style="background-image: url('https://images.pexels.com/photos/8613305/pexels-photo-8613305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');"
      ></div>

      <!-- Contenido Centrado con Texto Principal -->
      <div class="relative max-w-5xl mx-auto text-center py-8 md:py-12 px-4">
        <h1 class="text-3xl md:text-5xl font-extrabold text-green-700 mb-2 md:mb-4 animate-fade-in">
          MOVIÉNDONOS HACIA UN FUTURO SALUDABLE
        </h1>
        <p class="text-base md:text-lg text-green-800 animate-fade-in-slow">
          Tecnología y Actividad Física en Educación
        </p>
      </div>
    </div>

    <div class="max-w-5xl mx-auto mt-8 md:mt-12 px-4 py-6 md:py-8 bg-white rounded-lg shadow-lg text-center">
      
      <p class="text-gray-700 text-base md:text-lg mb-4 text-justify">
        Hoy más que nunca, necesitamos que nuestros niños se mantengan en movimiento, especialmente en un mundo donde las pantallas capturan cada vez más su atención. Les presentamos una plataforma innovadora que integra tecnología y ejercicio para ofrecer una alternativa educativa y divertida. Con juegos de coordinación, videos interactivos y dispositivos como relojes inteligentes, 
        esta propuesta está diseñada para motivar a niños de 5 a 12 años a adoptar un estilo de vida.
      </p>

    </div>


    <!-- Sección de Videos Interactivos -->
    <div class="max-w-5xl mx-auto mt-8 px-4">
      <h2 class="text-2xl md:text-3xl font-semibold text-blue-800 text-center mb-6 md:mb-8">Videos de Apoyo</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Tarjetas de Video -->
        <div
          v-for="(video, index) in videos"
          :key="index"
          class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
        >
          <!-- Condición para diferenciar video local o video de YouTube -->
          <div v-if="video.isLocal">
            <video :src="video.url" class="w-full h-48 md:h-64" controls></video>
          </div>
          <div v-else>
            <iframe
              :src="video.url"
              class="w-full h-48 md:h-64"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-bold text-green-700">{{ video.title }}</h3>
            <p class="text-gray-600 text-sm mt-1">{{ video.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Nueva Sección: Moviéndonos con Tecnología -->
    <div class="max-w-5xl mx-auto mt-8 md:mt-12 px-4 py-6 md:py-8 bg-white rounded-lg shadow-lg text-center">
      <h2 class="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">Moviéndonos con Tecnología</h2>
      <p class="text-gray-700 text-base md:text-lg mb-4">
        A través de la plataforma Just Dance Now, podrás bailar al ritmo de las canciones usando tu dispositivo y así
        realizar actividad física.
      </p>
      <a
        href="https://www.justdancenow.com/"
        target="_blank"
        class="inline-block bg-green-600 text-white text-base md:text-lg font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg transition duration-300 hover:bg-green-700"
      >
        ¡Haz clic aquí para empezar a bailar!
      </a>

      <!-- Imagen añadida debajo del encabezado -->
      <div class="mt-8">
        <img
          src="/images/tecn.jpg"
          alt="Actividad Física y Tecnología"
          class="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      videos: [
        {
          url: "/video/ctr.mp4",
          title: "Deporte + Tecnología",
          description: "Usando el reloj Inteligente cuando hacen ejercicio",
          isLocal: true,
        },
        {
          url: "https://www.youtube.com/embed/qELDncaLfjo",
          title: "La importancia de la actividad física",
          description: "Qué importante es la actividad física en los niños",
          isLocal: false,
        },
        {
          url: "https://www.youtube.com/embed/ltq2UhyDrEQ",
          title: "Ventajas de usar un reloj inteligente",
          description: "Siempre hay beneficios en cada ejercicio que realizamos desde edad temprana, mucho mas si utilizamos la tecnologia inteligentemente",
          isLocal: false,
        },
        {
          url: "https://www.youtube.com/embed/_N-Ij9wqUZg",
          title: "La importancia de realizar actividad física en niños y niñas",
          description: "Siempre hay beneficios en cada ejercicio que realizamos desde edad temprana",
          isLocal: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Animaciones */
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

/* Fondo y Contenido */
.bg-gradient-to-b {
  background: linear-gradient(to bottom, #fff7ae, #b2e3d6);
}

/* Tarjetas de Video */
.grid {
  display: grid;
  gap: 1.5rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

/* Transición de escala en las tarjetas */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

/* Botón de enlace con transición */
a {
  transition: background-color 0.3s ease;
}
</style>
