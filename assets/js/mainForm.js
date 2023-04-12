const sendForm = document.getElementById("sendForm");
sendForm.addEventListener("click", create);
sendForm.addEventListener("click", createPopup);
const form = document.getElementById("formulario");
form.addEventListener("input", handleInput);
let flagEdit = false;

const btnCrearActividad = document.getElementById("btnCrearActividad");
btnCrearActividad.addEventListener("click", limpiarFormulario);
const actividades = [];

let index = 1;

function handleInput(e) {
  const button = document.getElementById("sendForm");
  // const update = document.getElementById('sendFormUpdate')
  // flagEdit ? button.setAttribute("disabled", true) : button.removeAttribute("disabled")

  if (
    nombreActividad.value &&
    lugar.value &&
    fechaInicio.value &&
    fechaTermino.value &&
    horaInicio.value &&
    horaTermino.value &&
    !flagEdit
  ) {
    button.removeAttribute("disabled");
    // update.removeAttribute("disabled")
  } else {
    button.setAttribute("disabled", true);
    // update.setAttribute("disabled", true)
  }
  //console.log(nombreActividad.value+lugar.value+fechaInicio.value+fechaTermino.value+horaInicio.value+horaTermino.value)
}

function create(e) {
  e.preventDefault();
  flagEdit = false;
  const nuevoEvento = readForm(); //crearObjeto()
  createRow(nuevoEvento); //ingresarDatosTabla()
  limpiarFormulario(); //limpia el formulario
  saveDataLS(); //guarda datos en Local Storage
}

function limpiarFormulario() {
  const formClean = document.getElementById("formulario");
  // console.log(formClean)
  if (formClean) {
    formClean.reset();
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
  ];
  dataForm.forEach((id) => {
    const element = document.getElementById(id);
  });
  //Creo un Objeto con los valores de Formulario como retorno de la función
  const nuevoEvento = {
    index: index,
    nombreActividad: nombreActividad.value,
    lugar: lugar.value,
    fechaInicio: fechaInicio.value,
    fechaTermino: fechaTermino.value,
    horaInicio: horaInicio.value,
    horaTermino: horaTermino.value,
  };
  return nuevoEvento;
}

function createRow(nuevoEvento) {
  const tablaActividades = document.getElementById("tablaActividades");
  tablaActividades.innerHTML += `
                                <tr id=tr${index}>
                                    <td alt='Nombre Actividad' id=nombreActividad${index}>${nuevoEvento.nombreActividad}</td>
                                      <td alt='Lugar' id=lugar${index}>${nuevoEvento.lugar}</td>
                                    <td alt='Fecha de Inicio' id=fechaInicio${index}>${nuevoEvento.fechaInicio}</td>
                                    <td alt='Fecha de Término' id=fechaTermino${index}>${nuevoEvento.fechaTermino}</td>
                                    <td alt='Hora de Inicio' id=horaInicio${index}>${nuevoEvento.horaInicio}</td>
                                    <td alt='Hora de Término' id=horaTermino${index}>${nuevoEvento.horaTermino}</td>
                                    <td alt='btns'>
                                        <button class="btn btn-secondary btn-sm" id=e${index} onclick="editPopup(${index})">Editar</button>
                                        <button class="btn btn-danger btn-sm" id=d${index} onclick="deleteEvent(${index})">Eliminar</button>
                                    </td>
                                </tr>`;
  //Agrego el objeto al array de actividades
  index++;
  actividades.push(nuevoEvento);
}

function saveDataLS() {
  localStorage.setItem("actividades", JSON.stringify(actividades));
}

function readFromLS() {
  if (localStorage.getItem("actividades")) {
    const actividadesLS = JSON.parse(localStorage.getItem("actividades"));
    const actividadesLSArray = Object.values(actividadesLS); //convierte el objeto en array

    //si hay actividades en el local storage
    if (actividadesLSArray) {
      //recorre el local storage
      actividadesLSArray.forEach((actividad) => {
        //crea una fila por cada actividad
        createRow(actividad);
      });
    }
  }
}

readFromLS();
