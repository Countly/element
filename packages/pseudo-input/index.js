import ElPseudoInput from '../input/src/pseudo-input';

/* istanbul ignore next */
ElPseudoInput.install = function(Vue) {
  Vue.component(ElPseudoInput.name, ElPseudoInput);
};

export default ElPseudoInput;
