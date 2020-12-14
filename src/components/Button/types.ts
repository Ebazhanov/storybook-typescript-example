import React from 'react';
import { ReactNode } from 'react';

export type ComponentProps = {
    children?: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
