import React from 'react';
import Button from './index';
import { Type, Size } from './type';

export default {
  title: 'Button'
}

export const basic = () => <Button>primary</Button>;

const TYPES = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link'];
const TYPE_TEXTS = ['主要', '次要', '成功', '通知', '警告', '危险', '链接'];
export const type = () => (
  <>
    {TYPES.map((type, index) => <Button type={type as Type} key={type}>{`${TYPE_TEXTS[index]} ${type}`}</Button>)}
  </>
)

const SIZES = ['sm', '', 'lg'];

export const size = () => (
  <>
    {SIZES.map(size => <Button size={size as Size} key={size}>{`primary ${size || 'default'}`}</Button>)}
  </>
)

export const disabled = () => (
  <>
    {TYPES.map((type, index) => <Button disabled type={type as Type} key={type}>{`${TYPE_TEXTS[index]} ${type}`}</Button>)}
  </>
)

export const block = () => (
  <div style={{ maxWidth: '320px' }}>
    {TYPES.map((type, index) => <Button block type={type as Type} key={type}>{`${TYPE_TEXTS[index]} ${type}`}</Button>)}
  </div>
)