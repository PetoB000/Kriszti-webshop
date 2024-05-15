function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
}





// TERMÉK OLDALI KÉPVÁLASZTÓ

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
  dropdown = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector('.dropdown-content');

  let isdropdownOpen = false;

  dropdown.addEventListener('click', function() {
    isdropdownOpen = !isdropdownOpen;
    dropdownContent.style.display = isdropdownOpen ? 'block' : 'none';
  });
}







