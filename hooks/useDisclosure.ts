/* eslint-disable no-negated-condition */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

import type React from 'react';
import {useCallback, useId, useState} from 'react';
import {useCallbackRef} from './useCallbackRef';

export type UseDisclosureProps = {
	open?: boolean;
	defaultOpen?: boolean;
	onClose?(): void;
	onOpen?(): void;
	id?: string;
};

type HTMLProps = React.HTMLAttributes<HTMLElement>;

export function useDisclosure(props: UseDisclosureProps = {}) {
	const {
		onClose: onCloseProp,
		onOpen: onOpenProp,
		open: openProp,
		id: idProp,
	} = props;

	const handleOpen = useCallbackRef(onOpenProp);
	const handleClose = useCallbackRef(onCloseProp);

	const [openState, setIsOpen] = useState(props.defaultOpen || false);

	const open = openProp !== undefined ? openProp : openState;

	const isControlled = openProp !== undefined;

	const uid = useId();
	const id = idProp ?? `disclosure-${uid}`;

	const onClose = useCallback(() => {
		if (!isControlled) {
			setIsOpen(false);
		}

		handleClose?.();
	}, [isControlled, handleClose]);

	const onOpen = useCallback(() => {
		if (!isControlled) {
			setIsOpen(true);
		}

		handleOpen?.();
	}, [isControlled, handleOpen]);

	const onToggle = useCallback(() => {
		if (open) {
			onClose();
		} else {
			onOpen();
		}
	}, [open, onOpen, onClose]);

	function getButtonProps(props: HTMLProps = {}): HTMLProps {
		return {
			...props,
			'aria-expanded': open,
			'aria-controls': id,
			onClick(event) {
				props.onClick?.(event);
				onToggle();
			},
		};
	}

	function getDisclosureProps(props: HTMLProps = {}): HTMLProps {
		return {
			...props,
			hidden: !open,
			id,
		};
	}

	return {
		open,
		onOpen,
		onClose,
		onToggle,
		isControlled,
		getButtonProps,
		getDisclosureProps,
	};
}

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>;
