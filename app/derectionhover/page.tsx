
import {DirectionAwareHover} from '@/components/DirectionalHover/effect.ui';
import {type Metadata} from 'next';
import styles from './page.module.sass';
export const metadata: Metadata = {
	title: 'CyberUI - DirectionalHover',
};
export default function DirectionalHoverPage() {
	return (
		<div className={styles.container}>
			<DirectionAwareHover>
				<p>In the mountains</p>
				<p>$1299 / night</p>
			</DirectionAwareHover>
		</div>
	);
}
