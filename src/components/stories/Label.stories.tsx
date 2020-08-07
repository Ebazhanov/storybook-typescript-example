import React from 'react';
import {Label} from '..';
import {PageWrapper} from "../storybook";

export default {
    title: 'Components/Label',
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
