import React, { ReactNode } from 'react';

export type ButtonProps = {
    children?: ReactNode;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    secondary?: boolean;
    type?: 'button';
};
