document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == "complete") {
    setTimeout(function () {
      document.getElementById("interactive");
      document.getElementById("loader").style.visibility = "hidden";
    }, 1000);
  }
};
$(document).ready(function () {
  (function ($) {
    "use strict";
    var config = {
      reset: false,
      move: "40px",
      mobile: false,
    };
    window.sr = new scrollReveal(config);
  })();
  // video
  $('.play').click(function (e) {
    e.preventDefault();
    var mediaVideo = $("#heroVideo").get(0);
    if (mediaVideo.paused) {
      mediaVideo.play();
      $(this).addClass('playing');
      $(this).removeClass('paused');
    } else {
      mediaVideo.pause();
      $(this).addClass('paused');
      $(this).removeClass('playing');
    }
  });
  // dropdown
  $(function ($) {
    $("ul.navbar-nav li.dropdown-m").hover(
      function () {
        $(this)
          .find(".dropdown-menu")
          .first()
          .stop(true, true)
          .delay(250)
          .slideDown();
      },
      function () {
        $(this)
          .find(".dropdown-menu")
          .first()
          .stop(true, true)
          .delay(100)
          .slideUp();
      }
    );
    document.addEventListener("touchstart", function () {}, true);
  });
  //gallery
  $('.image-link').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function (openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }

  });
  $(".popup-youtube1").magnificPopup({
    disableOn: 320,
    type: "iframe",
    mainClass: "mfp-with-zoom",
    removalDelay: 160,
    preloader: true,
    fixedContentPos: false,
    gallery: {
      enabled: true
    },
  });
  var lanopt = $(".account-deta");

  lanopt.on("show.bs.collapse", ".collapse", function () {
    lanopt.find(".collapse.in").collapse("hide");
  });
  var swiper = new Swiper(".Slider4", {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    slidesPerView: 1,
    spaceBetween: 0,
    longSwipes: true,
    longSwipesMs: 1200,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });
  var contH = $('.serv-d .conta').outerHeight();
  $('.Slider4 .swiper-pagination').css('height', contH);
});




// scroll up
// Get the button

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {SscrollFunction()};

function SscrollFunction() {
  let mybutton = document.getElementById("ScrollupBTN");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollFunction() {
  var a = $(window).scrollTop();
  o < a ? $(".header").addClass("affix") : $(".header").removeClass("affix")
  }
  var o = $(".header").offset().top;
  scrollFunction()

$(window).scroll(function () {
  scrollFunction()
});
