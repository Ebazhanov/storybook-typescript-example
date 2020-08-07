import React from 'react';
import {Button} from "..";
import {PageWrapper} from "../storybook";

export default {
    title: 'Components/Button',
    component: Button,
};

export const LoadButton = () => (
    <PageWrapper>
        <Button>Click to load</Button>
    </PageWrapper>
);
