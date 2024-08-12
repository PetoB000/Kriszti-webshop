function appendImages(imagePaths) {
  const imageList = document.querySelector('.image-list');
  const fragment = document.createDocumentFragment();

  imagePaths.forEach((path, index) => {
    const img = document.createElement('img');
    img.classList.add('image-item');
    img.id = index + 1;
    img.src = path;
    img.alt = `Image ${index + 1}`;
    const li = document.createElement('li');
    li.appendChild(img);
    fragment.appendChild(li);
  });

  imageList.appendChild(fragment);
}

async function loadGallery() {
  try {
    const response = await fetch('gallery.json');
    return  response.json();
  } catch (error) {
    console.error(`Error loading gallery.json: ${error.message}`);
    return [];
  }
}

const gallery = await loadGallery();
appendImages(gallery);
initSlider();
console.log('sajtos')

document.addEventListener('DOMContentLoaded', () => {
  console.log("sajt")

  const thumbnails = document.getElementsByClassName('.image-item');
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
      modalContent.setAttribute('src', prevImgUrl)
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
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }

      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }

      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });

   // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);