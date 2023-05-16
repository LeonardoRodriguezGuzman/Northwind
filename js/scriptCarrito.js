var productos = [
    { producto: 'Laptop HP', categoria: 'Electrónicos', precio: 10000, existencia: 10, foto: 'ruta/foto1.jpg' },
    { producto: 'Mouse Logitech', categoria: 'Electrónicos', precio: 500, existencia: 3, foto: 'ruta/foto2.jpg' },
    { producto: 'Impresora Epson', categoria: 'Electrónicos', precio: 2000, existencia: 0, foto: 'ruta/foto3.jpg' }
];

var carrito = [];

// Función para mostrar los productos en la lista
function mostrarProductos() {
    limpiarTablaProductos();
    var tabla = $('#tabla-productos').DataTable();

    productos.forEach(function (producto) {
        tabla.row.add([
            producto.producto,
            producto.categoria,
            producto.precio,
            producto.existencia,
            '<button class="btn btn-primary btn-carrito" onclick="agregarAlCarrito(\'' + producto.producto + '\')">Agregar al Carrito</button>'
        ]).draw(false);
    });
}

function limpiarTablaProductos() {
    var tabla = $('#tabla-productos').DataTable();
    tabla.clear().draw();
}


// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    var productoEncontrado = productos.find(function (p) {
      return p.producto === producto;
    });
  
    if (productoEncontrado) {
      if (productoEncontrado.existencia > 0) {
        var productoEnCarrito = carrito.find(function (item) {
          return item.producto === productoEncontrado.producto;
        });
  
        if (productoEnCarrito) {
          productoEnCarrito.unidades++;
        } else {
          carrito.push({ ...productoEncontrado, unidades: 1 });
        }
  
        productoEncontrado.existencia--;
  
        var tablaCarrito = $('#tabla-carrito').DataTable();
        tablaCarrito.clear().draw();
  
        carrito.forEach(function (item) {
          tablaCarrito.row.add([
            item.producto,
            '<img src="' + item.foto + '" width="50" height="50">',
            item.precio,
            item.unidades,
            '<button class="btn btn-danger" onclick="eliminarDelCarrito(\'' + item.producto + '\')">Eliminar</button>'
          ]).draw(false);
        });
  
        mostrarProductos();
      } else {
        alert('No hay existencia disponible para este producto.');
      }
    }
  }


// Función para eliminar un producto del carrito
function eliminarDelCarrito(producto) {
    var index = carrito.findIndex(function (item) {
      return item.producto === producto;
    });
  
    if (index !== -1) {
      var productoEnCarrito = carrito[index];
  
      if (productoEnCarrito.unidades > 1) {
        productoEnCarrito.unidades--;
      } else {
        carrito.splice(index, 1);
      }
  
      var tablaCarrito = $('#tabla-carrito').DataTable();
      tablaCarrito.clear().draw();
  
      carrito.forEach(function (item) {
        tablaCarrito.row.add([
          item.producto,
          '<img src="' + item.foto + '" width="50" height="50">',
          item.precio,
          item.unidades,
          '<button class="btn btn-danger" onclick="eliminarDelCarrito(\'' + item.producto + '\')">Eliminar</button>'
        ]).draw(false);
      });
  
      // Restablecer unidades en la lista de productos
      var productoEncontrado = productos.find(function (p) {
        return p.producto === producto;
      });
  
      if (productoEncontrado) {
        productoEncontrado.existencia++;
        mostrarProductos();
      }
    }
  }   


// Función para confirmar la compra
function confirmarCompra() {
    // Lógica para confirmar la compra
}

$(document).ready(function () {
    // Inicializar DataTables
    $('#tabla-productos').DataTable();
    $('#tabla-carrito').DataTable();

    // Mostrar los productos en la lista
    mostrarProductos();
});