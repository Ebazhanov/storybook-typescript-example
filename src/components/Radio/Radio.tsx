import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { ComponentProps, RadioElementProps } from './types';

function RadioWrapper(props: ComponentProps) {
    const { children, defaultValue = '', label = '', row = false } = props;

    if (!children) {
        return null;
    }

    const [value, setValue] = React.useState(defaultValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup aria-label={label} name={label} defaultValue={value} onChange={handleChange} row={row}>
                {children}
            </RadioGroup>
        </FormControl>
    );
}

function RadioElement(props: RadioElementProps) {
    const { value, label, disabled = false, labelPlacement = 'end' } = props;
    return (
        <FormControlLabel
            value={value}
            control={<Radio />}
            label={label}
            disabled={disabled}
            labelPlacement={labelPlacement}
        />
    );
}

export { RadioElement };
export default RadioWrapper;
