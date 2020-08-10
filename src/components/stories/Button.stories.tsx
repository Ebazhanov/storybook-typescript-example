import React from 'react';
import {Button} from "..";
import { withA11y } from '@storybook/addon-a11y';
import {PageWrapper} from "../storybook";

export default {
    title: 'Components/Button',
    decorators: [withA11y],
    component: Button
};

export const LoadButton = () => (
    <PageWrapper>
        <Button>Click to load</Button>
    </PageWrapper>
);

export const SaveButton = () => (
    <PageWrapper>
        <Button>Save</Button>
    </PageWrapper>
);
