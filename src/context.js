// @flow
import * as React from 'react';

type DefaultContext = {
  limit: number,
  periods: Array<number>,
};

const periods = process.env.REACT_APP_PERIODS ? process.env.REACT_APP_PERIODS.split(' ').map(i => +i) : [
  30000,  // 30 sec
  180000, // 3 min
  210000, // 3 min 30 sec
  240000, // 4 min
  270000, // 4 min 30 sec
  300000 // 5 min
];

export const defaultContext: DefaultContext = {
  limit: 5,
  periods
};

export default React.createContext<DefaultContext>();
