function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
}




// GALÉRIA LAPOZGATÓ







  // GALÉRIA NAGYÍTÓ


document.addEventListener('DOMContentLoaded', function() {
  const thumbnails = document.querySelectorAll('.carousel-item');
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-content');

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
          const imgUrl = this.getAttribute('src');
          modalContent.setAttribute('src', imgUrl);
          modal.style.display = 'block';
      });
  });

  modal.addEventListener('click', function() {
      modal.style.display = 'none';
  });
});


// TERMÉK OLDALI KÉPEK


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

const menu = document.querySelector(".menu");
const hamburgerImg = document.querySelector(".hamburger img");
const menuLinks = document.querySelectorAll(".main_link");
const dropdown = document.querySelector(".dropdown");

let isMenuOpen = false;

hamburgerImg.parentNode.addEventListener('click', function() {
  isMenuOpen =!isMenuOpen;
  menuLinks.forEach(menuLink => {
    menuLink.style.display = isMenuOpen? "flex" : "none";
  });
  hamburgerImg.src = isMenuOpen? './img/icons/remove.png' : './img/icons/menu-circle-3-512.png';
  console.log(isMenuOpen? "open" : "closed");

  dropdown.style.display = isMenuOpen? "flex" : "none";
  menu.style.height = isMenuOpen? "333px" : "110px";
});



const dropdownContent = document.querySelector('.dropdown-content');

let isdropdownOpen = false;

dropdown.addEventListener('click', function() {
  isdropdownOpen = !isdropdownOpen;
  dropdownContent.style.display = isdropdownOpen ? 'block' : 'none';
});

/* const dropDown = document.querySelectorAll('.main_link')
const screenWidth = window.innerWidth;
console.log(dropDown)
if (screenWidth > 1000) {
  dropDown[4].addEventListener('click', function() {
    navigateToPage('index.html#category-section')
  })
} */