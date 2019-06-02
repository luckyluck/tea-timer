// @flow
import * as React from 'react';
import { Button } from 'reactstrap';

type Props = {
  disabled: boolean,
  reset: Function
};

const ResetButton = (props: Props) => (
  <Button outline color={'secondary'} disabled={props.disabled} onClick={props.reset}>
    Reset
  </Button>
);

export default ResetButton;
