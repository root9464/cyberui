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
					<Modal {...{theme: 'light', variant: 'bordered', buttons: false}}>
						<h2>text</h2>
						<p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis similique voluptatem molestiae dolores vitae iure consequuntur nihil porro architecto debitis reiciendis dignissimos pariatur optio facilis vero, provident exercitationem ex beatae!</p>
					</Modal>
				</nav>
			</header>
			<Card theme='light' variant='default'>
				<p>text</p>
			</Card>
		</div>
	);
}
