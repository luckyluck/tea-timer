// @flow
import * as React from 'react';
import { Row, Col } from 'reactstrap';
import SkipButton from './components/SkipButton';

import AppContext from './context';
import { CURRENT_STEP, COUNT_VALUE } from './constants';

import BrewButton from './components/BrewButton';
import BrewCounter from './components/BrewCounter';

import ResetButton from './components/ResetButton';

import { MainContainer } from './App.styles';

const App = () => {
  const storedCount = localStorage.getItem(COUNT_VALUE) ? +localStorage.getItem(COUNT_VALUE) : -1;
  const storedStep = localStorage.getItem(CURRENT_STEP) ? +localStorage.getItem(CURRENT_STEP) : 0;

  // Initial data from context
  const { limit, periods } = React.useContext(AppContext);
  const [disabled, setDisabled] = React.useState(false);
  const [count, setCount] = React.useState(storedCount);
  const [currentStep, setCurrentStep] = React.useState(Math.min(storedStep, limit + 1));

  const start = () => {
    if (disabled) {
      return;
    }

    console.log('start timer');
    setDisabled(true);
  };

  const stop = () => {
    console.log('stop timer');
    setDisabled(false);
    skip();
  };

  const skip = () => {
    setCount(prevCount => prevCount + 1);
    setCurrentStep(prevStep => prevStep + 1);
    localStorage.setItem(CURRENT_STEP, JSON.stringify(currentStep + 1));
    localStorage.setItem(COUNT_VALUE, JSON.stringify(count + 1));
  };

  const reset = () => {
    console.log('reset timer');
    setCurrentStep(0);
    localStorage.setItem(CURRENT_STEP, '0');
    setCount(-1);
    localStorage.setItem(COUNT_VALUE, '-1');
    setDisabled(false);
  };

  return (
    <MainContainer>
      <Row>
        <Col className={'text-center'}>
          <BrewButton
            start={start}
            stop={stop}
            disabled={disabled || count >= limit}
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
          <SkipButton skip={skip} disabled={disabled || count >= limit}/>
        </Col>
        <Col>
          <ResetButton reset={reset} disabled={disabled || count < 1}/>
        </Col>
      </Row>
    </MainContainer>
  );
};

export default App;
