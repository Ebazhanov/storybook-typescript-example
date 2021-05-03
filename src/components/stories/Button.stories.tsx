import { PageWrapper } from '../storybook';
import React from 'react';
import { Button } from '..';

export default {
    title: 'Components/Button',
    component: Button,
};

export const Default = () => (
    <PageWrapper>
        <Button>Default</Button>
    </PageWrapper>
);

export const Secondary = () => (
    <PageWrapper>
        <Button secondary>Secondary</Button>
    </PageWrapper>
);

export const Disabled = () => (
    <PageWrapper>
        <Button disabled>Disabled</Button>
    </PageWrapper>
);

export const WithClickListener = () => (
    <PageWrapper>
        <Button
            onClick={(event) => {
                alert('You clicked the "non-disabled" button');
                console.log(event);
            }}
        >
            Click to see the alert
        </Button>
    </PageWrapper>
);
