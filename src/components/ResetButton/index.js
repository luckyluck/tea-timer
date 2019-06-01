// @flow
import React from 'react';
import { Button } from 'reactstrap';

// import { Button } from './index.styles';

type Props = {
  disabled: boolean,
  reset: Function
};

const ResetButton = (props: Props) => (
  <Button outline color={'secondary'} disabled={props.disabled} onClick={props.reset}>Reset</Button>
);

export default ResetButton;
