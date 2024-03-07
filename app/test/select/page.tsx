import {Select} from '@/components/Select/select.ui';
import styles from './page.module.sass';
import type {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'CyberUI - Selects',
};
export default function SelectPage() {
	const Content: string[] = [
		'Home', 'About', 'Services', 'Blog', 'Contact',
	];
	return (
		<div className={styles.div}>
			<p>selects</p>
			<div className={styles.box}>
				<div className={styles.selects}>
					<p>Light Theme</p>
					<Select {...{content: Content, theme: 'light', variant: 'default'}} />
					<Select {...{content: Content, theme: 'light', variant: 'default'}}/>
				</div>
				<div className={styles.selects}>
					<p>Dark Theme</p>
					<Select {...{content: Content, theme: 'dark', variant: 'deep'}}/>
				</div>
			</div>
		</div>
	);
}
