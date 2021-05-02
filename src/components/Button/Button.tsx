import React, { memo } from 'react';
import { StyledButton } from './styled';
import { ComponentProps } from './types';

function Button(props: ComponentProps) {
    const { onClick, children, id } = props;

    return (
        <StyledButton id={id} onClick={onClick}>
            {children}
        </StyledButton>
    );
}

export { StyledButton };
export default memo(Button);
