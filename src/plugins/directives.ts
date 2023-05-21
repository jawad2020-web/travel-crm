import { App } from 'vue';

import { permission } from '@/directives/permission';
import copy from '@/directives/copy';
import debounce from '@/directives/debounce';
import throttle from '@/directives/throttle';
import draggable from '@/directives/draggable';

/**
 * Register global custom directives
 * @param app
 */
export function setupDirectives(app: App) {
  // permission control command (demo)
  app.directive('permission', permission);
  // copy instruction
  app.directive('copy', copy);
  // anti-shake command
  app.directive('debounce', debounce);
  // throttling instruction
  app.directive('throttle', throttle);
  // drag command
  app.directive('draggable', draggable);
}
