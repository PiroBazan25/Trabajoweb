const meriendas = [
    "Tostadas con queso",
    "Yogur con cereal",
    "Licuado de banana",
    "Galletitas",
    "Fruta cortada"
];

const listaMeriendas = document.getElementById("lista-meriendas");
const botonContar = document.getElementById("boton-contar");
const resultadoContador = document.getElementById("resultado-contador");

meriendas.forEach(function(merienda) {
    const item = document.createElement("li");
    item.textContent = merienda;
    listaMeriendas.appendChild(item);
});

botonContar.addEventListener("click", function() {
    resultadoContador.textContent = "Hay " + meriendas.length + " meriendas en la lista.";
});