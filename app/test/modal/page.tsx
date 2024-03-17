import {Modal} from '@/components/Modal/modal.ui';
import styles from './page.module.sass';
export default function ModalPage() {
	return (
		<div className={styles.div}>
			<Modal {...{theme: 'light', variant: 'default'}}>
				<h2>text</h2>
			</Modal>
		</div>
	);
}
