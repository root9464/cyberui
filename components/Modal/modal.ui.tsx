
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/ban-types */

'use client';

import {createContext, use, useState} from 'react';
import {Button} from '../Button/button.ui';
import styles from './modal.module.sass';
const Context = createContext<any | null>(null);
type X = {
	open: boolean;
	Toggle: () => void;
};
const ModalProvider = ({children}: {children: React.ReactNode}) => {
	const [open, setOpen] = useState<boolean>(false);
	const Toggle = () => {
		setOpen(prev => !prev);
	};

	return (
		<Context.Provider value={{open, Toggle}}>
			{children}
		</Context.Provider>
	);
};

const ModalComponent = () => {
	const {open, Toggle}: X = use(Context);
	console.log(open);
	return (
		<>
			<Button text='Open modal' onClick={Toggle} theme='light' />
			{open
				? (
					<div className={styles.container}>
						<div className={styles.modal}>
							<Button text='Close modal' onClick={Toggle} theme='light' />
						</div>
					</div>
				)
				: (null)
			}
		</>
	);
};

export const Modal = () => {
	return (
		<ModalProvider>
			<ModalComponent />
		</ModalProvider>
	);
};
