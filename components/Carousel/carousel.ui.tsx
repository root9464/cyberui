/* eslint-disable no-negated-condition */
'use client';
import styles from './carousel.module.sass';
import {MdArrowBack, MdArrowForward} from 'react-icons/md';
import {useState} from 'react';
type NavItem = {
	title: string;
	icon: string;
};
type YourComponentProps = {
	navItems: NavItem[];
	totalItems: number;
};
export const Carousel = ({navItems, totalItems}: YourComponentProps) => {
	const [itemIndex, setItemIndex] = useState<number>(0);

	const handlePrevClick = () => {
		setItemIndex((prevIndex: number) => (prevIndex !== 0 ? prevIndex - 1 : totalItems - 1));
	};

	const handleNextClick = () => {
		setItemIndex(prevIndex => (prevIndex !== totalItems - 1 ? prevIndex + 1 : 0));
	};

	return (
		<div className={`${styles.container} ${styles.mxAuto} ${styles.flex} ${styles.maxWidth} ${styles.justifyBetween} ${styles.px7} ${styles.textWhite}`}>
			<div className={`${styles.flex} ${styles.gap8}`}>
				{navItems.map((item, index) => (
					<div
						className={`${styles.navItem} ${itemIndex === index ? styles.active : styles.inactive}`}
						key={item.title}
						onClick={() => {
							setItemIndex(index);
						}}
					>
						<item.icon />
						<span className={styles.hiddenText}>{item.title}</span>
					</div>
				))}
			</div>
			<div className={styles.flex}>
				<span
					className={`${styles.navButton} ${styles.cursorPointer}`}
					onClick={handlePrevClick}
				>
					<MdArrowBack />
				</span>
				<span
					className={`${styles.navButton} ${styles.cursorPointer}`}
					onClick={handleNextClick}
				>
					<MdArrowForward />
				</span>
			</div>
		</div>

	);
};
