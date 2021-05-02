import { ReactNode } from 'react';

export type ComponentProps = {
    children?: ReactNode;
    defaultValue?: string;
    label?: string;
    row?: boolean;
};

export type RadioElementProps = {
    disabled?: boolean;
    label: string;
    value: string;
    labelPlacement?: 'end' | 'start' | 'top' | 'bottom' | undefined;
};
