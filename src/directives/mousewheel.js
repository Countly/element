import normalizeWheel from 'normalize-wheel';

const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
const ctx = '@@mousewheelContext';

const mousewheel = function(element, callback) {
  if (element && element.addEventListener) {
    let bindingFn = function(event) {
      const normalized = normalizeWheel(event);
      callback && callback.apply(this, [event, normalized]);
    };
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', bindingFn);
    element[ctx] = { bindingFn };
  }
};

export default {
  bind(el, binding) {
    mousewheel(el, binding.value);
  },
  unbind(el) {
    if (!el[ctx] || !el[ctx].bindingFn) {
      return;
    }
    el.removeEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', el[ctx].bindingFn);
    delete el[ctx];
  }
};
