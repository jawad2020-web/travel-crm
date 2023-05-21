import './styles/tailwind.css';
import { createApp } from 'vue';
import { setupNaiveDiscreteApi, setupNaive, setupDirectives } from '@/plugins';
import App from './App.vue';
import router, { setupRouter } from './router';
import { setupStore } from '@/store';

async function bootstrap() {
  const app = createApp(App);

  // mount state management
  setupStore(app);

  // Register the commonly used naive-ui components globally
  setupNaive(app);

  // mount naive-ui Api out of context
  setupNaiveDiscreteApi();

  // register global custom component
  //setupCustomComponents();

  // Register global custom instructions, such as: v-permission permission instruction
  setupDirectives(app);

  // Register global methods, such as: app.config.globalProperties.$message = message
  //setupGlobalMethods(app);

  // Mount the route
  setupRouter(app);

  // Mount the APP instance after the route is ready
  // https://router.vuejs.org/api/interfaces/router.html#isready
  await router.isReady();

  // https://www.naiveui.com/en-US/os-theme/docs/style-conflict#About-Tailwind's-Preflight-Style-Override
  const meta = document.createElement('meta');
  meta.name = 'naive-ui-style';
  document.head.appendChild(meta);

  app.mount('#app', true);
}

void bootstrap();
