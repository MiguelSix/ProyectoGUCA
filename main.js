const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const content = document.querySelector('.content');

let currentSection = 0;

const dots = document.querySelectorAll('.dot');

function updateActiveDot(index) {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active-dot');
    } else {
      dot.classList.remove('active-dot');
    }
  });
}

// Obtiene los elementos del formulario
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const telefonoInput = document.getElementById('telefono');

// Obtiene los elementos de la previsualización
const previewNombre = document.getElementById('preview-nombre');
const previewCorreo = document.getElementById('preview-correo');
const previewTelefono = document.getElementById('preview-telefono');

// Función para actualizar la previsualización
function actualizarPrevisualizacion() {
    previewNombre.textContent = nombreInput.value || 'Nombre de la empresa';
    previewCorreo.textContent = correoInput.value || 'Correo electrónico';
    previewTelefono.textContent = telefonoInput.value || 'Teléfono de la empresa';
}

// Asigna el evento input a cada campo del formulario
nombreInput.addEventListener('input', actualizarPrevisualizacion);
correoInput.addEventListener('input', actualizarPrevisualizacion);
telefonoInput.addEventListener('input', actualizarPrevisualizacion);

// Llama a la función al inicio para mostrar los valores por defecto
actualizarPrevisualizacion();

//Obtiene el boton de agregar Producto
const btnAgregarProducto = document.getElementById('btnAgregarProducto');

//Crea una Lista de productos
const ProductList = [];

//Obtiene los elementos del formulario de productos
const nombreproductoInput = document.getElementById('nombreproducto');
const marcaproductoInput = document.getElementById('marcaproducto');
const cantidadproductoInput = document.getElementById('cantidadproducto');
const descripcionproductoInput = document.getElementById('descripcionproducto');

//Obtiene el cuerpo de la tabla de previsualizacion
const tablaprevisualizacion = document.getElementById('tablaprevisualizacion');

// Función para actualizar la tabla de previsualizacio
function actualizarTabla() {
  //crea fila de la ultima componente de la lista de productos
  var fila = document.createElement("tr");
  var i = ProductList.length-1;
  //agrega nombre a la fila
  var celda = document.createElement("td");
  celda.textContent = ProductList[i].nombre;
  fila.appendChild(celda);
  //agrega marca a la fila
  var celda = document.createElement("td");
  celda.textContent = ProductList[i].marca;
  fila.appendChild(celda);
  //agrega cantidad a la fila
  var celda = document.createElement("td");
  celda.textContent = ProductList[i].cantidad;
  fila.appendChild(celda);
  //agrega descripcion a la fila
  var celda = document.createElement("td");
  celda.textContent = ProductList[i].descripcion;
  fila.appendChild(celda);
  //agrega la fila a la tabla
  tablaprevisualizacion.appendChild(fila);
};

//Agrega productos a la lista al clickear el boton
btnAgregarProducto.addEventListener('click', () => {
  if (nombreproductoInput.value && marcaproductoInput.value && cantidadproductoInput.value && descripcionproductoInput.value){
    var Producto = {
      nombre: nombreproductoInput.value,
      marca: marcaproductoInput.value,
      cantidad: cantidadproductoInput.value,
      descripcion: descripcionproductoInput.value
    };
    ProductList.push(Producto);
    actualizarTabla();
    nombreproductoInput.value='';
    marcaproductoInput.value='';
    cantidadproductoInput.value='';
    descripcionproductoInput.value='';
  }
});


btnPrev.addEventListener('click', () => {
  currentSection = Math.max(currentSection - 1, 0);
  content.style.transform = `translateX(-${currentSection * 100}vw)`;
  updateActiveDot(currentSection);
});

btnNext.addEventListener('click', () => {
  currentSection = Math.min(currentSection + 1, 2); // Cambia '2' al número de secciones menos 1
  content.style.transform = `translateX(-${currentSection * 100}vw)`;
  updateActiveDot(currentSection);
});