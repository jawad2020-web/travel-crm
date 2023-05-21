/*
Requirement: To implement a drag and drop command, which can drag and drop elements arbitrarily in the parent element area.

Ideas:
1. Set the element to be dragged as absolute and its parent element as relative.
2. Record the current left and top values ​​of the target element when the mouse is pressed (onmousedown).
3. When the mouse moves (onmousemove), calculate the change value of the horizontal distance and vertical distance for each movement, and change the left and top values ​​of the element
4. Complete a drag when the mouse is released (onmouseup)

Use: add v-draggable to Dom
<div class="dialog-model" v-draggable></div>
*/
import type { Directive } from 'vue';
interface ElType extends HTMLElement {
  parentNode: any;
}
const draggable: Directive = {
  mounted: function (el: ElType) {
    el.style.cursor = 'move';
    el.style.position = 'absolute';
    el.onmousedown = function (e) {
      const disX = e.pageX - el.offsetLeft;
      const disY = e.pageY - el.offsetTop;
      document.onmousemove = function (e) {
        let x = e.pageX - disX;
        let y = e.pageY - disY;
        const maxX = el.parentNode.offsetWidth - el.offsetWidth;
        const maxY = el.parentNode.offsetHeight - el.offsetHeight;
        if (x < 0) {
          x = 0;
        } else if (x > maxX) {
          x = maxX;
        }

        if (y < 0) {
          y = 0;
        } else if (y > maxY) {
          y = maxY;
        }
        el.style.left = x + 'px';
        el.style.top = y + 'px';
      };
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null;
      };
    };
  },
};
export default draggable;
