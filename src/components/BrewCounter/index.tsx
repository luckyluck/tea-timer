import * as React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

import { getProgress } from '../../utils/helpers';

type Props = {
  count: number;
  limit: number;
};

const CustomLinearProgress = withStyles({
  root: {
    height: 10,
  }
})(LinearProgress);

const BrewCounter = ({ count, limit }: Props) => (
  <>
    <div className={'text-center'}>
      {count === -1 ? 'Prepare your tea' : `Count: ${count}`}
    </div>
    <CustomLinearProgress value={getProgress(count, limit)} variant="determinate"/>
  </>
);

export default BrewCounter;
