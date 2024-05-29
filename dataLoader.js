
function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}


async function loadCategoryData(button) {
    const categoryId = button.dataset.categoryid;
    try {
        const response = await fetch('./categories.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const categories = await response.json();
        const category = categories.find(c => c.categoryId == categoryId);     
        if (category) {

            localStorage.setItem('category', JSON.stringify(category));

            navigateToPage(`./category-page.html`);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}


async function loadProductData(button) {
    const productId = button.dataset.productid;
    try {
        const response = await fetch('./products.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const products = await response.json();
        const product = products.find(p => p.productId == productId);     
        if (product) {

            localStorage.setItem('product', JSON.stringify(product));

            navigateToPage(`./product-page.html`);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}




