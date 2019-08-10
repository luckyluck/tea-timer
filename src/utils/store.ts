import { CONFIGURATION_VALUE, COUNT_VALUE, CURRENT_STEP } from './constants';

const preparation = localStorage.getItem(CONFIGURATION_VALUE.prepare) !== 'false';
const initialCount = preparation ? -1 : 0;
const initialStep = preparation ? 0 : 1;
const storedStep = localStorage.getItem(CURRENT_STEP) ? +localStorage.getItem(CURRENT_STEP) : initialStep;
const storedCount = localStorage.getItem(COUNT_VALUE) ? +localStorage.getItem(COUNT_VALUE) : initialCount;

export const SET_ACTIVITY = 'SET_ACTIVITY';
export const PREPARATION = 'PREPARATION';
export const INCREMENT_STEP = 'INCREMENT_STEP';
export const RESET = 'RESET';

export interface State {
  activity: boolean,
  preparation: boolean,
  count: number,
  currentStep: number,
  limit: 5,
  periods: Array<number>,
}

export const initialState: State = {
  preparation,
  activity: localStorage.getItem(CONFIGURATION_VALUE.activity) === 'true',
  count: initialCount,
  currentStep: initialStep,
  limit: 5,
  periods: process.env.NODE_ENV === 'development' && process.env.TIME_PERIODS ?
    process.env.TIME_PERIODS.split(' ').map(i => +i) : [
      30000,  // 30 sec
      180000, // 3 min
      210000, // 3 min 30 sec
      240000, // 4 min
      270000, // 4 min 30 sec
      300000 // 5 min
    ]
};

export const preparedState: State = {
  ...initialState,
  count: [-1, 0].includes(storedCount) ? initialCount : storedCount,
  currentStep: Math.min([0, 1].includes(storedStep) ? initialStep : storedStep, 6),
};

export const appReducer = (state: State = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVITY: {
      localStorage.setItem(CONFIGURATION_VALUE.activity, action.payload.toString());

      return {
        ...state,
        activity: action.payload
      };
    }
    case PREPARATION: {
      localStorage.setItem(CONFIGURATION_VALUE.prepare, action.payload.toString());

      let currentStep = state.currentStep;
      let count = state.count;
      if (state.currentStep === 0 && !action.payload) {
        currentStep = 1;
        count = 0;
      }
      if (state.currentStep === 1 && action.payload) {
        currentStep = 0;
        count = -1;
      }

      return {
        ...state,
        preparation: action.payload,
        currentStep,
        count,
      };
    }
    case INCREMENT_STEP: {
      localStorage.setItem(CURRENT_STEP, JSON.stringify(state.currentStep + 1));
      localStorage.setItem(COUNT_VALUE, JSON.stringify(state.count + 1));

      return {
        ...state,
        count: state.count + 1,
        currentStep: state.currentStep + 1
      };
    }
    case RESET: {
      localStorage.setItem(CURRENT_STEP, initialStep.toString());
      localStorage.setItem(COUNT_VALUE, initialCount.toString());

      return initialState;
    }
    default:
      return state;
  }
};
