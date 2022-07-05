"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function selectForm(elem, block, seconBlock) {
  if (body.classList.contains(elem) || body.classList.contains(block) || body.classList.contains(seconBlock)) {
    elem.addEventListener('click', function () {
      if (block.classList.contains('hide')) {
        block.classList.remove('hide');
      }

      if (!seconBlock.classList.contains('hide')) {
        seconBlock.classList.add('hide');
      }
    });
  }
}

var _default = selectForm;
exports["default"] = _default;
//# sourceMappingURL=tabs.dev.js.map
