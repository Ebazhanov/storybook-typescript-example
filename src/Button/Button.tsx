import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from '@emotion/styled';

const Container = styled.button<ButtonPrssops>`
    outline: none;
    border: none;
    box-sizing: border-box;
    height: 2rem;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    background: #20c997;
    color: white;
    border-radius: 0.25rem;
    line-height: 1;
    font-weight: 600;
    &:focus {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
    &:hover {
        background: #38d9a9;
    }
    &:active {
        background: #12b886;
    }
`;


interface ButtonPrssops {
    themes: string;
};

interface ButtonProps {
    /** 버튼 안의 내용 */
    children: React.ReactNode;
    /** 클릭했을 때 호출할 함수 */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /** 버튼의 생김새를 설정합니다. */
    theme: 'primary' | 'secondary' | 'tertiary';
};

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
const Button = ({ theme, children, onClick }: ButtonProps) => {
    return (
        <Container themes={theme} onClick={onClick}>
            {children}
        </Container>
    );
};

Button.defaultProps = {
    // eslint-disable-next-line react/default-props-match-prop-types
    theme: 'primary',
    // eslint-disable-next-line react/default-props-match-prop-types
    size: 'medium'
};

export default Button;
