import {Modal} from '@/components/Modal/modal.ui';
import styles from './page.module.sass';
export default function ModalPage() {
	const light = ['default', 'bordered', 'flat'];
	const dark = ['default', 'deep', 'deep-bordered', 'bordered', 'flat'];
	return (
		<div className={styles.div}>
			<p>modals</p>
			<div className={styles.box}>
				<div className={styles.modals}>
					<p>Light Theme</p>
					{light.map((item, index) => (
						<Modal {...{theme: 'light', variant: item}} key={index}>
							<h2>text</h2>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Perspiciatis similique voluptatem molestiae dolores vitae iure consequuntur
								nihil porro architecto debitis reiciendis
								dignissimos pariatur optio facilis vero, provident exercitationem ex beatae!
							</p>

						</Modal>
					))}
				</div>
				<div className={styles.modals}>
					<p>Dark Theme</p>
					{dark.map((item, index) => (
						<Modal {...{theme: 'dark', variant: item}} key={index}>
							<h2>text</h2>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Perspiciatis similique voluptatem molestiae dolores vitae iure consequuntur
								nihil porro architecto debitis reiciendis
								dignissimos pariatur optio facilis vero, provident exercitationem ex beatae!
							</p>
						</Modal>
					))}
				</div>
			</div>

		</div>
	);
}
