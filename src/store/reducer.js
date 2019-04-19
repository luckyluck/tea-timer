import { RESET_COUNTS, START_TIMER, STOP_TIMER } from './actionTypes';

const initialState = {
  count: 0,
  limit: 5,
  periods: [
    30000, // 30 sec
    180000, // 3 min
    210000, // 3 min 30 sec
    240000, // 4 min
    270000, // 4 min 30 sec
    300000 // 5 min
  ],
  step: 0,
  disabled: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER: {
      return {
        ...state,
        disabled: true
      };
    }
    case STOP_TIMER: {
      return {
        ...state,
        count: state.count + 1,
        step: state.step + 1,
        disabled: state.count >= state.limit
      };
    }
    case RESET_COUNTS: {
      return {
        ...state,
        count: 0,
        step: 0,
        disabled: false
      };
    }
    default:
      return state;
  }
};