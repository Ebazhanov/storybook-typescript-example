import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Chip } from '@material-ui/core';
import { AutocompletePropsTypes, OptionType } from './types';
import { StyledChipContainer, StyledTextInput } from './styled';

const AutocompleteComponent = (props: AutocompletePropsTypes) => {
    const { onDelete, ...rest } = props;

    return (
        <>
            <Autocomplete
                {...rest}
                renderTags={() => null}
                renderInput={(params) => <StyledTextInput {...params} variant="outlined" label="select options" />}
            />
            <StyledChipContainer>
                {onDelete &&
                    rest.value !== null &&
                    rest.value !== undefined &&
                    (rest.value as OptionType[]).map((v) => (
                        <div key={v.title}>
                            <Chip key={v.title} label={v.title} onDelete={() => onDelete(v.title)} />
                        </div>
                    ))}
            </StyledChipContainer>
        </>
    );
};

export default AutocompleteComponent;
