
/* eslint-disable react/display-name */

'use client';
import {type ButtonProps} from './type.button';
import styles from './button.module.sass';
import {memo} from 'react';
import {useClassname} from '@/hooks/useClassname';

export const Button = memo(
	({theme, variant, text, onClick, ...props}: ButtonProps): JSX.Element => {
		const className = styles.button;
		const style = useClassname({theme, variant, paramClass: className}, styles);

		return (
			<button className={style} onClick={onClick} {...props}>
				{text}
			</button>
		);
	});

