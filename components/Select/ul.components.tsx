
import {motion} from 'framer-motion';
import styles from './select.module.sass';
import {type PropsUl} from './types.select';
export const SelectUl = ({itemVariants, isOpen, setIsOpen, setSelected, content, theme, variant}: PropsUl) => {
	let className = styles.menu;
	let classNameItem = styles.item;
	switch (theme) {
		case 'light':
			className += ` ${styles.light}`;
			classNameItem += ` ${styles.light}`;
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
			classNameItem += ` ${styles.dark}`;
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
		<motion.ul
			className={className}
			variants={{
				open: {
					clipPath: 'inset(0% 0% 0% 0% round 10px)',
					transition: {
						type: 'spring',
						bounce: 0,
						duration: 0.7,
						delayChildren: 0.5,
						staggerChildren: 0.05,
					},
				},
				closed: {
					clipPath: 'inset(10% 50% 90% 50% round 10px)',
					transition: {
						type: 'spring',
						bounce: 0,
						duration: 0.3,
					},
				},
			}}
			style={{pointerEvents: isOpen ? 'auto' : 'none'}}>

			{Object.entries(content).map(([key, value]) => (
				<motion.li

					key={key}
					className={classNameItem}
					whileHover={{scale: 1.03}}
					whileTap={{scale: 0.97}}
					variants={itemVariants}
					onClick={() => {
						setSelected(value);
						setIsOpen(false);
					}}
				>
					{value}
				</motion.li>
			))}

		</motion.ul>
	);
};
