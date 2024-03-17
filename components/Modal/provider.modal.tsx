'use client';
import {createContext, useState} from 'react';

export const Context = createContext<any | undefined>(null);

export const ModalProvider = ({children}: {children: React.ReactNode}) => {
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
