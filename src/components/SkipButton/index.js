// @flow
import * as React from 'react';
import { Button } from 'reactstrap';

type Props = {
  disabled: boolean,
  skip: Function
};

const SkipButton = ({ disabled, skip }: Props) => (
  <Button color={'info'} block={true} disabled={disabled} onClick={skip}>
    Skip step
  </Button>
);

export default SkipButton;
