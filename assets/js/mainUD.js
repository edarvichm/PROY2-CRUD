
const sendFormUpdate = document.getElementById("sendFormUpdate")
console.log(sendFormUpdate)
//let index = 0
//sendFormUpdate.addEventListener("click", updateEvent(index))

// obtener un evento al hacer click en el boton editar



function editPopup(index) {
    createPopup()
    const elA = 'nombreActividad' + index
    const elB = 'lugar' + index
    const elC = 'fechaInicio' + index
    const elD = 'fechaTermino' + index
    const elE = 'horaInicio' + index
    const elF = 'horaTermino' + index
    const nombreActividad = document.getElementById(elA)
    const lugar = document.getElementById(elB)
    const fechaInicio = document.getElementById(elC)
    const fechaTermino = document.getElementById(elD)
    const horaInicio = document.getElementById(elE)
    const horaTermino = document.getElementById(elF)

    document.getElementById('nombreActividad').value = nombreActividad.textContent
    document.getElementById('lugar').value = lugar.textContent
    document.getElementById('fechaInicio').value = fechaInicio.textContent
    document.getElementById('fechaTermino').value = fechaTermino.textContent
    document.getElementById('horaInicio').value = horaInicio.textContent
    document.getElementById('horaTermino').value = horaTermino.textContent


    console.log('Index del Editar: ' + index)
    console.log('nombreActividad: ' + nombreActividad.textContent)
    console.log('lugar: ' + lugar.textContent)
    console.log('fechaInicio: ' + fechaInicio.textContent)
    console.log('fechaTermino: ' + fechaTermino.textContent)
    console.log('horaInicio: ' + horaInicio.textContent)
    console.log('horaTermino: ' + horaTermino.textContent)

    //Creo un boton update al momento de editar un elemento y deshabilito el boton enviar
    //<input type="submit" disabled value="Update" id="sendFormUpdate" onclick="updateEvent(index)">
    const formU = document.getElementById('form')
    const btnUpdate = document.createElement('input')
    btnUpdate.setAttribute("type", "submit")
    btnUpdate.setAttribute("disabled", "true")
    btnUpdate.setAttribute("onclick", `updateEvent(${index})`)
    btnUpdate.value = 'Actualizar'
    btnUpdate.id = 'sendFormUpdate'
    formU.appendChild(btnUpdate)

}

function updateEvent(index) {
    console.log('index updateEvent: ' + index)
    let idTr = `tr${index}`
    const row = document.getElementById(idTr)
    row.parentNode.removeChild(row)
    console.log(row)
    console.log(actividades)
    // const sendFormUpdate = document.getElementById("sendFormUpdate")
    // sendFormUpdate.addEventListener("input", create)
    //const data = JSON.parse(localStorage.getItem("actividades"))
    actividades.splice(index, index)
    // console.log(data)
    const nuevoEvento = readForm()//crearObjeto()
    createRow(nuevoEvento)//ingresarDatosTabla()
    console.log(actividades)
    localStorage.removeItem("actividades")
    saveDataLS()

    createPopup()

    console.log('index updateEvent: ' + index)
    const elA = 'nombreActividad' + index
    const elB = 'lugar' + index
    const elC = 'fechaInicio' + index
    const elD = 'fechaTermino' + index
    const elE = 'horaInicio' + index
    const elF = 'horaTermino' + index
    const nombreActividad = document.getElementById(elA)
    const lugar = document.getElementById(elB)
    const fechaInicio = document.getElementById(elC)
    const fechaTermino = document.getElementById(elD)
    const horaInicio = document.getElementById(elE)
    const horaTermino = document.getElementById(elF)

    // console.log(elA + ' U: ' + nombreActividad.textContent)
    // console.log(elB + ' U: ' + lugar.textContent)
    // console.log(elC + ' U: ' + fechaInicio.textContent)
    // console.log(elD + ' U: ' + fechaTermino.textContent)
    // console.log(elE + ' U: ' + horaInicio.textContent)
    // console.log(elF + ' U: ' + horaTermino.textContent)

}