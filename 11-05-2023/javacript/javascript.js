// Obtener referencias a los elementos del DOM
const gallery = document.querySelector('.gallery');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Obtener todas las imágenes de la galería
const images = gallery.getElementsByTagName('img');
let currentIndex = 0;

// Función para mostrar la imagen actual
function showImage(index) {
  // Ocultar todas las imágenes
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  // Mostrar la imagen actual
  images[index].style.display = 'block';
}

// Función para mostrar la imagen anterior
function showPreviousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
}

// Función para mostrar la siguiente imagen
function showNextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

// Mostrar la primera imagen al cargar la página
showImage(currentIndex);

// Agregar eventos de clic a los botones de navegación
prevButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);
