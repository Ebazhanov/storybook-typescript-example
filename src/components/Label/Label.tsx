import React from 'react';
import {Wrapper} from './styled';

export default function Label():any {
    return (
        <Wrapper htmlFor="htmlFor">
            <div className="RequiredIndicator">*</div>
            <div className="TooltipWrapper">Label</div>
        </Wrapper>
    );
}

export {Wrapper as StyledLabel};
