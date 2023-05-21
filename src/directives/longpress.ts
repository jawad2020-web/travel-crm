/**
 * v-longpress
 * Long press the command, trigger the event when long press
 */
import type { Directive, DirectiveBinding } from 'vue';

const directive: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (typeof binding.value !== 'function') {
      throw 'callback must be a function';
    }
    // define variables
    let pressTimer: any = null;
    // create timer (execute function after 2 seconds)
    const start = (e: any) => {
      if (e.button) {
        if (e.type === 'click' && e.button !== 0) {
          return;
        }
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          handler(e);
        }, 1000);
      }
    };
    // cancel timer
    const cancel = () => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
    };
    // run function
    const handler = (e: MouseEvent | TouchEvent) => {
      binding.value(e);
    };
    // add event listener
    el.addEventListener('mousedown', start);
    el.addEventListener('touchstart', start);
    // cancel timer
    el.addEventListener('click', cancel);
    el.addEventListener('mouseout', cancel);
    el.addEventListener('touchend', cancel);
    el.addEventListener('touchcancel', cancel);
  },
};

export default directive;
