import React from 'react';
import {Wrapper} from './styled';

export default function Button(props: any): any {
    return (
        <Wrapper>
            <button
                onClick={props.onClick}
                type='button'
            >{props.children}
            </button>
        </Wrapper>
    );
}

export {Wrapper as StyledButton};
