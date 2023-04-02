
const sendForm = document.getElementById("sendForm")
sendForm.addEventListener("click", create)
sendForm.addEventListener("click", createPopup)
const form = document.getElementById("form")
form.addEventListener("input", handleInput)

const btnCrearActividad = document.getElementById("btnCrearActividad")
btnCrearActividad.addEventListener("click", limpiarFormulario)
const actividades = []

function handleInput(e) {
  const button = document.getElementById("sendForm")
  if (
    nombreActividad.value &&
    lugar.value &&
    fechaInicio.value &&
    fechaTermino.value &&
    horaInicio.value &&
    horaTermino.value
  ) {
    button.removeAttribute("disabled")
  } else {
    button.setAttribute("disabled", true)
  }
}

function create(e) {
  e.preventDefault()
  const nuevoEvento = readForm()//crearObjeto()
  createRow(nuevoEvento)//ingresarDatosTabla()
  saveDataLS()//guarda datos en Local Storage
}

function limpiarFormulario() {
 const form = document.getElementById("form")
  form.reset()
}

function readForm() {
  //Obtengo los datos del formulario y los agrego al EventListener
  const dataForm = [
    "nombreActividad",
    "lugar",
    "fechaInicio",
    "fechaTermino",
    "horaInicio",
    "horaTermino",
  ]
  dataForm.forEach((id) => {const element = document.getElementById(id)})
  //Creo un Objeto con los valores de Formulario como retorno de la función
  const nuevoEvento = {
    nombreActividad: nombreActividad.value,
    lugar: lugar.value,
    fechaInicio: fechaInicio.value,
    fechaTermino: fechaTermino.value,
    horaInicio: horaInicio.value,
    horaTermino: horaTermino.value,
  }
  return nuevoEvento
}

function createRow(nuevoEvento) {
  const tablaActividades = document.getElementById("tablaActividades")
  tablaActividades.innerHTML += `
                                <tr>
                                    <td>${nuevoEvento.nombreActividad}</td>
                                    <td>${nuevoEvento.lugar}</td>
                                    <td>${nuevoEvento.fechaInicio}</td>
                                    <td>${nuevoEvento.fechaTermino}</td>
                                    <td>${nuevoEvento.horaInicio}</td>
                                    <td>${nuevoEvento.horaTermino}</td>
                                    <td>
                                        <button class="btn btn-primary">Editar</button>
                                        <button class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>`
    //Agrego el objeto al array de actividades
    actividades.push(nuevoEvento)
}

function saveDataLS() {
  localStorage.setItem('actividades', JSON.stringify(actividades))
}

function readFromLS() {
    const actividadesLS = JSON.parse(localStorage.getItem('actividades'))
    const actividadesLSArray = Object.values(actividadesLS) //convierte el objeto en array

    //si hay actividades en el local storage
    if(actividadesLSArray){
        //recorre el local storage
        actividadesLSArray.forEach(actividad => {
            //crea una fila por cada actividad
            createRow(actividad)
        })
    }
}

readFromLS()
