import * as React from 'react';
import { Row, Col } from 'reactstrap';

import { displayNotification } from './utils/helpers';
import { preparedState, appReducer, INCREMENT_STEP, RESET } from './utils/store';

import SkipButton from './components/SkipButton';
import BrewButton from './components/BrewButton';
import BrewCounter from './components/BrewCounter';
import ResetButton from './components/ResetButton';
import NoSleep from './components/NoSleep';
import BeforeUnload from './components/BeforeUnload';
import Notification from './components/Notification';
import Settings from './components/Settings';

import { GlobalStyle, MainContainer, ButtonCol } from './App.styles';

const App = () => {
  const [state, dispatch] = React.useReducer(appReducer, preparedState);
  const [disabled, setDisabled] = React.useState(false);

  const start = () => {
    if (disabled) return;

    console.log('start timer');
    setDisabled(true);
  };

  const stop = () => {
    console.log('stop timer');
    setDisabled(false);
    skip();
    displayNotification(state.count === -1 ? 'Your tea has been prepared!' : 'Your tea is ready!');
  };

  const skip = () => {
    dispatch({ type: INCREMENT_STEP });
  };

  const reset = () => {
    console.log('reset timer');
    dispatch({ type: RESET });
    setDisabled(false);
  };

  return (
    <>
      <NoSleep active={state.activity || disabled}/>
      {disabled && <BeforeUnload/>}
      <Notification/>
      <GlobalStyle/>
      <MainContainer>
        <Settings state={state} update={dispatch}/>
        <Row>
          <ButtonCol className={'text-center'}>
            <BrewButton
              start={start}
              stop={stop}
              active={disabled}
              disabled={state.count >= state.limit}
              step={state.currentStep}
              time={state.periods[state.currentStep]}
              limit={state.limit}
            />
          </ButtonCol>
        </Row>
        <Row>
          <Col>
            <BrewCounter count={state.count} limit={state.limit}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <SkipButton skip={skip} disabled={state.count >= state.limit}/>
          </Col>
          <Col>
            <ResetButton reset={reset} disabled={state.count < 0}/>
          </Col>
        </Row>
      </MainContainer>
    </>
  );
};

export default App;
