function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
}





// TERMÉK OLDALI KÉPVÁLASZTÓ

document.addEventListener('DOMContentLoaded', function() {
  const productThumbnails = document.querySelectorAll('.thumbnail_pictures img');
  const shownPicture = document.querySelector('.shown_picture img');

  productThumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
          const imgUrl = this.getAttribute('src');
          shownPicture.setAttribute('src', imgUrl);
      });
  });
});






if (window.innerWidth < 1001) {
  dropdown = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector('.dropdown-content');
  let isdropdownOpen = false;

  dropdown.addEventListener('click', function() {
    isdropdownOpen = !isdropdownOpen;
    dropdownContent.style.display = isdropdownOpen ? 'block' : 'none';
  });
}








let iconCart = document.querySelector('.icon-cart');
const closeButton = document.querySelector('.basket-close-button')
let body = document.querySelector('body');
let products = [];
let cart = [];


[iconCart, closeButton].forEach(element => {
  element.addEventListener('click', () => {
    body.classList.toggle('showCart');
  });
});


// Initialize the basket object

var basket = {};


// Save the basket to local storage
// Save the basket to local storage
function saveBasket() {
  // Loop through the basket object and add the quantity of each item to the object
  for (const [productId, product] of Object.entries(basket)) {
    product.quantity = product.quantity || 1;
  }

  // Convert the basket object to a JSON string and save it to local storage
  localStorage.setItem('basket', JSON.stringify(basket));
}

// Load the basket from local storage
function loadBasket() {
  var storedBasket = localStorage.getItem('basket')
  if (storedBasket) {
    basket = JSON.parse(storedBasket)
  } else {
    basket = {}; // Initialize an empty basket if no data is stored
  }

  // Generate the basket product structure for each product in the basket object
  for (const [productId, product] of Object.entries(basket)) {
    var productDiv = generateBasketProduct(productId, product.name, product.price, product.imageURL, formatPrice)

    var basketSection = document.querySelector('.basket-section')
    basketSection.appendChild(productDiv)
  }
  updateTotalPrice(basket)
  // Update the total price
}


//TODO: GIVE THE LOADBASKET FUNCTION THE BASE PRODUCTPRICE 
// Load the basket when the page loads
loadBasket();

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('product-button')) {
    // Get the product information from the data attributes
    var productId = event.target.getAttribute('data-product-id');
    var productName = event.target.getAttribute('data-product-name');
    var productPrice = event.target.getAttribute('data-product-price');
    var productImageURL = event.target.getAttribute('data-product-image');

    // Check if the product already exists in the basket object
    if (basket[productId]) {
      // Update the quantity and price
      basket[productId].quantity++;
      basket[productId].price += parseInt(productPrice);

      // Save the basket to local storage
      saveBasket();

      // Update the existing div in the basket section
      var existingDiv = document.querySelector(`.basket-product[data-product-id="${productId}"]`);
      if (existingDiv) {
        existingDiv.querySelector('.data-product-quantity').innerText = `Quantity: ${basket[productId].quantity}`;
        existingDiv.querySelector('.data-product-price').innerText = `Price: ${basket[productId].price} Ft`;
      }
    } else {
      // Add the product to the basket object
      basket[productId] = {
        name: productName,
        quantity: 1,
        price: parseInt(productPrice),
        imageURL: productImageURL
      };

      // Generate the basket product structure
      var productDiv = generateBasketProduct(productId, productName, productPrice, productImageURL, formatPrice);

      // Add the new product div to the basket section
      var basketSection = document.querySelector('.basket-section');
      basketSection.appendChild(productDiv);
    }

    // Save the basket to local storage
    saveBasket();
  }

  const orderBtn = document.querySelector('.order-btn')
  orderBtn.addEventListener('click', function() {
    var basket = JSON.parse(localStorage.getItem('basket'));

    // Delete everything in the basket
    basket = {};

    // Save the empty basket to local storage
    localStorage.setItem('basket', JSON.stringify(basket));
  });
});


function updateTotalPrice(obj) {
  let totalPrice = 0;
  let quantityCount = 0;
  for (const item of Object.values(obj)) {
    if (item.price) {
      totalPrice += item.price;
      quantityCount += item.quantity;
    }
  }

  const totalElement = document.querySelector('.total');
  if (totalPrice > 0) {
    totalElement.innerHTML = `Összesen: ${totalPrice} Ft + Szállítás<div class="order-button">Rendelés leadása</div>`;
  } else {
    totalElement.innerText = `Üres a kosarad`
  }

  const quantityCounter = document.querySelector('.basket-count')
  quantityCounter.innerText = `${quantityCount}`
}


// Format price function
function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function generateBasketProduct(productId, productName, productPrice, productImageURL, formatPrice) {
  // Create a new div element for the product in the basket
  var productDiv = document.createElement('div');
  productDiv.classList.add('basket-product');
  productDiv.dataset.productId = productId;
  productDiv.innerHTML = `
    <div class="basket-container">
      <div class="basket-product-image product-values">
        <img src="${productImageURL}" alt="${productName}">
      </div>
      <div class="basket-product-name product-values">${productName}</div>
    </div>
    <div class="quantity-container basket-conatiner">
      <div class="basket-product-quantity product-values">Mennyiség: ${basket[productId].quantity}</div>
      <div class="button_container product-values">
        <div class="increment-button">+</div>
        <div class="decrement-button">-</div>
      </div>
    </div>
    <div class="basket-container">
      <div class="basket-product-price" product-values>Ára: ${formatPrice(productPrice)} Ft</div>
      <div class="delete-button product-values"><img src="../../../img/icons/trashcan.svg"></div>
    </div>
  `;
  updateTotalPrice(basket)
  // Add click event listeners to the increment and decrement buttons
  var basePrice = basket[productId].price / basket[productId].quantity;
  var incrementButton = productDiv.querySelector('.increment-button');
  incrementButton.addEventListener('click', function() {
    // Increment the quantity and price
    basket[productId].quantity++;
    basket[productId].price = basePrice * basket[productId].quantity;

    // Save the basket to local storage
    saveBasket();

    // Update the existing div in the basket section
    var existingDiv = document.querySelector(`.basket-product[data-product-id="${productId}"]`);
    if (existingDiv) {
      existingDiv.querySelector('.basket-product-quantity').innerText = `Mennyiség: ${basket[productId].quantity}`;
      existingDiv.querySelector('.basket-product-price').innerText = `Ára: ${formatPrice(basket[productId].price)} Ft`;
    }
    updateTotalPrice(basket)
  });

  var decrementButton = productDiv.querySelector('.decrement-button');
  decrementButton.addEventListener('click', function(event) {
    // Decrement the quantity and price
    if (basket[productId] && basket[productId].quantity > 1) {
      basket[productId].quantity--;
      basket[productId].price -= basePrice;

      // Save the basket to local storage
      saveBasket();

      // Update the existing div in the basket section
      var existingDiv = document.querySelector(`.basket-product[data-product-id="${productId}"]`);
      if (existingDiv) {
        existingDiv.querySelector('.basket-product-quantity').innerText = `Mennyiség: ${basket[productId].quantity}`;
        existingDiv.querySelector('.basket-product-price').innerText = `Ára: ${formatPrice(basket[productId].price)} Ft`;
      }
    }
    updateTotalPrice(basket)
  });

  // Add click event listener to the delete button
  var deleteButton = productDiv.querySelector('.delete-button');
  deleteButton.addEventListener('click', function() {
    // Remove the product from the basket object
    delete basket[productId];

    // Save the basket to local storage
    saveBasket();

    // Remove the product div from the basket section
    var basketSection = document.querySelector('.basket-section');
    basketSection.removeChild(productDiv);
    updateTotalPrice(basket)
  });

  return productDiv;
}

const container = document.querySelector('.container')
const orderButton = document.querySelector('.order-button')
orderButton.addEventListener('click', function () {
  body.classList.toggle('showCart');
  console.log('clicked order');

  // Get the basket object
  var basket = JSON.parse(localStorage.getItem('basket'));

  // Initialize an empty string to store the product names and quantities
  var productsList = '';

  // Loop through the basket object and add the product names and quantities to the string
  for (const [productId, product] of Object.entries(basket)) {
    productsList += `Termék: ${product.name}, Mennyiség: ${product.quantity}\n`;
  }


  var totalPrice = 0;
  for (const [productId, product] of Object.entries(basket)) {
    totalPrice += product.price * product.quantity;
  }

  // Add the total price to the products list
  productsList += `Összesen: ${totalPrice} Ft + Szállítás\n\n`;

  container.innerHTML=`
  <div class="form_container">
  <img src="img/shape.png" class="square" alt="" />
  <div class="form">
    <div class="contact-info">
      <h3 class="title">Köszönöm bizalmad!</h3>
      <p class="text">
        Miután kitöltötted a szükséges mezőket a küldés gombbal a kosaradban lévő termékeket megkapom és amint
        tudok felkereslek a részletekkel kapcsolatban, ha még ez előtt van megjegyzésed kérlek írd az üzenet mezőbe"
      </p>
    
      <div class="info">
        <div class="information">
          <i class="fas fa-map-marker-alt"></i> &nbsp &nbsp
        
          <p>4243 Téglás, Beck Pál utca 34</p>
        </div>
        <div class="information">
          <i class="fas fa-envelope"></i> &nbsp &nbsp
          <p>krisztiepoxymuhelye@gmail.com</p>
        </div>
        <div class="information">
          <i class="fas fa-phone"></i>&nbsp&nbsp
          <p>+36 20 416 64 22</p>
        </div>
      </div>
    </div>
  
    <div class="contact-form">
      <span class="circle one"></span>
      <span class="circle two"></span>
    
      <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="subject" value="Rendelés!!">
          <input type="hidden" name="from_name" value="Epoxy">
          <input type="hidden" name="access_key" value="a4f9ff50-3dbf-4d09-8978-fb04c486d609">
          <input type="hidden" name="redirect" value="http://127.0.0.1:5501/thankYouPage.html">
          <div class="input-container">
              <p>Név</p>
              <input type="text" name="name" class="input" required/>
              <label for=""></label>
          </div>
          <div class="input-container">
              <p>Email</p>
              <input type="email" name="email" class="input" required/>
              <label for=""></label>
          </div>
          <div class="input-container">
              <p>Telefonszám</p>
              <input type="tel" name="phone" class="input" required />
              <label for=""></label>
          </div>
          <div class="input-container textarea hidden">

              <textarea name="message" class="input">${productsList} Megjegyzés:\n</textarea>
              <label for=""></label>
          </div>
          <div class="input-container textarea">
              <p>Üzenet</p>
              <textarea name="message" class="input"></textarea>
              <label for=""></label>
          </div>

        <button type="submit" value="Send" class="btn order-btn">Küldés</button>
      </form>
    </div>
  </div>
</div>
  `
});


