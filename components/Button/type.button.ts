
export type ButtonProps = {
	theme: string;
	variant?: string;
	text: string | number;
	onClick?: () => void; // Чтобы использовать нужен клиентский компонент
};

