function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
  console.log('navigate to')
}


// GALÉRIA LAPOZGATÓ

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let counter = 0;
const slideWidth = 33;

nextBtn.addEventListener('click', () => {
  if (counter < 5) {
    counter++;
    carousel.style.transform = `translateX(-${counter * slideWidth}%)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    carousel.style.transform = `translateX(-${counter * slideWidth}%)`;
  }
});


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
