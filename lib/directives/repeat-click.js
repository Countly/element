'use strict';

exports.__esModule = true;

var _dom = require('element-ui/lib/utils/dom');

var ctx = '@@repeatClickContext';

exports.default = {
  bind: function bind(el, binding, vnode) {
    var interval = null;
    var startTime = void 0;
    var handler = function handler() {
      return vnode.context[binding.expression].apply();
    };
    var clear = function clear() {
      if (Date.now() - startTime < 100) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };

    var bindingFn = function bindingFn(e) {
      if (e.button !== 0) return;
      startTime = Date.now();
      (0, _dom.once)(document, 'mouseup', clear);
      clearInterval(interval);
      interval = setInterval(handler, 100);
    };

    (0, _dom.on)(el, 'mousedown', bindingFn);
    el[ctx] = { bindingFn: bindingFn };
  },
  unbind: function unbind(el) {
    if (!el[ctx] || !el[ctx].bindingFn) {
      return;
    }
    (0, _dom.off)(el, 'mousedown', el[ctx].bindingFn);
    delete el[ctx];
  }
};