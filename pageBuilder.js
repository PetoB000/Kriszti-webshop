function formatPrice(price) {
    return `${price.toLocaleString('hu-HU')} Ft`;
  }


// DOMContentLoaded event handler for category page
document.addEventListener('DOMContentLoaded', () => {
  // Retrieve category data from localStorage
  const categoryData = localStorage.getItem('selectedCategory');
  if (!categoryData) return; // Exit early if no data is found

  const category = JSON.parse(categoryData);
  console.log('Category data loaded:', category); // Debugging line

  // Select elements
  const categoryNameElement = document.querySelector('.container > span');
  const productsContainer = document.querySelector('.products');

  if (!categoryNameElement || !productsContainer) return; // Exit early if elements are not found

  // Set category name
  categoryNameElement.textContent = category.name;

  // Clear existing products
  productsContainer.innerHTML = '';

  // Create product elements
  category.products.forEach((product) => {
    const productElement = document.createElement('div');
    productElement.className = 'product';

    // Add classes to product element
    if (product.classes) {
      productElement.classList.add(...product.classes.split(' '));
    }

    // Create image element
    const imageElement = document.createElement('img');
    imageElement.src = product.thumbnail;
    imageElement.alt = product.name;

    // Add load event listener
    imageElement.addEventListener('load', () => {
      // Check image dimensions after it has loaded
      if (imageElement.naturalWidth < imageElement.naturalHeight) {
        imageElement.classList.add('product_img_exception');
      } else {
        imageElement.classList.add('product_img');
      }
      console.log(`Image loaded with dimensions: ${imageElement.naturalWidth}x${imageElement.naturalHeight}`);

      // Add any additional classes if specified
      if (product.imgClasses) {
        imageElement.classList.add(...product.imgClasses.split(' '));
      }
    });

    // Append image to product element
    productElement.appendChild(imageElement);

    // Create product info element
    const productInfo = document.createElement('div');
    productInfo.innerHTML = `
      ${product.name} <br>
      <span>Ára: ${formatPrice(product.price)}</span> <br>
      <button data-productid="${product.productId}" onclick="loadProductData(${product.productId})">megnézem</button>
    `;

    // Append product info to product element
    productElement.appendChild(productInfo);

    // Append product element to products container
    productsContainer.appendChild(productElement);
  });
});


  async function loadProductData(productId) {
    try {
      const response = await fetch('./products.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const products = await response.json();
      const product = products.find(p => p.productId == productId);
  
      if (product) {
        localStorage.setItem('product', JSON.stringify(product));
        navigateToPage('./product-page.html');
      } else {
        console.error(`Product not found for ID: ${productId}`);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  
  // DOMContentLoaded event handler
  document.addEventListener('DOMContentLoaded', () => {
    // Select product divs, which contain data-productid
    const productDivs = document.querySelectorAll('.product');
  
    productDivs.forEach(div => {
      div.addEventListener('click', event => {
        const productId = div.getAttribute('data-productid');
  
        if (productId) {
          loadProductData(productId);
        }
      });
    });
  });