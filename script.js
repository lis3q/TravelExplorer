// SwiperJs
const swiper = new Swiper('.swiper', {
    speed: 500,
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 60,
  
    pagination: {
      el: '.swiper-pagination-unique',
      clickable: true
    },
  
    navigation: {
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 60
      }
    }
  
});

// Mobile navbar
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const navbar = document.querySelector("header nav");

openMenuBtn.addEventListener("click", () => {
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "block"
    navbar.classList.add("active");
})

closeMenuBtn.addEventListener("click", () => {
    openMenuBtn.style.display = "block";
    closeMenuBtn.style.display = "none"
    navbar.classList.remove("active");
})