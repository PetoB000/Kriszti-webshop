function formatPrice(price) {
    return price.toLocaleString('hu-HU', { minimumFractionDigits: 0 });
  }
  
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the product data from local storage
    const product = JSON.parse(localStorage.getItem('product'));
  
    // Get references to the HTML elements
    const imgContainer = document.querySelector('.picture_container');
    const shownImg = document.querySelector('.shown_picture img');
    const thumbnailPictures = document.querySelector('.thumbnail_pictures');
    const nameDiv = document.querySelector('.product_name');
    const productDescription = document.querySelector('.product_description');
  
    // Set the shown image and product name
    shownImg.src = product.shownImg;
    nameDiv.textContent = product.name;
  
    // Add thumbnails if available
    if (product.thumbnails.length > 0) {
      product.thumbnails.forEach((thumbnail) => {
        const img = document.createElement('img');
        img.src = thumbnail;
        thumbnailPictures.appendChild(img);
      });
    } else {
      imgContainer.classList.add('no_thumbnail');
    }
  
    // Set the product description and price
    productDescription.innerHTML = `
      ${product.description}
      <span>Fontos!</span>
      <br><br>
      Az epoxy terméket ne tedd ki közvetlen forróságnak, napsütésnek és extrém hidegnek sem, mert ezek mind minőségromláshoz vezethetnek.
      <br>
      Tisztítás: nedves, mosószeres ruhával
      <br><br>
      <div class="product_price">
        Ára: ${formatPrice(product.price)} Ft
        <div id="addToCartButton" class="to_basket product-button"
          data-product-id="${product.productId}"
          data-product-name="${product.name}"
          data-product-image="${product.dataImage}"
          data-product-price="${product.price}"
        >
          Kosárba teszem
        </div>
      </div>
    `;
  
    // Get references to the thumbnail images and shown picture
    const thumbnails = document.querySelectorAll('.thumbnail_pictures img');
    const shownPicture = document.querySelector('.shown_picture img');
  
    // Add event listeners to the thumbnails
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener('click', () => {
        shownPicture.src = thumbnail.src;
      });
    });
  });