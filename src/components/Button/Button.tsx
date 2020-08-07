import React from 'react';
import {ButtonWrapper} from './styled';

export default function Button(props: any): any {
    return (
        <ButtonWrapper>
            <button
                onClick={props.onClick}
                type='button'
            >{props.children}
            </button>
        </ButtonWrapper>
    );
}

export {ButtonWrapper as ButtonWrapper};
