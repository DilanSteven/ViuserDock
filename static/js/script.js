function obtenerSaludo() {
    fetch("/api/saludo")
        .then(response => response.json())
        .then(data => {
            document.getElementById("respuesta").innerText = data.mensaje;
        });
}