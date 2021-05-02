import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
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
