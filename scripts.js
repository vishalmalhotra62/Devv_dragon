$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
        margin: -50,
      },
      600: {
        items: 4,
        margin: -100,
      },
      1000: {
        items: 4,
        // margin: 140,
      },
      1400: {
        items: 4,
        margin: 140,
      },
      1200: {
        items: 4,
        margin: 320,
      },
      1900: {
        items: 4,
        margin: 0,
      },
    },
  });
});
