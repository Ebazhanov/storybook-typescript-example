import React from "react";
import Button from "../Button/Button";
import {PageWrapper} from "../storybook";

export default {
    title: 'Components/Button',
    component: Button,
};

export const LoadButton = () => (
    <PageWrapper>
        <Button>Click to Load</Button>
    </PageWrapper>
);
