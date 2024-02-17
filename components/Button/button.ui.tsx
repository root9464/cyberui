
import {type ButtonProps} from './type.button';
import styles from './button.module.sass';

export const Button = ({theme, variant, text, ...props}: ButtonProps) => {
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
		<button className={className}>
			{text}
		</button>
	);
};
