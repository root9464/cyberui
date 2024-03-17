/* eslint-disable @typescript-eslint/naming-convention */
export type ModalProps = {
	theme: string;
	variant?: string;
	children: React.ReactNode;
	onClick?: () => void;
};

export type TypeContext = {
	open: boolean;
	Toggle: () => void;
};

export type FooterModalProps = Pick<ModalProps, 'onClick'> & Pick<TypeContext, 'Toggle'>;
