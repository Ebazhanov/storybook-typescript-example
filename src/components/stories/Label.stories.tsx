import React from 'react';
import { Label } from '..';
import { PageWrapper } from '../storybook';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'Components/Label',
    decorators: [withA11y],
    component: Label,
};

export const Intro = () => (
    <PageWrapper>
        <h1>Label</h1>
        <p>TBD</p>
    </PageWrapper>
);

export const Default = () => (
    <PageWrapper>
        <Label htmlFor="test">Test</Label>
    </PageWrapper>
);
