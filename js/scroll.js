// Efecto scroll.js
document.addEventListener("DOMContentLoaded", function() {
  const btnArriba = document.getElementById("btnArriba");

  // Esto ocultará o mostrará el botón según el scroll :D
  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) { 
      btnArriba.style.display = "block";
    } else {
      btnArriba.style.display = "none";
    }
  });

  // Hacer scroll suave hacia arriba al hacer click en el botón
  btnArriba.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});