
// Datos del arreglo
const datos = [
  {
    producto: 'Laptop Hp',
    categoria: 'Electronicos',
    precio: 10000,
    existencia: 5
  },
  {
    producto: 'Impresora',
    categoria: 'Electronicos',
    precio: 2000,
    existencia: 8
  },
  {
    producto: 'Mouse',
    categoria: 'Electronicos',
    precio: 1500,
    existencia: 8
  },
  {
    producto: 'Bolso',
    categoria: 'Moda',
    precio: 5000,
    existencia: 3
  }
  // Agrega más objetos según tus necesidades
];

// Mapeo de productos a imágenes
const imagenes = {
  'Laptop Hp': 'imagenes/laptop-hp.jpg',
  'Impresora': 'imagenes/impresora-hp.jpg',
  'Mouse': 'imagenes/mouse-logitec.jpg',
  'Bolso':'imagenes/bolso.jpg'
  // Agrega más productos e imágenes según corresponda
};

const cardContainer = document.getElementById('cardContainer');



// Recorrer los datos y crear las tarjetas dinámicamente
datos.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('col');

  card.innerHTML = `
  <div class="card text-center text-white bg-primary my-card " style="width: 13rem;">
      <img src="${imagenes[item.producto]}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${item.producto}</h5>
          <p class="card-text">${item.categoria}</p>
          <p class="card-text">$${item.precio.toFixed(2)}</p>
          <p class="card-text">${item.existencia} unidades</p>
          <a href="#" class="btn btn-light">Agregar al carrito</a>
      </div>
  </div>
`;

  cardContainer.appendChild(card);
});


// Seleccione el contenedor de elementos del carrito
const cartItemsContainer = document.getElementById('cartItems');

// Función para agregar un artículo al carrito
function addToCart(product) {
  // Crear una nueva fila para el artículo
  const row = document.createElement('tr');

  // Establecer el contenido HTML de la fila
  row.innerHTML = `
    <td><img src="${imagenes[product.producto]}" alt="${product.producto}" width="50"></td>
    <td>${product.producto}</td>
    <td>$${product.precio.toFixed(2)}</td>
    <td>1</td>
  `;

  // Agregue la fila al contenedor de elementos del carrito
  cartItemsContainer.appendChild(row);

  // Actualizar el precio total
  updateTotal(product.precio);
}

// Actualizar el precio total
function updateTotal(price) {
  const cartTotalElement = document.getElementById('cartTotal');
  const cartTotal = parseFloat(cartTotalElement.textContent.slice(1)); // Extract the numerical value

  // Calcular el nuevo total
  const newTotal = cartTotal + price;

  // Actualizar el precio total en el HTML
  cartTotalElement.textContent = `$${newTotal.toFixed(2)}`;
}

// Creacion de eventos para manejar los clics del botón Agregar al carrito
cardContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn')) {
    const card = event.target.closest('.card');
    const productName = card.querySelector('.card-title').textContent;
    const product = datos.find(item => item.producto === productName);

    if (product && product.existencia > 0) {
      addToCart(product);
      product.existencia--; 
    }
  }
});
