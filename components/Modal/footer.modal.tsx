
import {Button} from '../Button/button.ui';
import styles from './modal.module.sass';
import {type FooterModalProps} from './type.modal';
export const ModalFooter = ({onToggle, onClick, theme, variant}: FooterModalProps): JSX.Element => {
	console.log(variant);
	return (
		<div className={styles.footer}>
			<Button text='Close modal' onClick={onToggle} theme={theme} variant='red'/>
			{
				theme === 'light' ? (
					<Button text='Event' onClick={onClick} theme='dark' variant={variant}/>
				) : (
					<Button text='Event' onClick={onClick} theme='light' variant={variant}/>
				)
			}
			{/* ну или можно свой вариант */}
		</div>
	);
};
