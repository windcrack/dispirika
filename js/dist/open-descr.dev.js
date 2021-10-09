"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function openDescr(body) {
  body.addEventListener("click", function (e) {
    var target = e.target;
    var title = target.classList.contains("individual-descr__text");
    var titleBlock = target.classList.contains('individual-descr__title');
    var titleArrow = target.classList.contains('fas');

    if (title || titleBlock || titleArrow) {
      var details = target.closest(".title-quest").nextElementSibling.querySelector(".individual-descr__sub-text");
      var arrow = target.closest('.title-quest').querySelector('.fa-sort-down');
      details.classList.toggle("hide");
      arrow.classList.toggle('rotate-arrow');
    }
  });
}

var _default = openDescr;
exports["default"] = _default;
//# sourceMappingURL=open-descr.dev.js.map
