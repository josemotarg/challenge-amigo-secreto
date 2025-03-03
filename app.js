
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    // Verificar que el campo no esté vacio
    if (nombre === "") {
        alert("Por favor, ingrese un nombre");
        return;
    }

    // Agregar el nombre al array amigos
    amigos.push(nombre);

    // Actualizar la lista en HTML
    actualizarLista();

    // Limpiar el campo de entrada
    inputAmigo.value = "";
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const listaAmigoUl = document.getElementById("listaAmigos");

    // Limpiar el contenido actual de la lista
    while (listaAmigoUl.firstChild) {
        listaAmigoUl.removeChild(listaAmigoUl.firstChild);
    }

    // Recorrer el array con un ciclo for
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigoUl.appendChild(li);
    })
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    // Verificar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear, agregue al menos uno.");
    } else {
        // Generar un índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);

        // Obtener el nombre sorteado
        const amigoSorteado = amigos[indiceAleatorio];

        // Mostrar el resultado en el HTML
        const resultadoUl = document.getElementById("resultado");
        resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;
    }
}

// Evento para agregar un amigo al momento de cargar la página
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo);
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});
