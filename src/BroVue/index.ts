import { type App, inject, reactive, readonly } from 'vue';
import { defu } from 'defu';
import './styles/main.scss';

import type { BroVueOptions } from './types';
import { BroVueConfig } from './types';

export const BroVueConfigInject = Symbol();

export function useBroVue() {
  const BroVue = inject(BroVueConfigInject);

  if (!BroVue) {
    throw new Error('BroVue is not installed!');
  }

  return BroVue as { config: BroVueConfig };
}

const defaultOptions: BroVueOptions = {
  colors: {
    gray: '#78716c',
    info: '#6366f1',
    success: '#22c55e',
    warning: '#f97316',
    error: '#ef4444',
  },
};

export function createBroVue(options?: Partial<BroVueOptions>) {
  return (app: App) => {
    const config = reactive<BroVueConfig>(defu(options, defaultOptions));
    const BroVue = {
      config: readonly(config),
    };
    app.config.globalProperties.$brovue = BroVue;
    app.provide(BroVueConfigInject, BroVue);
  };
}

export { default as BroButton } from './components/button/BroButton.vue';
export { default as BroButtonGroup } from './components/button-group/BroButtonGroup.vue';
