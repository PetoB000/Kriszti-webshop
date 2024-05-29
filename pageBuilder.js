

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}



document.addEventListener('DOMContentLoaded', () => {
    const categoryName = document.querySelector('.container > span');
    const category = JSON.parse(localStorage.getItem('category'));
    categoryName.innerHTML = category.name;

    const productsDiv = document.querySelector('.products');

    category.products.forEach(product => {
        const productDiv = document.createElement('div');
        const img = document.createElement('img');
        img.src = product.thumbnail;
        img.alt = product.name;
        img.classList.add("product_img");
        if (product.imgClasses !== "") {
            img.classList.add(product.imgClasses);
        }
        productDiv.className = 'product';
        if (product.classes !== "") {
            productDiv.classList.add(product.classes);
        }
        productDiv.appendChild(img)
        productDiv.innerHTML += `
            ${product.name} <br> <span>Ára: ${product.price}</span> <br>
            <button data-productid="${product.productId}" onclick="loadProductData(this)">megnézem</button>
            `        
        console.log(product.productId)
        productsDiv.appendChild(productDiv);

    });
});


document.addEventListener('DOMContentLoaded', () => {
    const imgContainer = document.querySelector('.picture_container')
    const shownImg = document.querySelector('.shown_picture img');
    const thumbnailPictures = document.querySelector('.thumbnail_pictures');
    const nameDiv = document.querySelector('.product_name'); 
    const productDescription = document.querySelector('.product_description');
    const product = JSON.parse(localStorage.getItem('product'));
    shownImg.setAttribute('src', product.shownImg);
    nameDiv.innerText = product.name;
    if ("" != product.thumbnails) {
        product.thumbnails.forEach(thumbnail => {
            const img = document.createElement('img');
            img.src = thumbnail;
            thumbnailPictures.appendChild(img);
        })
    } else {
        imgContainer.classList.add("no_thumbnail")
    }
    productDescription.innerHTML = `
    ${product.description}                     <span>Fontos!</span> <br> <br>
    Az epoxy terméket ne tedd ki közvetlen forróságnak, napsütésnek és extrém hidegnek sem, mert ezek mind misőségromláshoz vezethetnek. <br>
    Tisztítás: nedves, mosószeres ruhával <br><br>
    <div class="product_price">Ára:${formatPrice(product.price)}Ft <div id="addToCartButton" class="to_basket product-button" 
        data-product-id="${product.productId}" data-product-name="${product.name}" 
        data-product-image="${product.dataImage}" data-product-price="${product.price}">Kosárba teszem</div>
    </div>
    `
});
