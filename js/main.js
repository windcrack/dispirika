import openDescr from "./open-descr.js";
import menuOpen from "./menu.js";

const body = document.querySelector('body');
const burger = document.querySelector('.burger-btn');
const menu =  document.querySelector('.nav-items');
const items = document.querySelectorAll('.nav-item')

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

menuOpen(burger, menu);
openDescr(body);

AOS.init();