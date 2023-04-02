function createPopup() {
    const listActivites = document.getElementById("listActivites");
    const form = document.getElementById("form");

    if (listActivites.classList.contains("show")) {
        // Agrega clase para mostrar el popup
        form.classList.add("show");
        
        // Quita clase para ocultar la lista de actividades
        listActivites.classList.remove("show");
    } else {
        // Quita clase para ocultar el popup
        form.classList.remove("show");

        // Agrega clase para mostrar la lista de actividades
        listActivites.classList.add("show");
    }
}


