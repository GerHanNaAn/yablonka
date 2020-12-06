// // Menu
// const burger = document.querySelector("#navbar__togle");
// const mobileMenu = document.querySelector("#mobileMenu");
// const cross = document.querySelector("#mobileMenuCross");
// const backg = document.querySelector("#backg");
// const body = document.querySelector("body");

// function burgerMenu(e) {
//   if (e.target === burger) {
//     burger.classList.toggle("menu-icon-active");
//   }
//   mobileMenu.classList.toggle("mobile-menu_active");
//   backg.classList.toggle("backg_active");
//   body.classList.toggle("lock");
//   function DetectMobile() {
//     let uagent = navigator.userAgent.toLowerCase();
//     if (uagent.search("mobile") == -1) body.classList.toggle("hideScrl");
//   }
//   DetectMobile();
// }

// burger.addEventListener("click", burgerMenu);
// cross.addEventListener("click", burgerMenu);
// backg.addEventListener("click", burgerMenu);

// // OwlCarousel2

// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     items: 1,
//     loop: true,
//     freeDrag: true,
//     // autoplay: true,
//     autoplayHoverPause: true,
//     freeDrag: false,
//     nav: true,
//   });
// });

// //Slider for product gallery

// /* Индекс слайда по умолчанию */
// var slideIndex = 1;
// showSlides(slideIndex);
// /* Функция увеличивает индекс на 1, показывает следующй слайд*/
// function plusSlide() {
//   showSlides((slideIndex += 1));
// }
// /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function minusSlide() {
//   showSlides((slideIndex -= 1));
// }
// /* Устанавливает текущий слайд */
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }
// /* Основная функция слайдера */
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("item");
//   var dots = document.getElementsByClassName("slider-dots_item");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }
