// @flow
import * as React from 'react';
import { Progress } from 'reactstrap';

import { getProgress } from '../../utils/helpers';

type Props = {
  count: number,
  limit: number,
};

const BrewCounter = ({ count, limit }: Props) => (
  <>
    <div className={'text-center'}>
      {count === -1 ? 'Prepare your tea' : `Count: ${count}`}
    </div>
    <Progress value={getProgress(count, limit)}/>
  </>
);

export default BrewCounter;
