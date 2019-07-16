import * as React from 'react';

const periods = process.env.NODE_ENV === 'development' && process.env.TIME_PERIODS ?
  process.env.TIME_PERIODS.split(' ').map(i => +i) : [
    30000,  // 30 sec
    180000, // 3 min
    210000, // 3 min 30 sec
    240000, // 4 min
    270000, // 4 min 30 sec
    300000 // 5 min
  ];

export const defaultContext = {
  limit: 5,
  periods
};

export default React.createContext(defaultContext);
