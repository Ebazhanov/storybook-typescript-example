import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import RadioGroup, { Radio } from '../Radio';

import { PageWrapper } from '../storybook';
import { FormControlLabel, FormHelperText } from '@material-ui/core';

export default {
    title: 'Components/Radio',
    component: RadioGroup,
};

export const Standard = () => {
    const defaultValue = 'female';
    const [, setValue] = useState(defaultValue);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <PageWrapper>
            <RadioGroup name="standard-usage" onChange={onChange} label="Standard Usage" defaultValue={defaultValue}>
                <Radio value="female" label="Female" />
                <Radio value="male" label="Male" />
                <Radio value="other" label="Other" />
            </RadioGroup>
        </PageWrapper>
    );
};

export const DisabledState = () => {
    const defaultValue = 'male';
    const [, setValue] = useState(defaultValue);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <PageWrapper>
            <RadioGroup
                name="disabled-state"
                onChange={onChange}
                label="Disabled State"
                defaultValue={defaultValue}
                disabled
            >
                <Radio value="female" label="Female" disabled />
                <Radio value="male" label="Male" disabled />
                <Radio value="other" label="Other" disabled />
            </RadioGroup>
        </PageWrapper>
    );
};

export const HorizontalLayout = () => {
    const defaultValue = 'female';
    const [, setValue] = useState(defaultValue);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <PageWrapper>
            <RadioGroup
                name="horizontal-layout"
                onChange={onChange}
                label="Horizontal layout"
                defaultValue={defaultValue}
                row
            >
                <Radio value="female" label="Female" />
                <Radio value="male" label="Male" />
                <Radio value="other" label="Other" />
            </RadioGroup>
        </PageWrapper>
    );
};

export const LabelPlacement = () => {
    const defaultValue = 'start';
    const [, setValue] = useState(defaultValue);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <PageWrapper>
            <RadioGroup
                name="label-placement"
                onChange={onChange}
                label="Label placement"
                defaultValue={defaultValue}
                row
            >
                <Radio value="top" label="Top" labelPlacement="top" />
                <Radio value="start" label="Start" labelPlacement="start" />
                <Radio value="bottom" label="Bottom" labelPlacement="bottom" />
                <Radio value="end" label="End" labelPlacement="end" />
            </RadioGroup>
        </PageWrapper>
    );
};

export const PassingRadioProps = () => {
    const defaultValue = 'top';
    const [, setValue] = useState(defaultValue);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <PageWrapper>
            <RadioGroup
                name="label-placement"
                onChange={onChange}
                label="Use of Radio props"
                defaultValue={defaultValue}
            >
                <Radio
                    value="top"
                    label="Disabled ripple, small size radio button"
                    muiRadioProps={{ disableRipple: true, size: 'small' }}
                />
                <Radio value="start" label="Disabled" muiRadioProps={{ disabled: true }} />
                <Radio value="bottom" label="Default Mui color" muiRadioProps={{ color: 'default' }} />
                <Radio value="end" label="Without Radio props" />
            </RadioGroup>
        </PageWrapper>
    );
};

export const ErrorState = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(true);
    const [helperText, setHelperText] = useState('Choose wisely');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
        setError(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (value === 'best') {
            setHelperText('You got it!');
            setError(false);
        } else if (value === 'worst') {
            setHelperText('Sorry, wrong answer!');
            setError(true);
        } else {
            setHelperText('Please select an option.');
            setError(true);
        }
    };

    return (
        <PageWrapper>
            <form onSubmit={handleSubmit} name="simple-form">
                <RadioGroup
                    name="error-state"
                    label="Select Black"
                    value={value}
                    onChange={onChange}
                    hasError={error}
                    message={helperText}
                >
                    <FormControlLabel value="best" control={<Radio />} label="The best!" />
                    <FormControlLabel value="worst" control={<Radio />} label="The worst." />
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button type="submit" variant="outlined" size="small">
                    Check Answer
                </Button>
            </form>
        </PageWrapper>
    );
};
