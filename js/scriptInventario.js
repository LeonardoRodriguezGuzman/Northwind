$(document).ready(function() {
    $('#tabla').DataTable({
        responsive: true,
        data: datos,
        columns: [
            {data:'clave'},
            {data:'producto'},
            {data:'categoria'},
            {data:'existencia'},
            {data:'nivel_reorden'},
            {data: null,
                render: function(data, type, row) {
                    return '<button class="btn btn-info" onclick="mostrarFormularioEditar()">Editar</button> <button class="btn btn-danger" onclick="eliminar()">Eliminar</button>';
                }
            }
            
        ],
        rowCallback: function(row, data, index) {
          if (data.nivel_reorden > data.existencia) {
              $(row).css('background-color', 'red');
          }
        }
    });
        // Agregar eventos a los botones
        $('#miTabla tbody').on('click', '.editar', function () {
          var data = miTabla.row($(this).parents('tr')).data();
          alert('Editar: ' + data[0]);
      });
  
      $('#miTabla tbody').on('click', '.eliminar', function () {
          var data = miTabla.row($(this).parents('tr')).data();
          alert('Eliminar: ' + data[0]);
      });
});

var datos = 
[
    {
      'clave': "PROD001",
      'producto': "Laptop HP",
      'categoria': "Electrónicos",
      'existencia': 10,
      'nivel_reorden': 5
    },
    {
      'clave': "PROD002",
      'producto': "Mouse Logitech",
      'categoria': "Accesorios",
      'existencia': 3,
      'nivel_reorden': 8
    },
    {
      'clave': "PROD003",
      'producto': "Impresora Epson",
      'categoria': "Electrónicos",
      'existencia': 0,
      'nivel_reorden': 2
    },
    {
      'clave': "PROD004",
      'producto': "Bolsa de mano",
      'categoria': "Moda",
      'existencia': 20,
      'nivel_reorden': 10
    },
    {
      'clave': "PROD005",
      'producto': "Pantalón de mezclilla",
      'categoria': "Moda",
      'existencia': 5,
      'nivel_reorden': 6
    }
  ];

  function mostrarFormularioAgregar(){
    let formularioContainer = document.getElementById("formulario-container");
    let boton = document.getElementById("btn-agregar");
    formularioContainer.style.display = "flex";
    boton.style.display = "flex"
    setTimeout(function() {
      formularioContainer.style.transform = "translate(-50%, -50%) scale(1)";
    }, 10);
  };

  function ocultarFormulario(){
    let formularioContainer = document.getElementById("formulario-container");
    let botonAgregar = document.getElementById("btn-agregar");
    let botonEditar = document.getElementById("btn-editar");
    formularioContainer.style.display = "flex";
    botonAgregar.style.display = "none";
    botonEditar.style.display = "none";
    setTimeout(function() {
      formularioContainer.style.transform = "translate(-50%, -50%) scale(0)";
    }, 10);
  };

  //variables del formulario;
  let clave = document.querySelector("clave");
  let producto=document.querySelector("producto");
  let categoria=document.querySelector("categoria");
  let existencia=document.querySelector("existencia");
  let nivel_reorden=document.querySelector("nivel_reorden");
  //CRUD
  function agregar(producto){
    
  };

  function editar(clave){

  };

  function eliminar(clave){

  };

  function cancelar(){
    ocultarFormulario();
  };
  


  