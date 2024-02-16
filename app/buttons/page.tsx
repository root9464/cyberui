import {Button} from '@/components/Button/button.ui';
import styles from './page.module.sass';
export default function Buttons() {
	return (
		<div className={styles.div}>
			<p>buttons</p>
			<Button theme='light' variant='default' text='Primary' />

		</div>
	);
}
