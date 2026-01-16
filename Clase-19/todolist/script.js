let tareas = [];
const formulario_HTML = document.getElementById('form-tareas');
const contenedorLista_HTML = document.getElementById('contenedor-lista');
function setTareasState(nuevas_tareas) {
    tareas = nuevas_tareas;
    renderTareas();
}
function renderTareas() {
    contenedorLista_HTML.innerHTML = '';
    if (tareas.length === 0) {
        contenedorLista_HTML.innerHTML = 'No hay tareas pendientes';
        return;
    }
    let html = ''
    for (const tarea of tareas) {
        html += `
            <div class="tarea-item">
                <h3>${tarea.titulo}</h3>
                <p>📝 ${tarea.descripcion}</p>
            </div>
        `;
    }
    contenedorLista_HTML.innerHTML = html;
}

function manejarSubmit(evento) {
    evento.preventDefault();
    const form = evento.target;

    const nuevaTarea = {
        titulo: form.titulo.value,
        descripcion: form.descripcion.value
    };
    setTareasState(
        [...tareas, nuevaTarea]
    );
    form.reset();
}

formulario_HTML.addEventListener('submit', manejarSubmit);