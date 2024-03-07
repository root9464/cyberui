
'use client';
import {type Variants, motion} from 'framer-motion';
import {useState} from 'react';
import styles from './select.module.sass';
import {BiSolidDownArrow} from 'react-icons/bi';
import {SelectUl} from './ul.components';
import {type PropsSelect} from './types.select';
import {useClassname} from '@/hooks/useClassname';
export const Select = ({theme, variant, content}: PropsSelect) => {
	const className = styles.button;
	const style = useClassname({theme, variant, paramClass: className}, styles);

	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState<string>('');
	const itemVariants: Variants = {
		open: {
			opacity: 1,
			y: 0,
			transition: {type: 'spring', stiffness: 300, damping: 24},
		},
		closed: {opacity: 0, y: 20, transition: {duration: 0.2}},
	};

	return (
		<motion.nav initial={false} animate={isOpen ? 'open' : 'closed'} className={styles.nav}>
			<motion.button className={style} whileTap={{scale: 0.97}} onClick={() => {
				setIsOpen(!isOpen);
			}}>
				{selected || 'Menu'}
				<motion.div
					variants={{open: {rotate: 180}, closed: {rotate: 0}}}
					transition={{
						type: 'spring', duration: 0.8,
					}}
					style={{originY: 0.55}} className={styles.arrow}>
					<div className={styles.staticArrow}>
						<BiSolidDownArrow />
					</div>
				</motion.div>

			</motion.button>
			<SelectUl {...{
				itemVariants, isOpen, setIsOpen, setSelected, content, theme, variant,
			}}/>
		</motion.nav>
	);
};
