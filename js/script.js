// Seleccionamos el contenedor del slider
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
let index = 0;

// Función para cambiar la imagen
function changeImage() {
    // Incrementamos el índice
    index++;
    if (index >= images.length) {
        index = 0; // Si llegamos al final, volvemos a la primera imagen
    }
    
    // Desplazamos las imágenes en el contenedor usando transform: translateX
    slider.style.transform = `translateX(-${index * 100}%)`;
}

// Cambiar la imagen cada 6 segundos
setInterval(changeImage, 6000); // 6000 milisegundos = 6 segundos

function enviarWhatsApp(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma normal

    // Obtén los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const fechaDesde = document.getElementById("fecha-desde").value;
    const fechaHasta = document.getElementById("fecha-hasta").value;
    const glamping = document.getElementById("glamping").value;

    // Construye el mensaje para WhatsApp
    const mensaje = `Hola, soy ${nombre}. Me encantaría reservar una estancia en su Glamping "${glamping}" desde el ${fechaDesde} hasta el ${fechaHasta}. Por favor, háganme saber si está disponible y cómo proceder. ¡Muchas gracias!`;

    // Número de WhatsApp al que se enviará el mensaje (reemplaza con el tuyo)
    const numero = "5493513907464"; // Número en formato internacional sin el "+" (por ejemplo, "549123456789")

    // Construye el enlace de WhatsApp
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    // Redirige al enlace de WhatsApp
    window.open(url, "_blank");
}

function mostrarInfo(titulo, texto) {
    document.getElementById('modalTitle').textContent = titulo;
    document.getElementById('modalText').textContent = texto;
    document.getElementById('infoModal').style.display = 'flex';
}

function cerrarInfo() {
    document.getElementById('infoModal').style.display = 'none';
}
