$(document).ready(function() {
    let local = localStorage.getItem("key")
    if (local) {
        console.log('puede seguir');

    } else {
        Swal.fire({
            title: 'Bienvenido a Depilive',
            text: 'Depilación y estética',
            confirmButtonColor: '#ED2560'
        })
        localStorage.setItem("key", "true");
    }
});