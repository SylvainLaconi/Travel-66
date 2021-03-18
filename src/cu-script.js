const carouselImages = document.querySelector('.carousel-images');
const carouselButtons = document.querySelectorAll('.carousel-button');
const numberOfImages = document.querySelectorAll('.carousel-images img').length;

let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
    button.addEventListener('click', (event) => {
     if (event.target.id === 'previous') {
        if (imageIndex !== 1) {
          imageIndex--;
          translateX += 900;
        }
      } else {
        if (imageIndex !== numberOfImages) {
          imageIndex++;
          translateX -= 900;
        }
      }
      carouselImages.style.transform = `translateX(${translateX}px)`;
    });
  });