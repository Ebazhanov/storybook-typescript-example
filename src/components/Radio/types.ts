import { ReactNode } from 'react';
import { RadioProps as MuiRadioProps } from '@material-ui/core/Radio';

export interface RadioProps {
    label?: ReactNode;
    muiRadioProps?: MuiRadioProps;
}

export interface RadioGroupProps {
    label?: ReactNode;
    hasError?: boolean;
    message?: ReactNode;
    disabled?: boolean;
    options?: (RadioProps & { key: string })[];
}
