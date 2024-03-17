import {Modal} from '@/components/Modal/modal.ui';
import styles from './page.module.sass';
import {Card} from '@/components/Card/card.ui';
export default function ButtonsPage() {
	return (
		<div className={styles.div}>
			<header className={styles.header}>
				<h1>Home</h1>
				<nav className={styles.nav}>
					<p>text</p>
					<p>text</p>
					<p>text</p>
					<p>text</p>
					<Modal {...{theme: 'light', variant: 'default', buttons: false}}>
						<h2>text</h2>
					</Modal>
				</nav>
			</header>
			<Card theme='light' variant='default'>
				<p>text</p>
			</Card>
		</div>
	);
}
