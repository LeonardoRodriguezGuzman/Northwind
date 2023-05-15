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
                    return '<button class="btn btn-info">Editar</button> <button class="btn btn-danger">Eliminar</button>';
                }
            }
        ],
        rowCallback: function(row, data, index) {
          if (data.nivel_reorden > data.existencia) {
              $(row).css('background-color', 'red');
          }
      }
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

  function agregar(){

  }

  function editar(){

  }

  function eliminar(){

  }


  
    // Agregar eventos a los botones
    $('#miTabla tbody').on('click', '.editar', function () {
        var data = miTabla.row($(this).parents('tr')).data();
        alert('Editar: ' + data[0]);
    });

    $('#miTabla tbody').on('click', '.eliminar', function () {
        var data = miTabla.row($(this).parents('tr')).data();
        alert('Eliminar: ' + data[0]);
    });