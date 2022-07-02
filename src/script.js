$(".slider").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6900,
  infinite: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769, //モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 426, //モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1.5, //スライドを画面に1.5枚見せる
      },
    },
  ],
});

