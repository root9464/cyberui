
import {DirectionAwareHover} from '@/components/DirectionalHover/effect.ui';
import styles from './page.module.sass';
import Url from '../../tmp/lucy.jpg';
export default function Test() {
	return (
		<div className={styles.container}>
			<DirectionAwareHover url={Url}>
				<p>In the mountains</p>
				<p>$1299 / night</p>
			</DirectionAwareHover>
		</div>
	);
}
