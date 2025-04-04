
import {Card} from '@/components/Card/card.ui';
import type {Metadata} from 'next';
import styles from './page.module.sass';

export const metadata: Metadata = {
	title: 'CyberUI - Cards',
};
export default function CardPage() {
	const data: string[] = ['default', 'deep', 'deep-bordered', 'bordered', 'flat', 'outline', 'ghost'];
	const light: string[] = ['default', 'bordered', 'flat', 'outline', 'ghost'];
	return (
		<div className={styles.div}>
			<p>cards</p>
			<div className={styles.box}>
				<div className={styles.cards}>
					<p>dark theme</p>
					{data.map(item => {
						return (
							<Card {...{theme: 'dark', variant: item, text: 'CyberUI'}} key={item}>
								<h1>zzzz</h1>
								<p>ffff</p>
							</Card>
						);
					})}
				</div>
				<div className={styles.cards}>
					<p>light theme</p>
					{light.map(item => {
						return (
							<Card {...{theme: 'light', variant: item, text: 'CyberUI'}} key={item}>
								<h1>zzzz</h1>
								<p>ffff</p>
							</Card>
						);
					})}
				</div>
			</div>

		</div>
	);
}
