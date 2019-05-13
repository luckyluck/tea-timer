import styled from 'styled-components';

export const Button = styled.button`
  padding: 1rem 2rem;
  margin: 1rem 0;
  background-color: #4d4dff;
  border: 1px solid #3333ff;
  color: #fff;
  text-transform: uppercase;
  &:active {
      background-color: #3333ff;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #808080;
    border-color: #404040;
  }         
`;