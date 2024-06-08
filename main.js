function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
}



menuContainer = document.querySelector('.menu-container')

menuContainer.innerHTML = `
<div class="menu"> 
<img src="./img/logo3.png" alt="" class="logo" onclick="navigateToPage('./index.html')">        
<div class="main_link pulse" onclick="navigateToPage('./index.html')">Főoldal</div>
<div class="main_link pulse" onclick="navigateToPage('./about.html')">Rólam</div>
<div class="main_link pulse" onclick="navigateToPage('./vasarlas_menete.html')">Vásárlás menete</div>
<div class="dropdown">
    <div class="main_link pulse">Termékeim  <img src="./img/icons/down-arrow(2).svg" alt="" class="icon"></div>
    <ul class="dropdown-content">
        <li data-categoryid="1" onclick="loadCategoryData(this)">Tálcák</li>
        <li data-categoryid="3" onclick="loadCategoryData(this)">Emlékőrök</li>
        <li data-categoryid="4" onclick="loadCategoryData(this)">Faliórák</li>
        <li data-categoryid="5" onclick="loadCategoryData(this)">Kollekciók</li>
        <li data-categoryid="7" onclick="loadCategoryData(this)">Sütis tálcák</li>
        <li data-categoryid="6" onclick="loadCategoryData(this)">Poháralátétek/Tálak</li>
        <li data-categoryid="2" onclick="loadCategoryData(this)">Ajándéktárgyak</li>
        <li data-categoryid="8" onclick="loadCategoryData(this)">Jegyzetfüzetek</li>
    </ul>
</div>
<div class="main_link pulse" onclick="navigateToPage('./contact.html')">Kapcsolat</div>
<div class="basket icon-cart">
    <img src="./img/icons/noun-basket-6865168.svg" alt="">
    <div class="basket-count"></div>
</div>
<div class="hamburger"><img src="./img/icons/menu-circle-3-512.svg" alt=""></div>
</div>
`


footer = document.querySelector('footer')

footer.innerHTML = `
<div class="media">
  <p>Kriszti Epoxy műhelye</p>

  <p>Ajándéktárgyimat kézzel, egyedileg készítem, igy minden alkotásom más és más.</p>
  <div class="svg_container">
      <a href="https://www.facebook.com/kriszti.epoxy.muhelye" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
              <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
          </svg>
      </a>
      <!-- <a href="https://www.instagram.com/YourInstagramPage" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 50 50">
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
          </svg>
      </a>    -->
  </div>
</div>

<div class="legal">
  <p>Jogi tudnivalók</p>
  <p onclick="navigateToPage('ASZF.html')">Vásárlási feltételek</p>
  <p onclick="navigateToPage('Adatkezelesi-tajekoztato.html')">Adatkezelési tájékoztató</p>
  <p onclick="navigateToPage('Adatkezelesi-tajekoztato.html')">Szállítási módok</p>
  <p onclick="navigateToPage('Adatkezelesi-tajekoztato.html')">Fizetési módik</p>

</div>
<div class="contact">
  <p>kapcsolat</p>
  <p>Petőné Birta Kriszti</p>
  <p>4243 Téglás, Beck Pál utca 34</p>
  <p>+36 20 416 64 22</p>
  <p>krisztiepoxymuhelye@gmail.com</p>
</div>

`
cartTab = document.querySelector('.cartTab')
cartTab.innerHTML = ` 
<div class="header">
  <h1>Kosarad</h1>
  <h1><svg class="basket-close-button" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="red" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg></h1>
</div>
<div class="basket-section"></div>
<div class="total">Üres a kosarad
  <div class="order-button">Rendelés leadása</a>
</div>`
const orderButton = document.querySelector('.order-button');
orderButton.addEventListener('click', function() {
  window.location.href = 'place-order.html'
})

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

let basket = {};



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
  let storedBasket = localStorage.getItem('basket')
  if (storedBasket) {
    basket = JSON.parse(storedBasket)
  } else {
    basket = {}; // Initialize an empty basket if no data is stored
  }

  // Generate the basket product structure for each product in the basket object
  for (const [productId, product] of Object.entries(basket)) {
    let productDiv = generateBasketProduct(productId, product.name, product.price, product.imageURL, formatPrice)

    let basketSection = document.querySelector('.basket-section')
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
    let productId = event.target.getAttribute('data-product-id');
    let productName = event.target.getAttribute('data-product-name');
    let productPrice = event.target.getAttribute('data-product-price');
    let productImageURL = event.target.getAttribute('data-product-image');

    // Check if the product already exists in the basket object
    if (basket[productId]) {
      // Update the quantity and price
      basket[productId].quantity++;
      basket[productId].price += parseInt(productPrice);

      // Save the basket to local storage
      saveBasket();

      // Update the existing div in the basket section
      let existingDiv = document.querySelector(`.basket-product[data-product-id="${productId}"]`);
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
      let productDiv = generateBasketProduct(productId, productName, productPrice, productImageURL, formatPrice);

      // Add the new product div to the basket section
      let basketSection = document.querySelector('.basket-section');
      basketSection.appendChild(productDiv);
    }

    // Save the basket to local storage
    saveBasket();
    window.location.reload();
  }


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
    totalElement.innerHTML = `Összesen: ${formatPrice(totalPrice)} Ft + Szállítás  <div class="order-button"><a href="place-order.html">Rendelés leadása</a></div>`;
  } else {
    totalElement.innerHTML = `Üres a kosarad  <div class="order-button">Rendelés leadása</div>`
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
  let productDiv = document.createElement('div');
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
      <div class="delete-button product-values"><img src="./img/icons/trashcan.svg"></div>
    </div>
  `;
  updateTotalPrice(basket)
  // Add click event listeners to the increment and decrement buttons
  let basePrice = basket[productId].price / basket[productId].quantity;
  let incrementButton = productDiv.querySelector('.increment-button');
  incrementButton.addEventListener('click', function() {
    // Increment the quantity and price
    basket[productId].quantity++;
    basket[productId].price = basePrice * basket[productId].quantity;

    // Save the basket to local storage
    saveBasket();

    // Update the existing div in the basket section
    let existingDiv = document.querySelector(`.basket-product[data-product-id="${productId}"]`);
    if (existingDiv) {
      existingDiv.querySelector('.basket-product-quantity').innerText = `Mennyiség: ${basket[productId].quantity}`;
      existingDiv.querySelector('.basket-product-price').innerText = `Ára: ${formatPrice(basket[productId].price)} Ft`;
    }
    updateTotalPrice(basket)
  });

  let decrementButton = productDiv.querySelector('.decrement-button');
  decrementButton.addEventListener('click', function(event) {
    // Decrement the quantity and price
    if (basket[productId] && basket[productId].quantity > 1) {
      basket[productId].quantity--;
      basket[productId].price -= basePrice;

      // Save the basket to local storage
      saveBasket();

      // Update the existing div in the basket section
      let existingDiv = document.querySelector(`.basket-product[data-product-id="${productId}"]`);
      if (existingDiv) {
        existingDiv.querySelector('.basket-product-quantity').innerText = `Mennyiség: ${basket[productId].quantity}`;
        existingDiv.querySelector('.basket-product-price').innerText = `Ára: ${formatPrice(basket[productId].price)} Ft`;
      }
    }
    updateTotalPrice(basket)
  });

  // Add click event listener to the delete button
  let deleteButton = productDiv.querySelector('.delete-button');
  deleteButton.addEventListener('click', function() {
    // Remove the product from the basket object
    delete basket[productId];

    // Save the basket to local storage
    saveBasket();

    // Remove the product div from the basket section
    let basketSection = document.querySelector('.basket-section');
    basketSection.removeChild(productDiv);
    updateTotalPrice(basket)
  });

  return productDiv;

}

function clearBasket() {
  basket = {};
  localStorage.setItem('basket', JSON.stringify(basket));
}

 // Get the menu container and all main_link elements

 const mainLinks = document.querySelectorAll('.main_link');
 let hoverTimeout;
 // Function to add hover-active class
 function addHoverActive() {
     menu.classList.add('hover-active');
     clearTimeout(hoverTimeout);
 }
 // Function to remove hover-active class with a delay
 function removeHoverActive() {
     hoverTimeout = setTimeout(() => {
         // Check if no main_link is being hovered
         if (![...mainLinks].some(link => link.matches(':hover'))) {
             menu.classList.remove('hover-active');
         }
     }, 200); // 1000 milliseconds = 1 second
 }
 // Add event listeners to each main_link
 mainLinks.forEach(link => {
     link.addEventListener('mouseover', addHoverActive);
     link.addEventListener('mouseout', removeHoverActive);
 });



