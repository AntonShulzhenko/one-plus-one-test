$('.calendar').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  infinite: false,
  speed: 200,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        slidesToShow: 4
      }
    }
  ]
});
