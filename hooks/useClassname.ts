
import {useMemo} from 'react';
import type styles from '../components/Button/button.module.sass';
type StylesType = typeof styles;

type ClassName = {
	theme: string;
	variant?: string;
	paramClass: string;

};

export const useClassname = ({theme, variant, paramClass}: ClassName, styles: StylesType): string => {
	const className = useMemo(() => {
		let calculatedClassName = paramClass;

		switch (theme) {
			case 'light':
				calculatedClassName += ` ${styles.light}`;

				switch (variant) {
					case 'bordered':
						calculatedClassName += ` ${styles.bordered}`;
						break;
					case 'flat':
						calculatedClassName += ` ${styles.flat}`;
						break;
					case 'outline':
						calculatedClassName += ` ${styles.outline}`;
						break;
					case 'ghost':
						calculatedClassName += ` ${styles.ghost}`;
						break;

					// Additionals
					case 'red':
						calculatedClassName += ` ${styles.red}`;
						break;

					default:
						calculatedClassName += ` ${styles.default}`;
				}

				break;

			case 'dark':
				calculatedClassName += ` ${styles.dark}`;
				switch (variant) {
					case 'deep':
						calculatedClassName += ` ${styles.deep}`;
						break;
					case 'deep-bordered':
						calculatedClassName += ` ${styles.deepBordered}`;
						break;
					case 'bordered':
						calculatedClassName += ` ${styles.bordered}`;
						break;
					case 'flat':
						calculatedClassName += ` ${styles.flat}`;
						break;
					case 'outline':
						calculatedClassName += ` ${styles.outline}`;
						break;
					case 'ghost':
						calculatedClassName += ` ${styles.ghost}`;
						break;
					default:
						calculatedClassName += ` ${styles.default}`;
				}

				break;

			default:
				break;
		}

		return calculatedClassName;
	}, [theme, variant, paramClass, styles]);

	return className;
};
