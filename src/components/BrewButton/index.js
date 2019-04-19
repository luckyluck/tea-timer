// @flow
import React from 'react';

import { Button } from './index.styles';

type Props = {
    disabled: boolean,
    start: Function
};

const BrewButton = (props: Props) => {
    return (
        <Button disabled={props.disabled} onClick={props.start}>Brew</Button>
    );
};

export default BrewButton;