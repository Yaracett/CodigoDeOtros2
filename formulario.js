/*Rs un codigo para procesar un formulario que se envía cuando un usuario hace 
clic en el botón enviar asegurandose de que el formulario se complete correctamente y envíe los datos necesarios*/

var formulario = document.querySelector("#form")

/*El error esta en que se está utilizando 
  el nombre de una variable "e" que se oculta con el parámetro de la función anónima e que se recibe y puede ocasionar un error*/

formulario.onsubmit = function(event) {
//cambiar el nombre de la variable e y reemplazada reemplazar la funcion por "preventDefault()" para evitar la acción predeterminada del evento de envío del formulario
  event.preventDefault();
  
  //para ser más especificos, hay que cambiiar el nombre de las variables
  var nombreInput = formulario.elements[0]
  var edadInput = formulario.elements[1]
  var nacionalidadInput = formulario.elements[2]

  var nombre = nombreInput.value
  var edad = edadInput.value

  var i = nacionalidadInput.selectedIndex
  var nacionalidad = nacionalidadInput.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)
//Para validación y evitar espacios en blanco, podría utilizarse trim
  if (nombre.length === 0) {
    nombreInput.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    edadInput.classList.add("error")
  }

  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad)
  }
}
