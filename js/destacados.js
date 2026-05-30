const tarjetas = document.querySelectorAll(".tarjeta");
const contadorSeleccionadas = document.getElementById("contador-seleccionadas");

function actualizarContador() {
    const seleccionadas = document.querySelectorAll(".tarjeta.seleccionada");
    contadorSeleccionadas.textContent = "Tarjetas seleccionadas: " + seleccionadas.length;
}

tarjetas.forEach(function(tarjeta) {
    tarjeta.addEventListener("click", function() {
        tarjeta.classList.toggle("seleccionada");
        actualizarContador();
    });
});