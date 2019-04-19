import * as actionTypes from './actionTypes';

export const startTimer = () => ({ type: actionTypes.START_TIMER });

export const stopTimer = () => ({ type: actionTypes.STOP_TIMER });

export const resetTimer = () => ({ type: actionTypes.RESET_TIMER });