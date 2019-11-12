import React from 'react';
import Button from './index';
import { Type, Size } from './type';

export default {
	title: 'Button'
}

export const basic = () => <Button>primary</Button>;

const TYPES = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link'];
export const type = () => (
	<>
		{TYPES.map(type => <Button type={type as Type} key={type}>{type}</Button>)}
	</>
)

const SIZES = ['sm', '', 'lg'];

export const size = () => (
	<>
		{SIZES.map(size => <Button size={size as Size} key={size}>{`primary(${size || 'default'})`}</Button>)}
	</>
)