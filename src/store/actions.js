import * as actionTypes from './actionTypes';

export const startTimer = () => ({ type: actionTypes.START_TIMER });

export const stopTimer = () => ({ type: actionTypes.STOP_TIMER });

export const resetCounts = () => ({ type: actionTypes.RESET_COUNTS });