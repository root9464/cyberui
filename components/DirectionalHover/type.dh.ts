
/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/space-before-blocks */

import {type StaticImageData} from 'next/image';
import {type MouseEvent} from 'react';
export type Params = {
	url: StaticImageData | string;
	children: React.ReactNode | string;
};
export type Direction = 'top' | 'bottom' | 'left' | 'right' | string;

export type MouseEventWithElement = {
	event: MouseEvent<HTMLDivElement>;
	object: HTMLElement;
};

export type EventMouse = MouseEvent<HTMLDivElement>;

export type Variants = {
	[key in 'initial' | 'exit' | 'top' | 'bottom' | 'left' | 'right']: Partial<Param>;
};

interface Param{
	x: number;
	y: number;
	opacity: number;
}
