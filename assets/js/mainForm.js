
const sendForm = document.getElementById("sendForm")
sendForm.addEventListener("click", create)
sendForm.addEventListener("click", createPopup)
const form = document.getElementById("form")
form.addEventListener("input", handleInput)

const btnCrearActividad = document.getElementById("btnCrearActividad")
btnCrearActividad.addEventListener("click", limpiarFormulario)
const actividades = []

// Create getelemetbyid for the imput on form from index.html
// const actividad = document.getElementById('actividad')
// const lugar = document.getElementById('lugar')
// const fechaInicio = document.getElementById('fechaInicio')
// const fechaTermino = document.getElementById('fechaTermino')
// const horaInicio = document.getElementById('horaInicio')
// const horaTermino = document.getElementById('horaTermino')

// // Create event listener for the button on form from index.html
// actividad.addEventListener('input', handleInput)
// lugar.addEventListener('input', handleInput)
// fechaInicio.addEventListener('input', handleInput)
// fechaTermino.addEventListener('input', handleInput)
// horaInicio.addEventListener('input', handleInput)
// horaTermino.addEventListener('input', handleInput)

// Create function to handle the input on form from index.html
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
  // const { name, value } = e.target
  // evento = {
  //     ...evento,
  //     [name]: value
  // }
  console.log(e)
}

function create(e) {
  e.preventDefault()
  const nuevoEvento = readForm()//crearObjeto()
  console.log(nuevoEvento)
  createRow(nuevoEvento)//ingresarDatosTabla()
  saveDataLS()
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
  dataForm.forEach((id) => {
    const element = document.getElementById(id)
    console.log(element)
  })
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
  console.log('JSON.stringify' + JSON.stringify(actividades))
  localStorage.setItem('actividades', JSON.stringify(actividades))
}

function readFromLS() {
    const actividadesLS = JSON.parse(localStorage.getItem('actividades'))
    const actividadesLSArray = Object.values(actividadesLS)
    console.log(actividadesLSArray)

    //si hay actividades en el local storage
    if(actividadesLSArray){
        //recorre el local storage
        actividadesLSArray.forEach(actividad => {
            //crea una fila por cada actividad
            console.log('Actividad LS: '+actividad)
            createRow(actividad)
        })
    }
}

readFromLS()
