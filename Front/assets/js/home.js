// show counter
var a = 0;
$(window).scroll(function () {
    var oTop = $(".counter-block").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {
                    duration: 6050,
                    easing: "swing",
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                        //alert('finished');
                    }
                }
            );
        });
        a = 1;
    }
});
var swiper = new Swiper(".Slider1", {
    slidesPerView: 1,
    spaceBetween: 0,
    longSwipes:true,
    longSwipesMs:1200,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  var swiper = new Swiper(".Slider2", {
    slidesPerView: 1,
    spaceBetween: 0,
    longSwipes:true,
    longSwipesMs:1200,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
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
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

    var swiper = new Swiper(".Slider3", {
        slidesPerView: 1,
        spaceBetween: 0,
        longSwipes: true,
        longSwipesMs: 1200,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
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
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });

    /*** Start Hero ***/

    var swiperHero = new Swiper(".swiper-hero-text", {
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      speed:500,
      allowTouchMove: false,
      // loop: true,
      autoplay: {
          delay: 1500,
          disableOnInteraction: false,
      },
  });

    /*** End Hero ***/


  $('.capsule').on("click", function () {
    $('#ca_title, #ca_description, #ca_img').fadeOut(0);
    $(this).addClass('active').siblings().removeClass('active');
    $('#ca_title').delay(200).text($(this).attr('data-title'));
    $('#ca_description').delay(200).text($(this).attr('data-description'));
    $('#ca_img').delay(200).attr('src', $(this).attr('data-img'));
    $('#ca_title, #ca_description, #ca_img').delay(50).fadeIn('fast');
})


/*** Start Show/Hide circular-menu on scroll ***/

$(window).scroll(function () {
  $(window).scrollTop() >= 150 ? $(".circular-menu").addClass("show-icon") : $(".circular-menu").removeClass("show-icon");
});

/*** End Show/Hide circular-menu on scroll ***/
