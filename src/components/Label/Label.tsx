import React from 'react';
import {LabelWrapper} from './styled';

export default function Label():any {
    return (
        <LabelWrapper htmlFor="htmlFor">
            <div className="RequiredIndicator">*</div>
            <div className="TooltipWrapper">Label</div>
        </LabelWrapper>
    );
}

export {LabelWrapper as LabelWrapper};
