//TOOLTIP
// Obtener la tabla y los elementos td
const miTabla = document.getElementById("tablaActividades");
const tds = miTabla.getElementsByTagName("td");

//PARA PANTALLA TACTILES
// Recorrer los elementos td y agregar eventos de toque
for (let i = 0; i < tds.length; i++) {
  const td = tds[i];
  // Agregar evento para el toque (touchstart)
  td.addEventListener("touchstart", function (e) {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = this.getAttribute("alt"); // Usar el contenido del td actual
    const touchX = e.changedTouches[0].clientX;
    const touchY = e.changedTouches[0].clientY;
    tooltip.style.top = touchY + "px";
    tooltip.style.left = touchX + "px";
    document.body.appendChild(tooltip);
  });
  // Agregar evento para el toque (touchend)
  td.addEventListener("touchend", function () {
    const tooltip = document.querySelector(".tooltip");
    if (tooltip) {
      tooltip.parentNode.removeChild(tooltip);
    }
  });
}

//PARA PANTALLAS DE NO TACTILES
// Recorrer los elementos td y agregar eventos de clic
for (let i = 0; i < tds.length; i++) {
  const td = tds[i];
  // Evento para el clic (mouseover)
  td.addEventListener("mouseover", function (e) {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = this.getAttribute("alt"); // Usar el atributo alt del td actual
    //   const rect = this.getBoundingClientRect();
    //   tooltip.style.top = rect.top + 'px';
    //   tooltip.style.left = rect.left + 'px';
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    tooltip.style.top = mouseY + "px";
    tooltip.style.left = mouseX + "px";
    document.body.appendChild(tooltip);
  });
  // Evento para el mouse fuera de la celda (mouseout)
  document.addEventListener("mouseout", function (e) {
    const tooltip = document.querySelector(".tooltip");
    if (tooltip && e.target !== tooltip) {
      tooltip.parentNode.removeChild(tooltip);
    }
  });
}
