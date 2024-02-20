
/* eslint-disable react/display-name */

'use client';
import {type ButtonProps} from './type.button';
import styles from './button.module.sass';
import {memo} from 'react';

export const Button = memo(
	({theme, variant, text, onClick, ...props}: ButtonProps): JSX.Element => {
		let className = styles.button;

		switch (theme) {
			case 'light':
				className += ` ${styles.light}`;
				switch (variant) {
					case 'bordered':
						className += ` ${styles.bordered}`;
						break;
					case 'flat':
						className += ` ${styles.flat}`;
						break;
					case 'outline':
						className += ` ${styles.outline}`;
						break;
					case 'ghost':
						className += ` ${styles.ghost}`;
						break;
					default:
						className += ` ${styles.default}`;
				}

				break;

			case 'dark':
				className += ` ${styles.dark}`;
				switch (variant) {
					case 'deep':
						className += ` ${styles.deep}`;
						break;
					case 'deep-bordered':
						className += ` ${styles.deepBordered}`;
						break;
					case 'bordered':
						className += ` ${styles.bordered}`;
						break;
					case 'flat':
						className += ` ${styles.flat}`;
						break;
					case 'outline':
						className += ` ${styles.outline}`;
						break;
					case 'ghost':
						className += ` ${styles.ghost}`;
						break;
					default:
						className += ` ${styles.default}`;
				}

				break;

			default:
				break;
		}

		return (
			<button className={className} onClick={onClick} {...props}>
				{text}
			</button>
		);
	});

