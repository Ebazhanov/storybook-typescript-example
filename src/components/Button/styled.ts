import styled from 'styled-components';

export const Wrapper = styled.button`
    .button {
      border:none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .primary {background-color: #008CBA;} /*blue*/
    .secondary {background-color: #e7e7e7; color: black} /*Gray*/
    .success {background-color: #4CAF50;} /*Green*/
    .danger {background-color: #f44336;} /*Red*/
`;
