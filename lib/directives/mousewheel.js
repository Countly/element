'use strict';

exports.__esModule = true;

var _normalizeWheel = require('normalize-wheel');

var _normalizeWheel2 = _interopRequireDefault(_normalizeWheel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var ctx = '@@mousewheelContext';

var mousewheel = function mousewheel(element, callback) {
  if (element && element.addEventListener) {
    var bindingFn = function bindingFn(event) {
      var normalized = (0, _normalizeWheel2.default)(event);
      callback && callback.apply(this, [event, normalized]);
    };
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', bindingFn);
    element[ctx] = { bindingFn: bindingFn };
  }
};

exports.default = {
  bind: function bind(el, binding) {
    mousewheel(el, binding.value);
  },
  unbind: function unbind(el) {
    if (!el[ctx] || !el[ctx].bindingFn) {
      return;
    }
    el.removeEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', el[ctx].bindingFn);
    delete el[ctx];
  }
};