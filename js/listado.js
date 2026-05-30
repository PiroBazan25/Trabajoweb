const opciones = [
    { nombre: "Manzana", categoria: "saludable" },
    { nombre: "Banana", categoria: "saludable" },
    { nombre: "Yogur", categoria: "saludable" },
    { nombre: "Galletitas dulces", categoria: "dulce" },
    { nombre: "Alfajor", categoria: "dulce" },
    { nombre: "Bizcochuelo", categoria: "dulce" }
];

const contenedorListado = document.getElementById("contenedor-listado");
const botonTodos = document.getElementById("boton-todos");
const botonSaludables = document.getElementById("boton-saludables");

function mostrarOpciones(lista) {
    contenedorListado.innerHTML = "";

    lista.forEach(function(opcion) {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta");

        const titulo = document.createElement("h3");
        titulo.textContent = opcion.nombre;

        const categoria = document.createElement("p");
        categoria.textContent = "Categoría: " + opcion.categoria;

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(categoria);
        contenedorListado.appendChild(tarjeta);
    });
}

botonTodos.addEventListener("click", function() {
    mostrarOpciones(opciones);
});

botonSaludables.addEventListener("click", function() {
    const saludables = opciones.filter(function(opcion) {
        return opcion.categoria === "saludable";
    });

    mostrarOpciones(saludables);
});

mostrarOpciones(opciones);