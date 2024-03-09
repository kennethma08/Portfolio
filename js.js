//ANIMACION SCRROLL PAGINA 
const animacion = document.getElementById('animacion');

const CargarAnimacion = (entradas, observador) => {

	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('visible');
		} else {
			// entrada.target.classList.remove('visible');
		}
	});
}

const observador = new IntersectionObserver(CargarAnimacion, {
	root: null,
	rootMargin: '500px 0px 100px 0px',
	threshold: 1.0
});

observador.observe(animacion);





//BOTON DE HAMBURGUESA
    document.addEventListener("DOMContentLoaded", function () {
      const checkbox = document.getElementById("checkbox");
      const navLinks = document.querySelector(".nav-links");
  
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          navLinks.style.display = "flex";
        } else {
          navLinks.style.display = "none";
        }
      });

      document.addEventListener("DOMContentLoaded", function () {
        const checkbox = document.getElementById("checkbox");
        const navLinks = document.querySelector(".nav-links");
  
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                // Checkbox está marcado, mostrar las opciones del menú
                navLinks.style.display = "flex";
            } else {
                // Checkbox está desmarcado, ocultar las opciones del menú
                navLinks.style.display = "none";
            }
        });
      });
  
  


      //DESCARGAR ARCHIVO CV CON EL BOTON
      let fichaTecnicaAbierta = false;
      let fichaTecnicaVentana;
      
      document.getElementById('abrir-pdf').addEventListener('click', function() {
          if (!fichaTecnicaAbierta) {
              // Si la pestaña no está abierta, abre el archivo PDF en una nueva pestaña
              fichaTecnicaVentana = window.open('CV Kenneth Martinez Vargas.pdf', '_blank');
              fichaTecnicaAbierta = true;
          } else {
              // Si la pestaña ya está abierta, enfoca la pestaña existente
              fichaTecnicaVentana.focus();
          }
      });




    //lINK PARA LOS BOTONES

    //BTON GITHUB
    document.getElementById("githubButton").addEventListener("click", function() {
      window.location.href = "https://github.com/kennethma08";
    });
  
  //BOTON WHATSAPP
        document.getElementById("WhatsappButton").addEventListener("click", function() {
      window.location.href = "https://api.whatsapp.com/send?phone=50663880960";
    });
  
  //BOTON LINDEKLN
        document.getElementById("LinkedinButton").addEventListener("click", function() {
      window.location.href = "https://www.linkedin.com/in/kenneth-mart%C3%ADnez-vargas-7bb426219/";
    });
  

  });
