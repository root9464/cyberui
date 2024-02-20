
/* eslint-disable no-mixed-operators */
'use client';
import {useRef, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import styles from './page.module.sass';
import Image from 'next/image';
import {
	type MouseEventWithElement, type Direction, type Params, type EventMouse, type Variants,
} from './type.dh';
export const DirectionAwareHover = ({children, url}: Params): JSX.Element => {
	const ref = useRef<HTMLDivElement>(null);
	const [direction, setDirection] = useState<Direction>('left');
	const handleMouseEnter = (event: EventMouse) => {
		if (!ref.current) {
			return;
		}

		const direction = getDirection({event, object: ref.current});
		switch (direction) {
			case 0:
				setDirection('top');
				break;
			case 1:
				setDirection('right');
				break;
			case 2:
				setDirection('bottom');
				break;
			case 3:
				setDirection('left');
				break;
			default:
				setDirection('left');
				break;
		}
	};

	const getDirection = ({event: ev, object: obj}: MouseEventWithElement): number => {
		const {width: w, height: h, left, top} = obj.getBoundingClientRect();
		const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
		const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
		const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
		return d;
	};

	return (
		<motion.div onMouseEnter={handleMouseEnter} ref={ref} className={styles.main}>
			<AnimatePresence mode='wait'>

				<motion.div className={styles.block} initial='initial' whileHover={direction} exit='exit'>

					<motion.div className={styles.card} />
					<motion.div className={styles.boximg} variants={variants} transition={{duration: 0.2, ease: 'easeOut'}}>
						{url ? <Image src={url} alt='image'/> : null}
					</motion.div>

					<motion.div variants={textVariants} transition={{duration: 0.5, ease: 'easeOut'}} className={styles.text}>
						{children}
					</motion.div>

				</motion.div>

			</AnimatePresence>
		</motion.div>
	);
};

const variants: Variants = {
	initial: {
		x: 0,
	},

	exit: {
		x: 0,
		y: 0,
	},
	top: {
		y: 20,
	},
	bottom: {
		y: -20,
	},
	left: {
		x: 20,
	},
	right: {
		x: -20,
	},
};

const textVariants: Variants = {
	initial: {
		y: 0,
		x: 0,
		opacity: 0,
	},
	exit: {
		y: 0,
		x: 0,
		opacity: 0,
	},
	top: {
		y: -20,
		opacity: 1,
	},
	bottom: {
		y: 2,
		opacity: 1,
	},
	left: {
		x: -2,
		opacity: 1,
	},
	right: {
		x: 20,
		opacity: 1,
	},
};
