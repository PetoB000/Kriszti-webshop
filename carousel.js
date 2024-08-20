function appendImages(imagePaths) {
  const imageList = document.querySelector('.image-list');
  const fragment = document.createDocumentFragment();
  const imagePromises = [];

  imagePaths.forEach((path, index) => {
    const img = document.createElement('img');
    img.classList.add('image-item');
    img.id = index + 1;
    img.src = path;
    img.alt = `Image ${index + 1}`;
    const li = document.createElement('li');
    li.appendChild(img);
    fragment.appendChild(li);

    // Ensure images are fully loaded before continuing
    const imgPromise = new Promise((resolve) => {
      img.onload = resolve;
    });
    imagePromises.push(imgPromise);
  });

  imageList.appendChild(fragment);

  // Wait for all images to load before initializing the slider
  Promise.all(imagePromises).then(() => {
    initSlider();
  });
}

async function loadGallery() {
  try {
    const response = await fetch('gallery.json');
    return await response.json();
  } catch (error) {
    console.error(`Error loading gallery.json: ${error.message}`);
    return [];
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const gallery = await loadGallery();
  appendImages(gallery);

  const thumbnails = document.querySelectorAll('.image-item');
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-image');
  const closeButton = document.querySelector('.close-button');
  const nextButton = document.querySelector('.next-button');
  const prevButton = document.querySelector('.prev-button');
  let imgId = 0;

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
          const imgUrl = this.getAttribute('src');
          imgId = this.getAttribute('id');
          modalContent.setAttribute('src', imgUrl);
          modal.style.display = 'flex';
      });
  });

  closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  nextButton.addEventListener('click', function() {
    nextImgId = parseInt(imgId) + 1;
    let nextImgElement = document.getElementById(nextImgId);

    if (nextImgElement) {
      let nextImgUrl = nextImgElement.getAttribute('src');
      modalContent.setAttribute('src', nextImgUrl);
      imgId = nextImgId;
    }
  });

  prevButton.addEventListener('click', function() {
    prevImgId = parseInt(imgId) - 1;
    let prevImgElement = document.getElementById(prevImgId);

    if (prevImgElement) {
      let prevImgUrl = prevImgElement.getAttribute('src');
      modalContent.setAttribute('src', prevImgUrl);
      imgId = prevImgId;
    }
  });
});

const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".slider-container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }

      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });

  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });

  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }

  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });

  handleSlideButtons();
  updateScrollThumbPosition();
}

// Ensure slider is initialized on resize and full page load
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
