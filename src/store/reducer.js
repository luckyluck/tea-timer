import { START_TIMER, STOP_TIMER, RESET_TIMER } from './actionTypes';

const initialState = {
  count: 0,
  limit: 5,
  periods: [
    3000, // 30000, // 30 sec
    18000, // 180000, // 3 min
    21000, // 210000, // 3 min 30 sec
    24000, // 240000, // 4 min
    27000, // 270000, // 4 min 30 sec
    30000 // 300000 // 5 min
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
        count: state.step === 0 ? 0 : state.count + 1,
        step: state.step + 1,
        disabled: state.count + 1 >= state.limit
      };
    }
    case RESET_TIMER: {
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
