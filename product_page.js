document.addEventListener('DOMContentLoaded', function() {
  const thumbnails = document.querySelectorAll('.thumbnail_pictures img');
  const shownPicture = document.querySelector('.shown_picture img');

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
          const imgUrl = this.getAttribute('src');
          shownPicture.setAttribute('src', imgUrl);
      });
  });
});
  



