import * as React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

type Props = {
  disabled: boolean;
  skip(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
};

const CustomButton = withStyles({
  root: {
    width: '100%'
  }
})(Button);

const SkipButton = ({ disabled, skip }: Props) => (
  <CustomButton variant="contained" color={'primary'} disabled={disabled} onClick={skip}>
    Skip step
  </CustomButton>
);

export default SkipButton;
