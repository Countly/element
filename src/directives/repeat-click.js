const ctx = '@@repeatClickContext';
import { once, on, off } from 'element-ui/src/utils/dom';
import { isMac } from 'element-ui/src/utils/util';

export default {
  bind(el, binding, vnode) {
    let interval = null;
    let startTime;
    const maxIntervals = isMac() ? 100 : 200;
    const handler = () => vnode.context[binding.expression].apply();
    const clear = () => {
      if (Date.now() - startTime < maxIntervals) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };

    let bindingFn = (e) => {
      if (e.button !== 0) return;
      startTime = Date.now();
      once(document, 'mouseup', clear);
      clearInterval(interval);
      interval = setInterval(handler, maxIntervals);
    };

    on(el, 'mousedown', bindingFn);
    el[ctx] = { bindingFn };
  },
  unbind(el) {
    if (!el[ctx] || !el[ctx].bindingFn) {
      return;
    }
    off(el, 'mousedown', el[ctx].bindingFn);
    delete el[ctx];
  }
};
