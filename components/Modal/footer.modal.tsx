import {Button} from '../Button/button.ui';
import styles from './modal.module.sass';
import {type FooterModalProps} from './type.modal';
export const ModalFooter = ({Toggle, onClick}: FooterModalProps): JSX.Element => (
	<div className={styles.footer}>
		<Button text='Close modal' onClick={Toggle} theme='light' variant='red'/>
		<Button text='Event' onClick={onClick} theme='light' variant='default'/>
	</div>
);
