export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant = 'default' | 'info' | 'success' | 'warning' | 'error';

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: string;
  outline?: boolean;
  loading?: boolean;
  link?: boolean;
};
