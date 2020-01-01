import styled, { createGlobalStyle }  from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const GlobalStyle = createGlobalStyle`
  #root {
    overflow: hidden;
  }
`;

export const MainContainer = styled(Grid)<{ active?: boolean }>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  min-width: 320px;
  height: 100vh;
  position: relative;
  background-color: ${({ active = false }) => active ? '#007bff' : '#ffffff'};
  padding: 0 15px;

  & > div {
    width: 100%;
  }
`;


export const ButtonCol = styled(Grid)`
  padding: 0;
  display: flex;
  justify-content: center;
`;
