/* Navegacion de botones */
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const content = document.querySelector('.content');

// Secuencia de secciones
btnNext.addEventListener('click', () => {
  currentSection = Math.min(currentSection + 1, 3); // Cambia '3' al número de secciones menos 1
  content.style.transform = `translateX(-${currentSection * 100}vw)`;
  updateActiveDot(currentSection);
});

btnPrev.addEventListener('click', () => {
  currentSection = Math.max(currentSection - 1, 0);
  content.style.transform = `translateX(-${currentSection * 100}vw)`;
  updateActiveDot(currentSection);
});

/* Codigo de los dots de navegación */
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

/* Navegacion y dots */

// Obtiene los elementos del formulario
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const telefonoInput = document.getElementById('telefono');

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
  var i = ProductList.length - 1;
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
  if (nombreproductoInput.value && marcaproductoInput.value && cantidadproductoInput.value && descripcionproductoInput.value) {
    var Producto = {
      nombre: nombreproductoInput.value,
      marca: marcaproductoInput.value,
      cantidad: cantidadproductoInput.value,
      descripcion: descripcionproductoInput.value
    };
    ProductList.push(Producto);
    actualizarTabla();
    nombreproductoInput.value = '';
    marcaproductoInput.value = '';
    cantidadproductoInput.value = '';
    descripcionproductoInput.value = '';
  }
});

// Seccion 4
const resumenEmpresa = document.getElementById('resumen-empresa');
const resumenProductos = document.getElementById('resumen-productos');

function actualizarResumen() {
  const empresa = `
        Nombre: ${nombreInput.value}
        Correo: ${correoInput.value}
        Teléfono: ${telefonoInput.value}
    `;
  resumenEmpresa.textContent = empresa;

  resumenProductos.innerHTML = '';
  ProductList.forEach(producto => {
    const row = document.createElement('tr');
    row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.marca}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.descripcion}</td>
        `;
    resumenProductos.appendChild(row);
  });
}

// Llama a la función actualizarResumen cuando se actualice la previsualización
nombreInput.addEventListener('input', actualizarResumen);
correoInput.addEventListener('input', actualizarResumen);
telefonoInput.addEventListener('input', actualizarResumen);
btnAgregarProducto.addEventListener('click', actualizarResumen);


// database code

// Función para generar un ID de cotización
function generarIdCotizacion() {
  const fecha = new Date();
  const dia = fecha.getDate().toString().padStart(2, '0');
  const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
  const anio = fecha.getFullYear();
  const identificador = Math.floor(Math.random() * 900000) + 100000;
  return `${dia}${mes}${anio}-${identificador}`;
}

// Función para guardar los datos de la cotización en la base de datos
function guardarCotizacion() {
  const empresa = `
    Nombre: ${previewNombre.textContent}
    Correo: ${previewCorreo.textContent}
    Teléfono: ${previewTelefono.textContent}
  `;

  const productos = [];
  ProductList.forEach(producto => {
    productos.push({
      nombre: producto.nombre,
      marca: producto.marca,
      cantidad: producto.cantidad,
      descripcion: producto.descripcion
    });
  });

  const idCotizacion = generarIdCotizacion();

  // Aquí puedes implementar el código para guardar los datos en la base de datos



  // Puedes utilizar una API o una biblioteca como Firebase o MongoDB para interactuar con la base de datos

  console.log('Datos de la cotización:', {
    empresa,
    productos,
    idCotizacion
  });

  alert(`Cotización generada con ID: ${idCotizacion}`);
}

// Evento para generar la cotización
const btnGenerarCotizacion = document.getElementById('generarCotizacion');
btnGenerarCotizacion.addEventListener('click', guardarCotizacion);