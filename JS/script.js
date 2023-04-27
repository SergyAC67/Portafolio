/* ============= TOGGLE ICON NAVBAR =================ICONO DE ALTERNATIVO DE LA BARRA DE NAVEGACIÓN====================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {  /* NO FUNCIONA EL ICONO DEL MENU */
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ============= SCROLL SECTION AVTIVE LINK ======= ENLACE ACTIVO DE SECCIÓN DE DESPLAZAMIENTO =========================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

windows.onscroll = () => {
    sections.forEach(sec => {
        let top = windows.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
        }
    });

    /* ============= STICKY NAVBAR ================================= BARRA DE NAVEGACIÓN FIJA =========================== */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', windows.scrollY > 100);

    /* ================ REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK (SCROOLL) =================================== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ============= SCROLL REVEAL ============= */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/* ========== TYPE JS ============= */
const typed = new Typed('.multiple-text',{
    strings: ['Desarrollador Backend y Frontend', 'Desarrollador Web', 'Desarrollador de App Mobile ', 'Desarrollador de Aplicaciones en General'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* ========== SCRIPT DE: FECHA Y HORA ACTUALLIZANDO ===== PRÓXIMAMENTE ======== */
/*<script>
  // Obtenemos el elemento donde se mostrará la fecha y hora
    var fechaHoraElement = document.getElementById("fecha-hora");

  // Función para obtener la fecha y hora actual y actualizar el elemento
    function actualizarFechaHora() {
        var fechaHora = new Date(); // Obtenemos la fecha y hora actual
        var opcionesFechaHora = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }; // Opciones de formato de fecha y hora
        var fechaHoraFormateada = fechaHora.toLocaleString("es-ES", opcionesFechaHora); // Formateamos la fecha y hora en el idioma y formato deseado
        fechaHoraElement.textContent = "Fecha y hora actual: " + fechaHoraFormateada; // Actualizamos el contenido del elemento
    }

  // Llamamos a la función para que se ejecute inicialmente
    actualizarFechaHora();

  // Llamamos a la función cada segundo para que la fecha y hora se actualice en tiempo real
    setInterval(actualizarFechaHora, 1000);
</script>*/