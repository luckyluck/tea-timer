// @flow
import * as React from 'react';
import { Row, Col } from 'reactstrap';

import AppContext from './context';

import BrewButton from './components/BrewButton';
import BrewCounter from './components/BrewCounter';
import ResetButton from './components/ResetButton';

import { MainContainer } from './App.styles';

const App = () => {
  // Initial data from context
  const { limit, periods } = React.useContext(AppContext);
  const [disabled, setDisabled] = React.useState(false);
  const [count, setCount] = React.useState(0);
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
    if (currentStep > 0) {
      setCount(prevCount => prevCount + 1);
    }
    setCurrentStep(currentStep + 1);
  };

  const reset = () => {
    console.log('reset timer');
    setCurrentStep(0);
    setCount(0);
    setDisabled(false);
  };


  return (
    <MainContainer>
      <Row>
        <Col>
          <BrewButton
            start={start}
            stop={stop}
            disabled={disabled}
            step={currentStep}
            time={periods[currentStep]}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <BrewCounter count={count}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <ResetButton
            reset={reset}
            disabled={(disabled || count === 0) && count < limit}
          />
        </Col>
      </Row>
    </MainContainer>
  );
};

export default App;
