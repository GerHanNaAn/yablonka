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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8vIE1lbnVcclxuLy8gY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXJfX3RvZ2xlXCIpO1xyXG4vLyBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVNZW51XCIpO1xyXG4vLyBjb25zdCBjcm9zcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTWVudUNyb3NzXCIpO1xyXG4vLyBjb25zdCBiYWNrZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFja2dcIik7XHJcbi8vIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbi8vIGZ1bmN0aW9uIGJ1cmdlck1lbnUoZSkge1xyXG4vLyAgIGlmIChlLnRhcmdldCA9PT0gYnVyZ2VyKSB7XHJcbi8vICAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnUtaWNvbi1hY3RpdmVcIik7XHJcbi8vICAgfVxyXG4vLyAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm1vYmlsZS1tZW51X2FjdGl2ZVwiKTtcclxuLy8gICBiYWNrZy5jbGFzc0xpc3QudG9nZ2xlKFwiYmFja2dfYWN0aXZlXCIpO1xyXG4vLyAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImxvY2tcIik7XHJcbi8vICAgZnVuY3Rpb24gRGV0ZWN0TW9iaWxlKCkge1xyXG4vLyAgICAgbGV0IHVhZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuLy8gICAgIGlmICh1YWdlbnQuc2VhcmNoKFwibW9iaWxlXCIpID09IC0xKSBib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlU2NybFwiKTtcclxuLy8gICB9XHJcbi8vICAgRGV0ZWN0TW9iaWxlKCk7XHJcbi8vIH1cclxuXHJcbi8vIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnVyZ2VyTWVudSk7XHJcbi8vIGNyb3NzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidXJnZXJNZW51KTtcclxuLy8gYmFja2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1cmdlck1lbnUpO1xyXG5cclxuLy8gLy8gT3dsQ2Fyb3VzZWwyXHJcblxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbi8vICAgJChcIi5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4vLyAgICAgaXRlbXM6IDEsXHJcbi8vICAgICBsb29wOiB0cnVlLFxyXG4vLyAgICAgZnJlZURyYWc6IHRydWUsXHJcbi8vICAgICAvLyBhdXRvcGxheTogdHJ1ZSxcclxuLy8gICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuLy8gICAgIGZyZWVEcmFnOiBmYWxzZSxcclxuLy8gICAgIG5hdjogdHJ1ZSxcclxuLy8gICB9KTtcclxuLy8gfSk7XHJcblxyXG4vLyAvL1NsaWRlciBmb3IgcHJvZHVjdCBnYWxsZXJ5XHJcblxyXG4vLyAvKiDQmNC90LTQtdC60YEg0YHQu9Cw0LnQtNCwINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOICovXHJcbi8vIHZhciBzbGlkZUluZGV4ID0gMTtcclxuLy8gc2hvd1NsaWRlcyhzbGlkZUluZGV4KTtcclxuLy8gLyog0KTRg9C90LrRhtC40Y8g0YPQstC10LvQuNGH0LjQstCw0LXRgiDQuNC90LTQtdC60YEg0L3QsCAxLCDQv9C+0LrQsNC30YvQstCw0LXRgiDRgdC70LXQtNGD0Y7RidC5INGB0LvQsNC50LQqL1xyXG4vLyBmdW5jdGlvbiBwbHVzU2xpZGUoKSB7XHJcbi8vICAgc2hvd1NsaWRlcygoc2xpZGVJbmRleCArPSAxKSk7XHJcbi8vIH1cclxuLy8gLyog0KTRg9C90LrRhtC40Y8g0YPQvNC10L3RjNGI0Y/QtdGCINC40L3QtNC10LrRgSDQvdCwIDEsINC/0L7QutCw0LfRi9Cy0LDQtdGCINC/0YDQtdC00YvQtNGD0YnQuNC5INGB0LvQsNC50LQqL1xyXG4vLyBmdW5jdGlvbiBtaW51c1NsaWRlKCkge1xyXG4vLyAgIHNob3dTbGlkZXMoKHNsaWRlSW5kZXggLT0gMSkpO1xyXG4vLyB9XHJcbi8vIC8qINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCINGC0LXQutGD0YnQuNC5INGB0LvQsNC50LQgKi9cclxuLy8gZnVuY3Rpb24gY3VycmVudFNsaWRlKG4pIHtcclxuLy8gICBzaG93U2xpZGVzKChzbGlkZUluZGV4ID0gbikpO1xyXG4vLyB9XHJcbi8vIC8qINCe0YHQvdC+0LLQvdCw0Y8g0YTRg9C90LrRhtC40Y8g0YHQu9Cw0LnQtNC10YDQsCAqL1xyXG4vLyBmdW5jdGlvbiBzaG93U2xpZGVzKG4pIHtcclxuLy8gICB2YXIgaTtcclxuLy8gICB2YXIgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIml0ZW1cIik7XHJcbi8vICAgdmFyIGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2xpZGVyLWRvdHNfaXRlbVwiKTtcclxuLy8gICBpZiAobiA+IHNsaWRlcy5sZW5ndGgpIHtcclxuLy8gICAgIHNsaWRlSW5kZXggPSAxO1xyXG4vLyAgIH1cclxuLy8gICBpZiAobiA8IDEpIHtcclxuLy8gICAgIHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoO1xyXG4vLyAgIH1cclxuLy8gICBmb3IgKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICBzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4vLyAgIH1cclxuLy8gICBmb3IgKGkgPSAwOyBpIDwgZG90cy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgZG90c1tpXS5jbGFzc05hbWUgPSBkb3RzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcclxuLy8gICB9XHJcbi8vICAgc2xpZGVzW3NsaWRlSW5kZXggLSAxXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4vLyAgIGRvdHNbc2xpZGVJbmRleCAtIDFdLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcclxuLy8gfSJdLCJmaWxlIjoibWFpbi5qcyJ9
