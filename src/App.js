// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { Container } from './App.styles';
import * as actions from './store/actions';
import BrewButton from './components/BrewButton';
import BrewCounter from './components/BrewCounter';
import ResetButton from './components/ResetButton';

type Props = {
  count: number,
  limit: number,
  disabled: boolean,
  step: number,
  periods: Array<number>,
  onStart: Function,
  onStop: Function,
  onReset: Function
};

const App = (props: Props) => {
  const start = () => {
    if (props.disabled) {
      return;
    }
    console.log('start timer');
    props.onStart();
  };

  const stop = () => {
    console.log('stop timer');
    props.onStop();
  };

  const reset = () => {
    console.log('reset timer');
    props.onReset();
  };


  return (
    <Container>
      <BrewButton
        start={start}
        stop={stop}
        disabled={props.disabled}
        step={props.step}
        time={props.periods[props.step]}
      />
      <BrewCounter count={props.count}/>
      <ResetButton
        reset={reset}
        disabled={(props.disabled || props.count === 0) && props.count < props.limit}
      />
    </Container>
  );
}

const mapStateToProps = state => ({
  count: state.app.count,
  limit: state.app.limit,
  disabled: state.app.disabled,
  step: state.app.step,
  periods: state.app.periods
});
const mapDispatchToProps = dispatch => ({
  onStart: () => dispatch(actions.startTimer()),
  onStop: () => dispatch(actions.stopTimer()),
  onReset: () => dispatch(actions.resetTimer())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
