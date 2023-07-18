
function toggleInfo(button) {
    var customText = button.previousElementSibling;
    var arrowIcon = button.querySelector('.arrow-icon');

    if (customText.style.display === 'none') {
        customText.style.display = 'block';
        arrowIcon.textContent = '<';
    } else {
        customText.style.display = 'none';
        arrowIcon.textContent = '>';
    }
}
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }

});
var swiper = new Swiper(".coming-container", {
    direction: "horizontal",
    loop: false,
    speed: 500,
    visibilityFullFit: true,
    autoResize: false,
    spaceBetween: 100,
    // effect: "coverflow",
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
});
var swiper2 = new Swiper(".coming-container2", {
    direction: "horizontal",
    loop: false,
    speed: 500,
    visibilityFullFit: true,
    autoResize: false,
    spaceBetween: 100,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
});



