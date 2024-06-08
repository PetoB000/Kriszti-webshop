const textarea = document.querySelector('textarea.product-list');

console.log(basket)
let productsList = '';
let totalPrice = 0;
let getBasket = JSON.parse(localStorage.getItem('basket'));
for (const [productId, product, price] of Object.entries(getBasket)) {
  productsList += `Termék: ${product.name}, Mennyiség: ${product.quantity}<br>`;
  totalPrice += product.price;
}
productsList += `Összesen: ${totalPrice} Ft <br> Üzenet: <br>`


textarea.innerHTML = productsList
console.log(textarea)