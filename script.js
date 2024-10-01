// Validación simple del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
    } else {
        alert('Gracias por tu mensaje, ' + nombre + '!');
        // Aquí podrías agregar funcionalidad para enviar el formulario a un servidor
        document.getElementById('contactForm').reset();
    }
});