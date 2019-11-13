import React from 'react';
import cn from 'classnames';
import { Props } from './type';
import './style/index.scss';

const Button = (props: Props) => {
  const { size, type, block, prefixCls, className, htmlType, children, ...rest } = props;
  const cls = cn(className, prefixCls, {
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-${type}`]: type,
    disabled: rest.disabled,
    block,
  })
  return (
    <button {...rest} type={htmlType} className={cls}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'primary',
  prefixCls: 'uii-btn',
  htmlType: 'button'
}

export default Button;
