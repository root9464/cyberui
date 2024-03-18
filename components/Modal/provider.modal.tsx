'use client';
import {useDisclosure} from '@/hooks/useDisclosure';
import {createContext} from 'react';

export const Context = createContext<any | undefined>(null);

export const ModalProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
	const {open, onToggle} = useDisclosure();
	return (
		<Context.Provider value={{open, onToggle}}>
			{children}
		</Context.Provider>
	);
};
