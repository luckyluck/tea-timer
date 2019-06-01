// @flow
import React from 'react';

const BrewCounter = ({ count }) => (
  <span>{count === -1 ? 'Prepare your tee' : `Count: ${count}`}</span>
);

export default BrewCounter;
