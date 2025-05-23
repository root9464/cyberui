import {Select} from '@/components/Select/select.ui';
import type {Metadata} from 'next';
import styles from './page.module.sass';

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
					<Select {...{content: Content, theme: 'light', variant: 'default'}} />
					<Select {...{content: Content, theme: 'light', variant: 'bordered'}}/>
					<Select {...{content: Content, theme: 'light', variant: 'flat'}} />
				</div>
				<div className={styles.selects}>
					<Select {...{content: Content, theme: 'dark', variant: 'default'}} />
					<Select {...{content: Content, theme: 'dark', variant: 'deep'}} />
					<Select {...{content: Content, theme: 'dark', variant: 'deep-bordered'}} />
					<Select {...{content: Content, theme: 'dark', variant: 'bordered'}}/>
					<Select {...{content: Content, theme: 'dark', variant: 'flat'}} />
				</div>
			</div>
		</div>
	);
}
