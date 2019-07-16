import * as React from 'react';
import { Button } from 'reactstrap';

interface Props {
  disabled: boolean,
  reset: Function
}

const ResetButton = ({ disabled, reset }: Props) => (
  <Button color={'secondary'} block={true} disabled={disabled} onClick={reset}>
    Reset
  </Button>
);

export default ResetButton;
