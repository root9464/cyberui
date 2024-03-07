
import {motion} from 'framer-motion';
import styles from './select.module.sass';
import {type PropsUl} from './types.select';
import {useClassname} from '@/hooks/useClassname';
export const SelectUl = ({itemVariants, isOpen, setIsOpen, setSelected, content, theme, variant}: PropsUl) => {
	const className = styles.menu;
	const classNameItem = styles.item;
	const styleUl = useClassname({theme, variant, paramClass: className}, styles);
	const styleLi = useClassname({theme, variant, paramClass: classNameItem}, styles);
	return (
		<motion.ul
			className={styleUl}
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
					className={styleLi}
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
