
import {motion} from 'framer-motion';
import styles from './select.module.sass';
import {type PropsUl} from './types.select';
export const SelectUl = ({itemVariants, isOpen, setIsOpen, setSelected, content}: PropsUl) => {
	return (
		<motion.ul
			className={styles.menu}
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
					className={styles.item}
					whileHover={{scale: 1.03, className: 'bg-primary'}}
					whileTap={{scale: 0.97, className: 'text-primary'}}
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
