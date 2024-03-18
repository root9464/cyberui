
/* eslint-disable react/no-children-prop */

'use client';

import {use} from 'react';
import {Button} from '../Button/button.ui';
import styles from './modal.module.sass';
import {type ModalProps, type TypeContext} from './type.modal';
import {useClassname} from '@/hooks/useClassname';
import {Context, ModalProvider} from './provider.modal';
import {ModalFooter} from './footer.modal';
import {motion} from 'framer-motion';

const ModalComponent = ({theme, variant, children, onClick}: ModalProps): JSX.Element => {
	const {open, onToggle} = use<TypeContext>(Context);
	const className = styles.modal;
	const style = useClassname({theme, variant, paramClass: className}, styles);

	return (
		<>
			<Button text='Open modal' onClick={onToggle} theme={theme} variant={variant} />
			{open
				? (
					<div className={styles.container}>
						<div className={styles.blur}></div>

						<motion.div className={style}
							initial={{opacity: 0, scale: 0.5}}
							animate={{opacity: 1, scale: 1}}
							transition={{duration: 0.3, delay: 0.5, ease: [0, 0.46, 0.26, 1.16]}}>

							{children}

							<ModalFooter {...{
								onToggle, onClick, theme, variant,
							}} />
						</motion.div>
					</div>
				)
				: (null)
			}
		</>
	);
};

export const Modal = ({theme, variant, children, onClick}: ModalProps) => {
	return (
		<ModalProvider>
			<ModalComponent theme={theme} variant={variant} children={children} onClick={onClick}/>
		</ModalProvider>
	);
};
