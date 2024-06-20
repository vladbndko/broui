import BroButton from '@/BroVue/components/button/BroButton.vue';

export type ButtonInstance = InstanceType<typeof BroButton>;

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error';

export type ButtonProps = {
  class?: null | any;
  color?: string;
  iconic?: boolean;
  link?: boolean;
  loading?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  size?: ButtonSize;
  style?: null | any;
  text?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
};
