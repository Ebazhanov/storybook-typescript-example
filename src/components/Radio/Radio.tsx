import React from 'react';
import classnames from 'classnames';

import MuiRadio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiRadioGroup from '@material-ui/core/RadioGroup';

import { RadioGroupProps, RadioProps } from './types';
import { Wrapper } from './styled';

function Radio(props: RadioProps) {
    const { muiRadioProps, ...rest } = props;
    return <FormControlLabel {...rest} control={<MuiRadio {...muiRadioProps} />} />;
}

function RadioGroup(props: RadioGroupProps) {
    const {
        children,
        label,
        name = '',
        message,
        hasError = false,
        generateCss,
        id,
        className,
        disabled = false,
        ...rest
    } = props;

    if (!children) {
        return null;
    }

    return (
        <Wrapper
            className={classnames(className, {
                disabled,
                hasError,
            })}
        >
            <MuiRadioGroup {...rest}>{children}</MuiRadioGroup>
        </Wrapper>
    );
}

export { Radio };

export default RadioGroup;
