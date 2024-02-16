
import {type ButtonProps} from './type.button';
import styles from './button.module.sass';

export const Button = ({theme, variant, text, ...props}: ButtonProps) => {
	let className = styles.button;

	switch (theme) {
		case 'light':
			className += ` ${styles.light}`;
			switch (variant) {
				case 'primary':
					className += ` ${styles.primary}`;
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
