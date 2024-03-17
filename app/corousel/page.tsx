import {Carousel} from '@/components/Carousel/carousel.tmp';
import imge from '../../../tmp/sunset-in-the-field-of-wheat-wallpaper-2880x1800_8.jpg';
import styles from './page.module.sass';
export default function CarouselPage() {
	return (
		<div className={styles.div}>
			<h1>Carousel</h1>
			<Carousel img={[imge, imge, imge]} />
		</div>
	);
}
