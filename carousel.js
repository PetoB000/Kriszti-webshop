const carousel = document.querySelector('.carousel-inner');
const images = carousel.children;
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let counter = 0;
const slideWidth = images[0].offsetWidth + parseInt(getComputedStyle(images[0]).marginRight);
console.log(slideWidth)
let slidesToShow = 5;
const slidesToScroll = 2;
const screenWidth = window.innerWidth;

if (screenWidth < 661 && screenWidth > 540) {
  slidesToShow = 4;
} else if (screenWidth < 541) {
  slidesToShow = 3;
}
console.log(slidesToShow)


prevButton.addEventListener('click', () => {
  counter -= slidesToScroll;
  if (counter < 0) {
    counter = 0;
  }
  animateCarousel();
});

nextButton.addEventListener('click', () => {
  counter += slidesToScroll;
  if (counter > images.length - slidesToShow) {
    counter = images.length - slidesToShow;
  }
  animateCarousel();
});

function animateCarousel() {
  carousel.style.transform = `translateX(-${counter * slidesToScroll * slideWidth}px)`;
  toggleTransitionClass();
}

function toggleTransitionClass() {
  carousel.classList.add('transition-enabled');
  requestAnimationFrame(() => {
    carousel.classList.remove('transition-enabled');
  });
}


/* document.addEventListener('DOMContentLoaded', function() {
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
}); */
