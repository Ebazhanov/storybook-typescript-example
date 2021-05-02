import React from 'react';
import { Button } from '..';
import { PageWrapper } from '../storybook';

export default {
    title: 'Components/Button',
    component: Button,
};

export const Default = () => (
    <PageWrapper>
        <Button id="Button">Search</Button>
    </PageWrapper>
);

export const WithClick = () => (
    <PageWrapper>
        <Button
            onClick={(event) => {
                alert('You clicked on the button');
                console.log(event);
            }}
        >
            Search
        </Button>
    </PageWrapper>
);
