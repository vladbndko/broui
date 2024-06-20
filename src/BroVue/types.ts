export type BroVueOptions = {
  colors: {
    gray: string;
    info: string;
    success: string;
    warning: string;
    error: string;
  };
};

export type BroVueConfig = {
  colors: {
    gray: string;
    info: string;
    success: string;
    warning: string;
    error: string;
  };
};

export * from './index';
export * from './components/button/types';
export * from './components/button-group/types';

declare module 'vue' {
  interface ComponentCustomProperties {
    $brovue: {
      config: BroVueOptions;
    };
  }
  interface GlobalComponents {}
}
