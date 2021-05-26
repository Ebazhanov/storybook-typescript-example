import * as React from 'react';
import { AutocompleteProps } from '@material-ui/lab';

export type OptionType = { title: string; value: string };

export interface AutocompletePropsTypes
    extends Omit<AutocompleteProps<OptionType, any, any, any>, 'className' | 'renderInput'> {
    label?: React.ReactNode;
    placeholder?: string;
    onDelete?: (value: string) => void;
}
