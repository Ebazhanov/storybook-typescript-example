import React from 'react';
import {Button} from "..";
import {withA11y} from '@storybook/addon-a11y';
import {PageWrapper} from "../storybook";

export default {
    title: 'Components/Button',
    decorators: [withA11y],
    component: Button
};

export const Primary = () =>
    <PageWrapper>
        <Button variant='primary'>Primary</Button>
    </PageWrapper>

export const Secondary = () =>
    <PageWrapper>
        <Button variant='secondary'>Secondary</Button>
    </PageWrapper>

export const Success = () =>
    <PageWrapper>
        <Button variant='success'>Success</Button>
    </PageWrapper>

export const Danger = () =>
    <PageWrapper>
        <Button variant='danger'>Danger</Button>
    </PageWrapper>
