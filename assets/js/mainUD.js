const sendFormUpdate = document.getElementById("sendFormUpdate");

function editPopup(index) {
  flagEdit = true;
  createPopup();
  const elA = "nombreActividad" + index;
  const elB = "lugar" + index;
  const elC = "fechaInicio" + index;
  const elD = "fechaTermino" + index;
  const elE = "horaInicio" + index;
  const elF = "horaTermino" + index;
  const nombreActividad = document.getElementById(elA);
  const lugar = document.getElementById(elB);
  const fechaInicio = document.getElementById(elC);
  const fechaTermino = document.getElementById(elD);
  const horaInicio = document.getElementById(elE);
  const horaTermino = document.getElementById(elF);

  document.getElementById("nombreActividad").value =
    nombreActividad.textContent;
  document.getElementById("lugar").value = lugar.textContent;
  document.getElementById("fechaInicio").value = fechaInicio.textContent;
  document.getElementById("fechaTermino").value = fechaTermino.textContent;
  document.getElementById("horaInicio").value = horaInicio.textContent;
  document.getElementById("horaTermino").value = horaTermino.textContent;

  const btnEdit = document.getElementById("sendFormUpdate");
  if (!btnEdit) {
    const formU = document.getElementById("formulario");
    const btnUpdate = document.createElement("input");
    btnUpdate.setAttribute("type", "submit");
    const button = document.getElementById("sendForm");
    if (flagEdit) {
      button.setAttribute("disabled", true);
    }
    // btnUpdate.setAttribute("disabled", "false")
    btnUpdate.setAttribute("onclick", `updateEvent(${index})`);
    btnUpdate.value = "Actualizar";
    btnUpdate.id = "sendFormUpdate";
    // Append btnUpdate to form
    formU.appendChild(btnUpdate);
  }
}

function updateEvent(index) {
  let idTr = `tr${index}`;
  const row = document.getElementById(idTr);
  row.parentNode.removeChild(row);
  // console.log(row)
  // console.log(actividades)
  actividades.splice(index - 1, index);
  // console.log(actividades)
  const nuevoEvento = readForm(); //crearObjeto()
  createRow(nuevoEvento); //ingresarDatosTabla()
  // console.log(actividades)
  localStorage.removeItem("actividades");
  saveDataLS();
  limpiarFormulario(); //limpia el formulario
  createPopup();
}

function deleteEvent(index) {
  // console.log('index deleteEvent: ' + index)
  let idTr = `tr${index}`;
  const row = document.getElementById(idTr);
  row.parentNode.removeChild(row);
  // console.log(row)
  // console.log(actividades)
  actividades.splice(index - 1, index);
  // console.log(actividades)
  localStorage.removeItem("actividades");
  saveDataLS();
}
