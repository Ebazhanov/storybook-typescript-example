import React, { forwardRef, memo } from 'react';

import { ButtonProps } from './types';
import { Wrapper } from './styled';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { children, disabled = false, onClick, secondary = false, type = 'button', ...rest } = props;

    return (
        <Wrapper disabled={disabled} onClick={onClick} ref={ref} type={type}>
            {children}
        </Wrapper>
    );
});

export { Wrapper as StyledButton };
export default memo(Button);
