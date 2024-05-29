const menu = document.querySelector(".menu");
const hamburgerImg = document.querySelector(".hamburger img");
const menuLinks = document.querySelectorAll(".main_link");
const dropdown = document.querySelector(".dropdown");

let isMenuOpen = false;

hamburgerImg.parentNode.addEventListener('click', function() {
  isMenuOpen =!isMenuOpen;
  menuLinks.forEach((menuLink, index) => {
    if (isMenuOpen) {
      menuLink.style.animationDelay = `${index * 0.4}s`; // Add delay for each item
      menuLink.classList.add('visible');
    } else {
      menuLink.classList.remove('visible');
    }
    menuLink.style.display = isMenuOpen? "flex" : "none";

  });
  hamburgerImg.src = isMenuOpen? './img/icons/remove(1).svg' : './img/icons/menu-circle-3-512.svg';


  dropdown.style.display = isMenuOpen? "flex" : "none";
  menu.style.height = isMenuOpen? "380px" : "150px";
});

