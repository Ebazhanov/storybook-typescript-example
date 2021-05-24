import React, { useState } from 'react';
import { PageWrapper } from '../storybook';
import AutocompleteComponent from '../Autocomplete';
import { OptionType } from '../Autocomplete/types';

export default {
    title: 'Components/Autocomplete',
    component: AutocompleteComponent,
};

const top100Films: OptionType[] = [
    { title: 'The Shawshank Redemption' },
    { title: 'The Godfather' },
    { title: 'The Dark Knight' },
    { title: '12 Angry Men' },
];

export const Default = () => {
    const [value, setValue] = useState<OptionType[]>([]);

    return (
        <PageWrapper>
            <AutocompleteComponent
                onDelete={(title) => {
                    setValue((prevValue) => prevValue.filter((v) => v.title !== title));
                }}
                AutocompleteProps={{
                    options: top100Films,
                    defaultValue: [top100Films[13]],
                    getOptionLabel: (option) => option.title,
                    value,
                    onChange: (e, newValue) => setValue(newValue),
                }}
            />
        </PageWrapper>
    );
};
