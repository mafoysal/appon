//banner-part slider js

$(".banner-slider").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
});

//banner-part slider end

//screen-part slider js

$(".screen-slider").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
});

//screen-part slider end

//video-part js
$(".venobox").venobox();

//video-part js end

//feedback-part text slider js
$(".fb-text").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  asNavFor: ".fb-img",
});

//feature part img slider
$(".fb-img").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  asNavFor: ".fb-text",
  centerMode: true,
  centerPadding: "0",
});

//feedback-part js end
