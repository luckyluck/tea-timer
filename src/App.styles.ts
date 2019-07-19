import styled, { createGlobalStyle }  from 'styled-components';
import { Container } from 'reactstrap';

export const GlobalStyle = createGlobalStyle`
  #root {
    overflow: hidden;
  }
`;

export const MainContainer = styled(Container)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  
  & > div {
    width: 100%;
  }
`;
