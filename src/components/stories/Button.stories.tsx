import React from 'react';
import { Button } from '..';
import { PageWrapper } from '../storybook';

export default {
    title: 'Components/Button',
    component: Button,
};

export const Default = () => (
    <PageWrapper>
        <Button>Search</Button>
    </PageWrapper>
);
