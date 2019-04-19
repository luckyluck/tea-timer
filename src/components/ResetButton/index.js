// @flow
import React from 'react';

import { Button } from './index.styles';

type Props = {
    disabled: boolean,
    reset: Function
};

const ResetButton = (props: Props) => {
    return (
        <Button disabled={props.disabled} onClick={props.reset}>Reset</Button>
    );
};

export default ResetButton;