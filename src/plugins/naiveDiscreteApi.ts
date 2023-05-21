import * as NaiveUI from 'naive-ui';
import { computed } from 'vue';
import { useDesignSetting } from '@/store/modules/designSetting';
import { lighten } from '@/utils/index';

/**
 * Mount Naive-ui out of context API
 * If you want to use useDialog, useMessage, useNotification, useLoadingBar outside the setup, you can build the corresponding API through createDiscreteApi.
 * https://www.naiveui.com/zh-CN/dark/components/discrete
 */

export function setupNaiveDiscreteApi() {
  const designStore = useDesignSetting();

  const configProviderPropsRef = computed(() => ({
    theme: designStore.darkTheme ? NaiveUI.darkTheme : undefined,
    themeOverrides: {
      common: {
        primaryColor: designStore.appTheme,
        primaryColorHover: lighten(designStore.appTheme, 6),
        primaryColorPressed: lighten(designStore.appTheme, 6),
      },
      LoadingBar: {
        colorLoading: designStore.appTheme,
      },
    },
  }));
  const { message, dialog, notification, loadingBar } = NaiveUI.createDiscreteApi(
    ['message', 'dialog', 'notification', 'loadingBar'],
    {
      configProviderProps: configProviderPropsRef,
    }
  );

  window['$message'] = message;
  window['$dialog'] = dialog;
  window['$notification'] = notification;
  window['$loading'] = loadingBar;
}
