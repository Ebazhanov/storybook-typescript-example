import * as React from 'react';
import { AutocompleteChangeDetails, AutocompleteChangeReason } from '@material-ui/lab';

export type OptionType = { title: string };

export interface AutocompletePropsTypes {
    onDelete: (title: (title: string) => void) => void;
    AutocompleteProps: {
        options: OptionType[];
        defaultValue: OptionType[];
        getOptionLabel: (option: OptionType) => string;
        value: OptionType[];
        onChange?: (
            event: React.ChangeEvent<{}>,
            value: OptionType[],
            reason: AutocompleteChangeReason,
            details?: AutocompleteChangeDetails<OptionType> | undefined,
        ) => void;
    };
}
