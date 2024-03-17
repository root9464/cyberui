/* eslint-disable @typescript-eslint/naming-convention */
export type ModalProps = {
	theme: string;
	variant?: string;
	children: React.ReactNode;
	onClick?: () => void;
	buttons?: boolean;
};

export type TypeContext = {
	open: boolean;
	Toggle: () => void;
};
