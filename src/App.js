import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import BrewButton from './components/BrewButton';
import BrewCounter from './components/BrewCounter';
import ResetButton from './components/ResetButton';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <BrewButton/>
        <BrewCounter count={0}/>
        <ResetButton/>
      </Container>
    );
  }
}

export default App;
