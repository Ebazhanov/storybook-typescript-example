import styled from 'styled-components';

const Wrapper = styled.button`
    background-color: transparent;
    border: 1px solid;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    padding: 9px 36px;

    &:disabled {
        pointer-events: none;
        cursor: not-allowed;
        background-color: lightgray;
    }

    &:hover {
        background-color: rgba(0, 149, 179, 0.1);
        border-color: rgba(0, 149, 179, 0.8);
    }

    &:active {
        background-color: rgba(5, 102, 121, 0.1);
        border-color: red;
        color: gray;
    }
`;

export { Wrapper };
