"use strict";

var _openDescr = _interopRequireDefault(require("./open-descr.js"));

var _menu = _interopRequireDefault(require("./menu.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var body = document.querySelector('body');
var burger = document.querySelector('.burger-btn');
var menu = document.querySelector('.nav-items');
var items = document.querySelectorAll('.nav-item');
var swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
(0, _menu["default"])(burger, menu);
(0, _openDescr["default"])(body);
AOS.init();
//# sourceMappingURL=main.dev.js.map
