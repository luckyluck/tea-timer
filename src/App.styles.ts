import styled, { createGlobalStyle }  from 'styled-components';
import { Container, Col } from 'reactstrap';

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
  min-width: 320px;
  height: 100vh;
  position: relative;
  
  & > div {
    width: 100%;
  }
`;


export const ButtonCol = styled(Col)`
  padding: 0;
  display: flex;
  justify-content: center;
`;
