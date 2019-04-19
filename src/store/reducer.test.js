import appReducer from './reducer';
import * as actions from './actions';

const initialState = { count: 0, step: 0, limit: 5 };
const filledInitialState = { count: 5, step: 6, disabled: true };

describe('App reducer', () => {
  it('should return the initial state', () => {
    expect(appReducer({}, {})).toEqual({});
  });

  it('should handle START_TIMER', () => {
    expect(appReducer({}, actions.startTimer()).disabled).toBeTruthy();
  });

  it('should handle STOP_TIMER and increase step without count first time', () => {
    expect(appReducer(initialState, actions.stopTimer()).count).toBe(0);
  });

  it('should handle STOP_TIMER and increase step and count after first time', () => {
    expect(appReducer({ ...initialState, step: 1 }, actions.stopTimer()).count).toBe(initialState.count + 1);
  });

  it('should handle STOP_TIMER and set disabled as false before the limit is reached', () => {
    expect(appReducer(initialState, actions.stopTimer()).disabled).toBeFalsy();
  });

  it('should handle STOP_TIMER and keep disabled as true after the limit is reached', () => {
    expect(appReducer({ ...initialState, step: 5, count: 4 }, actions.stopTimer()).disabled).toBeTruthy();
  });

  it('should handle RESET_TIMER', () => {
    expect(appReducer(filledInitialState, actions.resetTimer())).toEqual({ count: 0, step: 0, disabled: false });
  });
});