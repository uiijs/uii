export type Type = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'link';
export type Size = 'lg' | 'sm';

export interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  disabled?: boolean;
  block?: boolean;
  type?: Type;
  size?: Size;
  htmlType?: 'button' | 'submit' | 'reset';
  prefixCls?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement> & MouseEvent) => void;
}