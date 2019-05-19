// @flow
import * as React from 'react';

type DefaultContext = {
  limit: number,
  periods: Array<number>,
  step: number,
};

export const defaultContext: DefaultContext = {
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
};

export default React.createContext<DefaultContext>();
