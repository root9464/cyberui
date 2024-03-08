
'use client';
import {motion} from 'framer-motion';
import {useEffect, useRef, useState} from 'react';
import styles from './test.module.sass';
import Image, {type StaticImageData} from 'next/image';
export const Carousel = ({img}: {img: StaticImageData[]}) => {
	const array: number[] = [1, 2, 3, 4, 5];
	const [width, setWidth] = useState<number>(0);
	const carousel = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (carousel.current) {
			setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
		}
	}, [width]);

	return (

		<motion.div className={styles.carousel} ref={carousel} whileTap={{cursor: 'grabbing'}}>
			<motion.div className={styles.innerCarousel} drag='x' dragConstraints={{right: 0, left: -width}} >
				{img.map((item, index) => {
					return (
						<motion.div key={index} className={styles.item}>
							<Image src={item} alt='test' className={styles.block} />
						</motion.div>
					);
				})}
			</motion.div>
		</motion.div>

	);
};
