import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { Container } from './App.styles';
import * as actions from './store/actions';
import BrewButton from './components/BrewButton';
import BrewCounter from './components/BrewCounter';
import ResetButton from './components/ResetButton';

class App extends Component {
  start = () => {
    const { disabled, step, periods } = this.props;
    if (disabled) {
      return;
    }

    console.log('start timer');
    this.props.onStart();
    setTimeout(this.stop, periods[step]);
  };

  stop = () => {
    console.log('stop timer');
    this.props.onStop();
  };

  reset = () => {
    console.log('reset timer');
    this.props.onReset();
  };

  render() {
    const { count, disabled, step, limit } = this.props;

    return (
      <Container>
        <BrewButton start={this.start} disabled={disabled} step={step}/>
        <BrewCounter count={count}/>
        <ResetButton reset={this.reset} disabled={(disabled || count === 0) && count < limit}/>
      </Container>
    );
  }
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
  onReset: () => dispatch(actions.resetCounts())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
