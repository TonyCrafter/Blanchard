const container = document.querySelector(".header-hero__descr")
      const swiper = new Swiper('.swiper-hero', {
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 2000,
        autoplay: {
          delay: 5000
        },
        effect: "fade",
        allowTouchMove: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: '.swiper-bullet-pagination',
          type: 'bullets',
          clickable: true
        }
      })