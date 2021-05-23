import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { Chip } from '@material-ui/core';
import { AutocompletePropsTypes } from './types';
import { StyledChipContainer, StyledTextInput } from './styled';

function AutocompleteComponent(props: AutocompletePropsTypes) {
    const { AutocompleteProps, onDelete } = props;
    const { options, defaultValue, getOptionLabel, value, onChange } = AutocompleteProps;

    return (
        <>
            <Autocomplete
                multiple
                options={options}
                defaultValue={defaultValue}
                getOptionLabel={getOptionLabel}
                value={value}
                onChange={onChange}
                renderTags={() => null}
                renderInput={(params) => <StyledTextInput {...params} variant="outlined" label="select options" />}
            />
            <StyledChipContainer>
                {value.map((v) => (
                    <div key={v.title}>
                        <Chip key={v.title} label={v.title} onDelete={onDelete} />
                    </div>
                ))}
            </StyledChipContainer>
        </>
    );
}

export default AutocompleteComponent;
