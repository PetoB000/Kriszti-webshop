function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
  console.log('navigate to')
}


// GALÉRIA LAPOZGATÓ

document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('.carousel');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const images = document.querySelectorAll('.carousel-item'); // Updated selector
  const numImages = images.length;
  let counter = 0;
  let totalWidth = 0;
  let totalWidthWithMargins = 0;

  console.log("Number of images:", numImages); // Check if images are selected

  // Loop through each image
  images.forEach(function(image) {
      // Add the width of the image to the totalWidth
      totalWidth += image.width;
      
      // Get the computed styles for the image
      let styles = window.getComputedStyle(image);
      
      // Parse the width and margin values as integers (removing "px" units)
      let imageWidth = parseInt(styles.getPropertyValue('width'), 10);
      let marginLeft = parseInt(styles.getPropertyValue('margin-left'), 10);
      let marginRight = parseInt(styles.getPropertyValue('margin-right'), 10);
      
      // Add the width and margin to the totalWidthWithMargins
      totalWidthWithMargins += imageWidth + marginLeft + marginRight;
  });

  console.log("Total width of all images:", totalWidth);
  console.log("Total width of all images including margins:", totalWidthWithMargins);

  const slideWidth = (totalWidthWithMargins / numImages)*4;

  nextBtn.addEventListener('click', () => {
    if (counter < (numImages - 1)) {
      counter++;
      carousel.style.transform = `translateX(-${counter * slideWidth}px)`;
    }
  });

  prevBtn.addEventListener('click', () => {
    if (counter > 0) {
      counter--;
      carousel.style.transform = `translateX(-${counter * slideWidth}px)`;
    }
  });
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
