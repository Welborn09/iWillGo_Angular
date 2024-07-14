document.addEventListener('DOMContentLoaded', (event) => {
  console.log('*** carousel.js ***');
  var myCarousel = document.querySelector('#carouselExampleSlidesOnly');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 4000,
    wrap: true
  });
});
