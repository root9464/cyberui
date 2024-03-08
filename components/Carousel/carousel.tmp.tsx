
'use client';
import {motion} from 'framer-motion';
import {useEffect, useRef, useState} from 'react';
import styles from './carousel.module.sass';
import Image, {type StaticImageData} from 'next/image';
export const Carousel = ({img}: {img: StaticImageData[]}) => {
	const [width, setWidth] = useState<number>(0);
	const carousel = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (carousel.current) {
			setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
		}
	}, [width]);
	if (img.length !== 0) {
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
	}

	return (
		<>
			<h1>нету изображений</h1>
		</>
	);
};
