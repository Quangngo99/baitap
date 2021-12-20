$(document).ready(function () {
  $(".slider").slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow:
      '<div class="slick-prev"><i class="icon-chevron-left slick-arrow" aria-hidden="true"></i></div>',
    nextArrow:
      '<div class="slick-next"><i class="icon-chevron-right slick-arrow" aria-hidden="true"></i></div>',
    dots: true,
  });
});

$(document).ready(function () {
  $(".product-slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow:
      '<div class="slick-prev"><i class="icon-chevron-left slick-arrow" aria-hidden="true"></i></div>',
    nextArrow:
      '<div class="slick-next"><i class="icon-chevron-right slick-arrow" aria-hidden="true"></i></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});

// heart- slider
$(document).ready(function () {
  $(".slider-heart").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow:
      '<div class="slick-prev"><i class="icon-chevron-left slick-arrow" aria-hidden="true"></i></div>',
    nextArrow:
      '<div class="slick-next"><i class="icon-chevron-right slick-arrow" aria-hidden="true"></i></div>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          adaptiveHeight: true,
        },
      },
    ],
  });
});

const heartClose = document.querySelector(".heart-close i");
const heart = document.querySelector(".heart-icon");

heart.onclick = function () {
  document.querySelector(".heart-content").style.visibility = "initial";
  document.querySelector(".heart-overlay").style.display = "block";
  document.querySelector(".heart-content .slick-track").style.width = "100%";
  document.querySelector(".heart-content .slick-track").style.transform =
    "translate3d(0px, 0px, 0px)";
};

heartClose.onclick = function () {
  document.querySelector(".heart-content").style.visibility = "hidden";
  document.querySelector(".heart-overlay").style.display = "none";
};

// countdown
var fuT = new Date("jan 1,2022 00:00:00").getTime();
setInterval(function () {
  var now = new Date().getTime();
  var D = fuT - now;
  var days = Math.floor(D / (1000 * 60 * 60 * 24));
  var hours = Math.floor(D / (1000 * 60 * 60));
  var minutes = Math.floor(D / (1000 * 60));
  var seconds = Math.floor(D / 1000);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);

// search
const search = document.querySelector(".search-icon");
const closeSearch = document.querySelector(".close i");

search.onclick = function () {
  document.querySelector(".content-search").style.transform = "translateY(0)";
  document.querySelector(".content-search").style.opacity = "1";
  document.querySelector(".nav-icon").classList.add("overlay");
};

closeSearch.onclick = function () {
  document.querySelector(".content-search").style.transform =
    "translateY(-100%)";
  document.querySelector(".content-search").style.opacity = "0";
  document.querySelector(".nav-icon").classList.remove("overlay");
};

// bag

const bag = document.querySelector(".bag-icon");
const bagClose = document.querySelector(".bag-close");

bag.onclick = function () {
  document.querySelector(".bag-wrap").style.transform = "translateX(0)";
  document.querySelector(".bag-content").classList.add("overlay");
};
bagClose.onclick = function () {
  document.querySelector(".bag-wrap").style.transform = "translateX(110%)";
  document.querySelector(".bag-content").classList.remove("overlay");
};

// login
const login = document.querySelector(".login");
login.onclick = function () {
  document.querySelector(".form-login").style.display = "block";
  document.querySelector(".form-register").style.display = "none";
  document.querySelector(".register").classList.remove("active-button");
  login.classList.add("active-button");
};

const register = document.querySelector(".register");
register.onclick = function () {
  document.querySelector(".form-register").style.display = "block";
  document.querySelector(".form-login").style.display = "none";
  document.querySelector(".login").classList.remove("active-button");
  register.classList.add("active-button");
};

// user

const user = document.querySelector(".user-icon");
user.onclick = function () {
  document.querySelector(".form-user").style.display = "block";
  document.querySelector(".form-user").classList.add("overlay");
};

const closeUser = document.querySelector(".form-close");
closeUser.onclick = function () {
  document.querySelector(".form-user").style.display = "none";
  document.querySelector(".form-user").classList.remove("overlay");
};

// nav-mobile

const navMobile = document.querySelector(".nav-mobile");

navMobile.onclick = function () {
  document.querySelector(".navbar-nav").style.visibility = "visible";
  document.querySelector(".navbar-nav").style.opacity = "1";
  document.querySelector(".navbar-nav").style.top = "100%";
  document.querySelector(".header").classList.add("overlay");
  document.querySelector(".navmb-close").style.display = "block";
};

const close = document.querySelector(".navmb-close");
close.onclick = function () {
  document.querySelector(".navbar-nav").style.visibility = "hidden";
  document.querySelector(".navbar-nav").style.opacity = "0";
  document.querySelector(".navbar-nav").style.top = "-100%";
  document.querySelector(".header").classList.remove("overlay");
  document.querySelector(".navmb-close").style.display = "none";
};

// footer mb

jQuery.fn.extend({
  setMenu: function () {
    return this.each(function () {
      const containermenu = $(this);

      const itemmenu = containermenu.find(".iconfooter");
      itemmenu.click(function () {
        const submenuitem = containermenu.find(".footer-item-container");
        submenuitem.slideToggle(500);
        const iconitem = containermenu.find(".footer-item-title i");
        iconitem.css("transform", "rotateZ(180deg)");
      });
      if ($(document).width() < 485) {
        $(document).click(function (e) {
          if (
            !containermenu.is(e.target) &&
            containermenu.has(e.target).length === 0
          ) {
            const isopened = containermenu
              .find(".footer-item-container")
              .css("display");
            if (isopened == "block") {
              containermenu.find(".footer-item-container").slideToggle(500);
              const iconitem = containermenu.find(".footer-item-title i");
              iconitem.css("transform", "rotateZ(0deg)");
            }
          }
        });
      }
    });
  },
});

$(".content-footer-wrap").setMenu();
