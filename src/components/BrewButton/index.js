// @flow
import React from 'react';

import { Button } from './index.styles';

type Props = {
    disabled: boolean,
    step: number,
    start: Function
};

const BrewButton = (props: Props) => {
    return (
        <Button disabled={props.disabled} onClick={props.start}>
            {props.step === 0 ? 'First brewing' : 'Brew'}
        </Button>
    );
};

export default BrewButton;