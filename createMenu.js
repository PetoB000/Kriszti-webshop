let menuContainer = document.querySelector('.menu-container');
// Create the menu container
menu = document.createElement('div');
menu.className = 'menu';

// Create the logo
let logo = document.createElement('img');
logo.src = './img/logo3.png';
logo.alt = '';
logo.className = 'logo';
logo.onclick = () => navigateToPage('./index.html');
menu.appendChild(logo);

// Create the main links
let mainLinks = [
  { text: 'Főoldal', url: './index.html' },
  { text: 'Rólam', url: './about.html' },
  { text: 'Vásárlás menete', url: './vasarlas_menete.html' },
  { text: 'Kapcsolat', url: './contact.html' },
];

mainLinks.forEach((link) => {
  let mainLink = document.createElement('div');
  mainLink.className = 'main_link pulse';
  mainLink.textContent = link.text;
  mainLink.onclick = () => navigateToPage(link.url);
  menu.appendChild(mainLink);
});

// Create the dropdown
dropdown = document.createElement('div');
dropdown.className = 'dropdown';
menu.appendChild(dropdown);

let dropdownLink = document.createElement('div');
dropdownLink.className = 'main_link pulse';
dropdownLink.textContent = 'Termékeim';
let dropdownIcon = document.createElement('img');
dropdownIcon.src = './img/icons/down-arrow(2).svg';
dropdownIcon.alt = '';
dropdownIcon.className = 'icon';
dropdownLink.appendChild(dropdownIcon);
dropdown.appendChild(dropdownLink);

let dropdownContent = document.createElement('ul');
dropdownContent.className = 'dropdown-content';
dropdown.appendChild(dropdownContent);

// Function to create dropdown items
function createMenuDropdown(categories) {
  categories.forEach((category, index) => {
    const dropdownItem = document.createElement('li');
    dropdownItem.textContent = category.name; // Assuming category data has a 'name' field
    dropdownItem.dataset.categoryid = category.categoryId; // Assuming category data has an 'id' field
    dropdownItem.onclick = () => loadCategoryData(category.categoryId);

    // Set animation delay dynamically based on the item's position
    dropdownItem.style.animationDelay = `${index * 0.2}s`;

    dropdownContent.appendChild(dropdownItem);
  });
}


// Create the basket
let basket = document.createElement('div');
basket.className = 'basket icon-cart';
menu.appendChild(basket);

let basketIcon = document.createElement('img');
basketIcon.src = './img/icons/noun-basket-6865168.svg';
basketIcon.alt = '';
basket.appendChild(basketIcon);

let basketCount = document.createElement('div');
basketCount.className = 'basket-count';
basket.appendChild(basketCount);

// Create the hamburger
let hamburger = document.createElement('div');
hamburger.className = 'hamburger';
menu.appendChild(hamburger);

let hamburgerIcon = document.createElement('img');
hamburgerIcon.src = './img/icons/menu-circle-3-512.svg';
hamburgerIcon.alt = '';
hamburger.appendChild(hamburgerIcon);

document.body.appendChild(menu);
menuContainer.appendChild(menu);
