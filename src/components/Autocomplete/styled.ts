import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const StyledChipContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const StyledTextInput = styled(TextField)`
    .MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall {
        display: none;
    }
`;

export { StyledChipContainer, StyledTextInput };
