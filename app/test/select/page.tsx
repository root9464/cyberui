import {Select} from '@/components/Select/select.ui';
import styles from './page.module.sass';
export default function SelectPage() {
	const Content: string[] = [
		'Home', 'About', 'Services', 'Blog', 'Contact',
	];
	return (
		<div className={styles.div}>
			<Select {...{content: Content, theme: 'dark', variant: 'default'}}/>
		</div>
	);
}
