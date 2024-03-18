
export type ModalProps = {
	theme: string;
	variant?: string;
	children: React.ReactNode;
	onClick?: () => void;
};

export type TypeContext = {
	open: boolean;
	onToggle: () => void;
};

// Export type FooterModalProps = Pick<ModalProps, 'onClick'> & Pick<TypeContext, 'onToggle'>;
export type FooterModalProps = {
	onToggle: () => void;
	onClick?: () => void;
	theme: string;
	variant?: string;
};
