import {type Variants} from 'framer-motion';

export type PropsUl = {
	itemVariants: Variants;
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	setSelected: (selected: string) => void;
	theme: string;
	variant?: string;
	content: string[];
};

export type PropsSelect = {
	theme: string;
	variant?: string;
	content: string[];
};
