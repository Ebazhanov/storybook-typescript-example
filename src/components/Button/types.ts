import React from 'react';
import { ReactNode } from 'react';

export type ComponentProps = {
    id?: string;
    children?: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
