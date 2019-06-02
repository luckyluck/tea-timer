// @flow
import * as React from 'react';
import { Row, Col, Fade } from 'reactstrap';

import AppContext from './context';

import BrewButton from './components/BrewButton';
import BrewCounter from './components/BrewCounter';
import ResetButton from './components/ResetButton';

import { MainContainer } from './App.styles';

const App = () => {
  // Initial data from context
  const { limit, periods } = React.useContext(AppContext);
  const [disabled, setDisabled] = React.useState(false);
  const [count, setCount] = React.useState(-1);
  const [currentStep, setCurrentStep] = React.useState(0);

  const start = () => {
    if (disabled) {
      return;
    }
    console.log('start timer');
    setDisabled(true);
  };

  const stop = () => {
    console.log('stop timer');
    setDisabled(count + 1 >= limit);
    setCount(prevCount => prevCount + 1);
    setCurrentStep(currentStep + 1);
  };

  const reset = () => {
    console.log('reset timer');
    setCurrentStep(0);
    setCount(-1);
    setDisabled(false);
  };

  return (
    <MainContainer>
      <Row>
        <Col className={'text-center'}>
          <BrewButton
            start={start}
            stop={stop}
            disabled={disabled}
            step={currentStep}
            time={periods[currentStep]}
            limit={limit}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <BrewCounter count={count} limit={limit}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Fade in={count > 0} className={'text-center'}>
            <ResetButton
              reset={reset}
              disabled={disabled}
            />
          </Fade>
        </Col>
      </Row>
    </MainContainer>
  );
};

export default App;
