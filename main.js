function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
}






const footer = document.querySelector('footer');

// Create media section
const mediaDiv = document.createElement('div');
mediaDiv.className = 'media';

const mediaText1 = document.createElement('p');
mediaText1.textContent = 'Kriszti Epoxy műhelye';

const mediaText2 = document.createElement('p');
mediaText2.textContent = 'Ajándéktárgyimat kézzel, egyedileg készítem, igy minden alkotásom más és más.';

const svgContainer = document.createElement('div');
svgContainer.className = 'svg_container';

const facebookLink = document.createElement('a');
facebookLink.href = 'https://www.facebook.com/kriszti.epoxy.muhelye';
facebookLink.target = '_blank';

const facebookSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
facebookSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
facebookSvg.setAttribute('x', '0px');
facebookSvg.setAttribute('y', '0px');
facebookSvg.setAttribute('viewBox', '0 0 50 50');

const facebookPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
facebookPath.setAttribute('d', 'M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z');

facebookSvg.appendChild(facebookPath);
facebookLink.appendChild(facebookSvg);
svgContainer.appendChild(facebookLink);

mediaDiv.appendChild(mediaText1);
mediaDiv.appendChild(mediaText2);
mediaDiv.appendChild(svgContainer);

// Create legal section
const legalDiv = document.createElement('div');
legalDiv.className = 'legal';

const legalTitle = document.createElement('p');
legalTitle.textContent = 'Jogi tudnivalók';

const legalText1 = document.createElement('p');
legalText1.textContent = 'Vásárlási feltételek';
legalText1.onclick = () => navigateToPage('ASZF.html');

const legalText2 = document.createElement('p');
legalText2.textContent = 'Adatkezelési tájékoztató';
legalText2.onclick = () => navigateToPage('Adatkezelesi-tajekoztato.html');

const legalText3 = document.createElement('p');
legalText3.textContent = 'Szállítási módok';
legalText3.onclick = () => navigateToPage('Adatkezelesi-tajekoztato.html');

const legalText4 = document.createElement('p');
legalText4.textContent = 'Fizetési módok';
legalText4.onclick = () => navigateToPage('Adatkezelesi-tajekoztato.html');

legalDiv.appendChild(legalTitle);
legalDiv.appendChild(legalText1);
legalDiv.appendChild(legalText2);
legalDiv.appendChild(legalText3);
legalDiv.appendChild(legalText4);

// Create contact section
const contactDiv = document.createElement('div');
contactDiv.className = 'contact';

const contactTitle = document.createElement('p');
contactTitle.textContent = 'kapcsolat';

const contactText1 = document.createElement('p');
contactText1.textContent = 'Petőné Birta Kriszti';

const contactText2 = document.createElement('p');
contactText2.textContent = '4243 Téglás, Beck Pál utca 34';

const contactText3 = document.createElement('p');
contactText3.textContent = '+36 20 416 64 22';

const contactText4 = document.createElement('p');
contactText4.textContent = 'krisztiepoxymuhelye@gmail.com';

contactDiv.appendChild(contactTitle);
contactDiv.appendChild(contactText1);
contactDiv.appendChild(contactText2);
contactDiv.appendChild(contactText3);
contactDiv.appendChild(contactText4);

// Append all sections to footer
footer.appendChild(mediaDiv);
footer.appendChild(legalDiv);
footer.appendChild(contactDiv);



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




basket = {};




function saveBasket() {

  for (const [productId, product] of Object.entries(basket)) {
    product.quantity = product.quantity || 1;
  }


  localStorage.setItem('basket', JSON.stringify(basket));
}

function loadBasket() {
  let storedBasket = localStorage.getItem('basket')
  if (storedBasket) {
    basket = JSON.parse(storedBasket)
  } else {
    basket = {};
  }


  for (const [productId, product] of Object.entries(basket)) {
    let productDiv = generateBasketProduct(productId, product.name, product.price, product.imageURL, formatPrice)

    let basketSection = document.querySelector('.basket-section')
    basketSection.appendChild(productDiv)
  }
  updateTotalPrice(basket)
}



loadBasket();

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('product-button')) {
    let productId = event.target.getAttribute('data-product-id');
    let productName = event.target.getAttribute('data-product-name');
    let productPrice = event.target.getAttribute('data-product-price');
    let productImageURL = event.target.getAttribute('data-product-image');

    if (basket[productId]) {
      basket[productId].quantity++;
      basket[productId].price += parseInt(productPrice);
      saveBasket();

      let existingDiv = document.querySelector(`.basket-product[data-product-id="${productId}"]`);
      if (existingDiv) {
        existingDiv.querySelector('.data-product-quantity').innerText = `Quantity: ${basket[productId].quantity}`;
        existingDiv.querySelector('.data-product-price').innerText = `Price: ${basket[productId].price} Ft`;
      }
    } else {
      basket[productId] = {
        name: productName,
        quantity: 1,
        price: parseInt(productPrice),
        imageURL: productImageURL
      };


      let productDiv = generateBasketProduct(productId, productName, productPrice, productImageURL, formatPrice);


      let basketSection = document.querySelector('.basket-section');
      basketSection.appendChild(productDiv);
    }


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
  



function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function generateBasketProduct(productId, productName, productPrice, productImageURL, formatPrice) {
  let productDiv = document.createElement('div');
  productDiv.classList.add('basket-product');
  productDiv.dataset.productId = productId;
  productDiv.innerHTML = `
    <div class="basket-container basket-image-container">
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

  let basePrice = basket[productId].price / basket[productId].quantity;
  let incrementButton = productDiv.querySelector('.increment-button');
  incrementButton.addEventListener('click', function() {

    basket[productId].quantity++;
    basket[productId].price = basePrice * basket[productId].quantity;


    saveBasket();


    let existingDiv = document.querySelector(`.basket-product[data-product-id="${productId}"]`);
    if (existingDiv) {
      existingDiv.querySelector('.basket-product-quantity').innerText = `Mennyiség: ${basket[productId].quantity}`;
      existingDiv.querySelector('.basket-product-price').innerText = `Ára: ${formatPrice(basket[productId].price)} Ft`;
    }
    updateTotalPrice(basket)
  });

  let decrementButton = productDiv.querySelector('.decrement-button');
  decrementButton.addEventListener('click', function(event) {

    if (basket[productId] && basket[productId].quantity > 1) {
      basket[productId].quantity--;
      basket[productId].price -= basePrice;


      saveBasket();


      let existingDiv = document.querySelector(`.basket-product[data-product-id="${productId}"]`);
      if (existingDiv) {
        existingDiv.querySelector('.basket-product-quantity').innerText = `Mennyiség: ${basket[productId].quantity}`;
        existingDiv.querySelector('.basket-product-price').innerText = `Ára: ${formatPrice(basket[productId].price)} Ft`;
      }
    }
    updateTotalPrice(basket)
  });


  let deleteButton = productDiv.querySelector('.delete-button');
  deleteButton.addEventListener('click', function() {

    delete basket[productId];


    saveBasket();


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



 mainLinks = document.querySelectorAll('.main_link');
 let hoverTimeout;
 function addHoverActive() {
     menu.classList.add('hover-active');
     clearTimeout(hoverTimeout);
 }

 function removeHoverActive() {
     hoverTimeout = setTimeout(() => {
         if (![...mainLinks].some(link => link.matches(':hover'))) {
             menu.classList.remove('hover-active');
         }
     }, 200); 
 }

 mainLinks.forEach(link => {
     link.addEventListener('mouseover', addHoverActive);
     link.addEventListener('mouseout', removeHoverActive);
 });



