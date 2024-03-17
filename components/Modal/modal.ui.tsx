/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-children-prop */

'use client';

import {use} from 'react';
import {Button} from '../Button/button.ui';
import styles from './modal.module.sass';
import {type ModalProps, type TypeContext} from './type.modal';
import {useClassname} from '@/hooks/useClassname';
import {Context, ModalProvider} from './provider.modal';

const ModalComponent = ({theme, variant, children, onClick, buttons}: ModalProps) => {
	const {open, Toggle}: TypeContext = use(Context);
	const className = styles.modal;
	const style = useClassname({theme, variant, paramClass: className}, styles);

	return (
		<>
			<Button text='Open modal' onClick={Toggle} theme={theme} variant={variant} />
			{open
				? (
					<div className={styles.container} >
						<div className={style}>

							{children}

							<div className={styles.footer}>
								<Button text='Close modal' onClick={Toggle} theme='light' variant='red'/>
								<Button text='Event' onClick={onClick} theme='light' variant='default'/>
							</div>
						</div>
					</div>
				)
				: (null)
			}
		</>
	);
};

export const Modal = ({theme, variant, children, onClick, buttons}: ModalProps) => {
	return (
		<ModalProvider>
			<ModalComponent theme={theme} variant={variant} children={children} onClick={onClick} buttons={buttons}/>
		</ModalProvider>
	);
};
