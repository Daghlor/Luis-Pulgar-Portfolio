let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

// Asignar eventos a los botones de control
document.getElementById('prevBtn').addEventListener('click', function () {
  changeSlide(-1);
});

document.getElementById('nextBtn').addEventListener('click', function () {
  changeSlide(1);
});

// Cambiar automáticamente las imágenes cada cierto intervalo de tiempo
const interval = 4000; // Intervalo en milisegundos (3 segundos en este caso)
setInterval(function () {
  changeSlide(1); // Cambiar a la siguiente imagen
}, interval);
