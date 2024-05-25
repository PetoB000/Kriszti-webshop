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
  hamburgerImg.src = isMenuOpen? 'https://krisztiepoxy.com/img/icons/remove.png' : 'https://krisztiepoxy.com/img/icons/menu-circle-3-512.png';


  dropdown.style.display = isMenuOpen? "flex" : "none";
  menu.style.height = isMenuOpen? "380px" : "150px";
});

