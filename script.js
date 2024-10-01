new Swiper('.card-wrapper', {
    loop: true,

    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0:{
            slidesPreView: 1
        },
        786:{
            slidesPreView: 2
        },
        1024:{
            slidesPreView: 3
        },
    }
  });

  var mySwiper = new Swiper(".mySwiper", {
    loop: Infinity,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 10,
        stretch: -200,
        depth: 600,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPreView: 1
        },
        786: {
            slidesPreView: 2
        },
        1024: {
            slidesPreView: 3
        },
    }
});
