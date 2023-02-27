let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () => {
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   grabCursor: true,
   loop: true,
   centeredSlides: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".food-slider", {
   grabCursor: true,
   loop: true,
   centeredSlides: true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      700: {
         slidesPerView: 2,
      },
      1000: {
         slidesPerView: 3,
      },
   },
});

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food => {
   food.onclick = () => {
      previewContainer.style.display = 'flex';
      let name = food.getAttribute('data-name');
      previewBox.forEach(preveiw => {
         let target = preveiw.getAttribute('data-target');
         if (name == target) {
            preveiw.classList.add('active');
         }
      });
   };
});

previewContainer.querySelector('#close-preview').onclick = () => {
   previewContainer.style.display = 'none';
   previewBox.forEach(close => {
      close.classList.remove('active');
   });
};

var swiper = new Swiper(".menu-slider", {
   grabCursor: true,
   loop: true,
   autoHeight: true,
   centeredSlides: true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});

var swiper = new Swiper(".blogs-slider", {
   grabCursor: true,
   loop: true,
   centeredSlides: true,
   autoHeight: true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      700: {
         slidesPerView: 2,
      },
      1000: {
         slidesPerView: 3,
      },
   },
});

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
   modal_container.classList.add('show');
});


close.addEventListener('click', () => {
   modal_container.classList.remove('show');
});

function initModal(openButton, modalContainer, closeButton) {
   openButton.addEventListener('click', () => {
      modalContainer.classList.add('show');
   });

   closeButton.addEventListener('click', () => {
      modalContainer.classList.remove('show');
   });
}

const open1 = document.getElementById('open1');
const modal_container1 = document.getElementById('modal_container1');
const close1 = document.getElementById('close1');

initModal(open1, modal_container1, close1);


const open2 = document.getElementById('open2');
const modal_container2 = document.getElementById('modal_container2');
const close2 = document.getElementById('close2');

initModal(open2, modal_container2, close2);


const open3 = document.getElementById('open3');
const modal_container3 = document.getElementById('modal_container3');
const close3 = document.getElementById('close3');

initModal(open3, modal_container3, close3);

const open4 = document.getElementById('open4');
const modal_container4 = document.getElementById('modal_container4');
const close4 = document.getElementById('close4');

initModal(open4, modal_container4, close4);

const open5 = document.getElementById('open5');
const modal_container5 = document.getElementById('modal_container5');
const close5 = document.getElementById('close5');

initModal(open5, modal_container5, close5);

const open6 = document.getElementById('open6');
const modal_container6 = document.getElementById('modal_container6');
const close6 = document.getElementById('close6');

initModal(open6, modal_container6, close6);
