import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import { displayNotification } from './utils/helpers';
import { preparedState, appReducer, INCREMENT_STEP, RESET } from './utils/store';

import SkipButton from './components/SkipButton';
import BrewButton from './components/BrewButton';
import BrewCounter from './components/BrewCounter';
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
    if (state.count >= state.limit) {
      reset();
      return;
    }

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
      <MainContainer container active={disabled}>
        <Settings state={state} update={dispatch}/>
        <Grid container>
          <Grid item xs={12}>
            <ButtonCol item xs={12} className={'text-center'}>
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
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <BrewCounter count={state.count} limit={state.limit}/>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <SkipButton skip={skip} disabled={state.count >= state.limit}/>
          </Grid>
        </Grid>
      </MainContainer>
    </>
  );
};

export default App;
