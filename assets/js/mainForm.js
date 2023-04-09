
const sendForm = document.getElementById("sendForm")
sendForm.addEventListener("click", create)
sendForm.addEventListener("click", createPopup)
const form = document.getElementById("form")
form.addEventListener("input", handleInput)

// const btnCrearActividad = document.getElementById("btnCrearActividad")
// btnCrearActividad.addEventListener("click", limpiarFormulario)
const actividades = []

let index = 1

function handleInput(e) {
  const button = document.getElementById("sendForm")
  const update = document.getElementById('sendFormUpdate')
  if (
    nombreActividad.value &&
    lugar.value &&
    fechaInicio.value &&
    fechaTermino.value &&
    horaInicio.value &&
    horaTermino.value
  ) {
    button.removeAttribute("disabled")
  // update.removeAttribute("disabled")
  } else {
    button.setAttribute("disabled", true)
    // update.setAttribute("disabled", true)
  }
  //console.log(nombreActividad.value+lugar.value+fechaInicio.value+fechaTermino.value+horaInicio.value+horaTermino.value)
}

function create(e) {
  e.preventDefault()
  const nuevoEvento = readForm()//crearObjeto()
  createRow(nuevoEvento)//ingresarDatosTabla()
  // limpiarFormulario() //limpia el formulario
  saveDataLS()//guarda datos en Local Storage
}

function limpiarFormulario() {
  const form = document.getElementById("form")
  if(form.elements.length > 0) {
    form.reset();
  }
}

function readForm() {
  //Obtengo los datos del formulario y los agrego al EventListener
  const dataForm = [
    "index",
    "nombreActividad",
    "lugar",
    "fechaInicio",
    "fechaTermino",
    "horaInicio",
    "horaTermino",
  ]
  dataForm.forEach((id) => { const element = document.getElementById(id) })
  //Creo un Objeto con los valores de Formulario como retorno de la función
  const nuevoEvento = {
    index: index,
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
                                <tr id=tr${index}>
                                    <td id=nombreActividad${index}>${nuevoEvento.nombreActividad}</td>
                                    <td id=lugar${index}>${nuevoEvento.lugar}</td>
                                    <td id=fechaInicio${index}>${nuevoEvento.fechaInicio}</td>
                                    <td id=fechaTermino${index}>${nuevoEvento.fechaTermino}</td>
                                    <td id=horaInicio${index}>${nuevoEvento.horaInicio}</td>
                                    <td id=horaTermino${index}>${nuevoEvento.horaTermino}</td>
                                    <td>
                                        <button class="btn btn-primary" id=e${index} onclick="editPopup(${index})">Editar</button>
                                        <button class="btn btn-primary" id=d${index} onclick="deleteEvent(${index})">Eliminar</button>
                                    </td>
                                </tr>`
  //Agrego el objeto al array de actividades
  index++
  actividades.push(nuevoEvento)
}

function saveDataLS() {
  localStorage.setItem('actividades', JSON.stringify(actividades))
}

function readFromLS() {
  if (localStorage.getItem('actividades')) {
    const actividadesLS = JSON.parse(localStorage.getItem('actividades'))
    const actividadesLSArray = Object.values(actividadesLS) //convierte el objeto en array

    //si hay actividades en el local storage
    if (actividadesLSArray) {
      //recorre el local storage
      actividadesLSArray.forEach(actividad => {
        //crea una fila por cada actividad
        createRow(actividad)
      })
    }
  }
}

readFromLS()
