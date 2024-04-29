
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-mixed-operators */
'use client';
import {useClassname} from '@/hooks/useClassname';
import {motion, useMotionValue, useTransform} from 'framer-motion';
import {type MouseEventHandler} from 'react';
import styles from './card.module.sass';
import {type CardProps, type CustomMotionStyle} from './type.card';
export const Card = ({theme, variant, children}: CardProps): JSX.Element => {
	const cardX = useMotionValue(0);
	const cardY = useMotionValue(0);
	const rotateX = useTransform(cardY, [-300, 300], [10, -10]);
	const rotateY = useTransform(cardX, [-300, 300], [-10, 10]);
	const cardRotateX = useTransform(cardY, [-300, 300], [25, -25]);
	const cardRotateY = useTransform(cardX, [-300, 300], [-25, 25]);
	const handleMouseMove: MouseEventHandler<HTMLDivElement> = event => {
        const offsetX = event.clientX - window.innerWidth / 2;
        const offsetY = event.clientY - window.innerHeight / 2;
        cardX.set(offsetX);
        cardY.set(offsetY);
    };

	const handleMouseLeave = () => {
		cardX.set(0);
		cardY.set(0);
	};

    const className = styles.box;
    const style = useClassname({theme, variant, paramClass: className}, styles);
    return (
        <motion.div style={{perspective: 800}} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={styles.container}>
                <motion.div className={styles.innermotiondiv} transition={{velocity: 0}} style={{rotateX, rotateY}}>
                        <motion.div style={{cardRotateX, cardRotateY} as CustomMotionStyle} transition={{velocity: 0}} key='card' className={style}>
                                {children}
                        </motion.div>
                </motion.div>
        </motion.div>
      );
};
