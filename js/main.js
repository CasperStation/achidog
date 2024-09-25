// HEADER SCROLL
let opacity_bg = $(this).scrollTop() / 500 < 0.7 ? $(this).scrollTop() / 500 : 0.7,
    opacity_border = 1 - $(this).scrollTop() / 100 > 0.12 ? 0.12 : 1 - $(this).scrollTop() / 100,
    header_padding = $(this).scrollTop() > 100 ? $(window).width() > 998 ? 7 : 2 : $(window).width() > 998 ? 25 : 7;
$(".header").css({
    "background": "rgba(41, 29, 52," + opacity_bg + ")",
    "border-color": "rgba(255, 255, 255," + opacity_border + ")",
    "padding": header_padding + "px 0",
});

$(window).on("scroll resize", function () {
    opacity_bg = $(this).scrollTop() / 500 < 0.7 ? $(this).scrollTop() / 500 : 0.7;
    opacity_border = 1 - $(this).scrollTop() / 100 > 0.12 ? 0.12 : 1 - $(this).scrollTop() / 100;
    header_padding = $(this).scrollTop() > 100 ? $(window).width() > 998 ? 7 : 2 : $(window).width() > 998 ? 25 : 7;
    $(".header").css({
        "background": "rgba(41, 29, 52," + opacity_bg + ")",
        "border-color": "rgba(255, 255, 255," + opacity_border + ")",
        "padding": header_padding + "px 0",
    });

    if ($(window).width() > 998) {
        $("body").removeClass("hidden");
    }
});

// BURGER
$(".header__burger").click(function () {
    $("body").toggleClass("hidden");
    $(this).toggleClass("active");
});

// WINDOW SCROLL
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    }, 150, 'linear');
    $(".header__burger").removeClass("active");
    $("body").removeClass("hidden");
});

// SHOW ANIMATION
AOS.init({ once: 'true' });


// SLIDER
let swiperOpts = {
    slidesPerView: 1,
    spaceBetween: 0,
    initialSlide: 0,
    autoHeight: true,
    navigation: {
        nextEl: '.roadmap__slider__next',
        prevEl: '.roadmap__slider__prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        998: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
},
    swiper = new Swiper(".roadmap__swiper", swiperOpts);

let destroy_slider = false;

$(document).ready(function () {
    if ($(window).width() <= 768 && !destroy_slider) {
        swiper.destroy();
        destroy_slider = true;
    } else {
        if (destroy_slider) {
            swiper = new Swiper(".roadmap__swiper", swiperOpts);
            destroy_slider = false;
        }
    }
});

$(window).resize(function () {
    if ($(window).width() <= 768 && !destroy_slider) {
        swiper.destroy();
        destroy_slider = true;
    } else {
        if (destroy_slider) {
            swiper = new Swiper(".roadmap__swiper", swiperOpts);
            destroy_slider = false;
        }
    }
});





// PARALLAX
const banner_parallax = document.querySelectorAll('.banner__parallax');

let y = 0, x = 0, endX = 0, endY = 0

onmousemove = (e) => {
    endX = innerWidth / 2 - e.x
    endY = innerHeight / 2 - e.y
}

function parallax() {
    x += (endX - x) / 20
    y += (endY - y) / 20
    banner_parallax.forEach(item => {
        item.style.transform = `translate(${-x / 30}px, ${-y / 30}px)`
    })
    requestAnimationFrame(parallax)
}

requestAnimationFrame(parallax)


function countdown() {
var countDownDate = new Date("July 12, 2021 19:00 UTC").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "LAUNCHED";
  }
}, 1000);
}

countdown();
