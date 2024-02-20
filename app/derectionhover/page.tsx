
import {DirectionAwareHover} from '@/components/DirectionalHover/effect.ui';
import styles from './page.module.sass';
import {type Metadata} from 'next';

export const metadata: Metadata = {
	title: 'CyberUI - DirectionalHover',
};
export default function DirectionalHover() {
	return (
		<div className={styles.container}>
			<DirectionAwareHover>
				<p>In the mountains</p>
				<p>$1299 / night</p>
			</DirectionAwareHover>
		</div>
	);
}
