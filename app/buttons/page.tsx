import {Button} from '@/components/Button/button.ui';
import styles from './page.module.sass';
export default function Buttons() {
	return (
		<div className={styles.div}>
			<p>buttons</p>
			<div className={styles.boxButtons}>
				<div className={styles.btns}>
					<p>Light Theme</p>
					<Button {...{theme: 'light', variant: 'default', text: 'CyberUI'}} />
					<Button {...{theme: 'light', variant: 'bordered', text: 'CyberUI'}} />
					<Button {...{theme: 'light', variant: 'flat', text: 'CyberUI'}} />
					<Button {...{theme: 'light', variant: 'outline', text: 'CyberUI'}} />
					<Button {...{theme: 'light', variant: 'ghost', text: 'CyberUI'}} />
				</div>

				<div className={styles.btns}>
					<p>Dark Theme</p>
					<Button theme='light' variant='default' text='CyberUI' />
				</div>
			</div>

		</div>
	);
}
