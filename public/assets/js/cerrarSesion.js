const btnCLOSE = document.getElementById("btnCerrar");

btnCLOSE.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('rol');
    /* la sintaxis para sweetalert2 es Swal.fire(titulo, subtitulo, tipoDeMensaje); */
    /* href propiedad que me permite redirigir la página a donde quiera, en este caso a la raíz del programa. */
    Swal.fire(
        'Su sesión ha sido cerrada correctamente.',
        'Que tenga un buen día.',
        'success'
    ).then(() => {
        window.location.reload()
        location.href = '/'
       
    });
})