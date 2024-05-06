/* eslint-disable react/jsx-key */

import {Button} from '@/components/Button/button.ui';
import type {Metadata} from 'next';
import styles from './page.module.sass';

export const metadata: Metadata = {
	title: 'CyberUI - Buttons',
};
export default function ButtonsPage() {
	const light = ['default', 'bordered', 'flat', 'outline', 'ghost'];
	const dark = ['default', 'deep', 'deep-bordered', 'bordered', 'flat', 'outline', 'ghost'];
	return (
		<div className={styles.div}>
			<p>buttons</p>
			<div className={styles.boxButtons}>
				<div className={styles.btns}>
					<p>Light Theme</p>
					{light.map(item => (
						<Button theme='light' variant={item} text='CyberUI' />
					))}
				</div>
				<div className={styles.btns}>
					<p>Dark Theme</p>
					{dark.map(item => (
						<Button theme='dark' variant={item} text='CyberUI' />
					))}
				</div>
			</div>

		</div>
	);
}
