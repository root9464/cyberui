/* eslint-disable @typescript-eslint/consistent-type-definitions */
import {type MotionStyle, type MotionValue} from 'framer-motion';

export type CardProps = {
	theme: string;
	variant?: string;
	children: React.ReactNode;
};

export interface CustomMotionStyle extends MotionStyle {
	cardRotateX: MotionValue<number>;
	cardRotateY: MotionValue<number>;
}
