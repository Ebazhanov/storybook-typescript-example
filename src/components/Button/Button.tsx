import React from 'react';
import {Wrapper} from './styled';

export default function Button(props: any): any {

    const {variant = 'primary', buttonText, ...rest} = props

    return (
        <Wrapper>
            <button className={`button ${variant}`} {...rest}
                    onClick={props.onClick}
                    type='button'
            >{buttonText}
            </button>
        </Wrapper>
    );
}

export {Wrapper as StyledButton};
