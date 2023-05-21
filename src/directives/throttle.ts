/*
  Requirement: To prevent the button from being clicked multiple times in a short period of time, use the throttling function to limit only one click within the specified time.

  Ideas:
    1. For the first click, the method is called immediately and the button is disabled, and the button is activated again after the delay is over
    2. Bind the method that needs to be triggered to the instruction
  
  Use: Add v-throttle and callback function to Dom
  <button v-throttle="debounceClick">Throttle submission</button>
*/
import type { Directive, DirectiveBinding } from 'vue';
interface ElType extends HTMLElement {
  __handleClick__: () => any;
  disabled: boolean;
}
const throttle: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    if (typeof binding.value !== 'function') {
      throw 'callback must be a function';
    }
    let timer: NodeJS.Timeout | null = null;
    el.__handleClick__ = function () {
      if (timer) {
        clearTimeout(timer);
      }
      if (!el.disabled) {
        el.disabled = true;
        binding.value();
        timer = setTimeout(() => {
          el.disabled = false;
        }, 1000);
      }
    };
    el.addEventListener('click', el.__handleClick__);
  },
  beforeUnmount(el: ElType) {
    el.removeEventListener('click', el.__handleClick__);
  },
};

export default throttle;
