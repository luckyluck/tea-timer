import styled from 'styled-components';

export const Button = styled.button`
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #ff3333;
    border-color: #990000;
    color: #fff;
    &:active {
        background-color: #ff0000;
    }
    &:disabled {
      cursor: not-allowed;
      background-color: #808080;
      border-color: #404040;
    }
`;