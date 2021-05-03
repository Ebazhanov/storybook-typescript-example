import React from 'react';
import { PageWrapper } from '../storybook';
import { RadioWrapper, RadioElement } from '..';

export default {
    title: 'Components/Radio',
    component: RadioWrapper,
};

export const StandardWithContent = () => (
    <PageWrapper>
        <RadioWrapper defaultValue="female">
            <RadioElement value="female" label="Female" />
            <RadioElement value="male" label="Male" />
            <RadioElement value="other" label="Other" />
            <RadioElement value="disabled" label="(Disabled option)" disabled />
        </RadioWrapper>
    </PageWrapper>
);

export const HorizontalLayout = () => (
    <PageWrapper>
        <RadioWrapper defaultValue="male" row>
            <RadioElement value="female" label="Female" />
            <RadioElement value="male" label="Male" />
            <RadioElement value="other" label="Other" />
            <RadioElement value="disabled" label="(Disabled option)" disabled />
        </RadioWrapper>
    </PageWrapper>
);

export const LabelPlacement = () => (
    <PageWrapper>
        <RadioWrapper defaultValue="start" row>
            <RadioElement value="top" label="Top" labelPlacement="top" />
            <RadioElement value="start" label="Start" labelPlacement="start" />
            <RadioElement value="bottom" label="Bottom" labelPlacement="bottom" />
            <RadioElement value="end" label="End" labelPlacement="end" />
        </RadioWrapper>
    </PageWrapper>
);
