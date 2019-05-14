// @flow
import * as React from 'react';

import { Button, CountDown } from './index.styles';
import { toMinutesAndSeconds } from '../../utils/helpers';

type Props = {
    disabled: boolean,
    step: number,
    start: Function,
    stop: Function,
    time: number
};

const BrewButton = ({ disabled, start, stop, step, time }: Props) => {
    const [intervalId, setIntervalId] = React.useState(null);
    const [timer, setTimer] = React.useState(time);

    React.useEffect(() => {
      // Checking if it's time to stop timer
      if (timer <= 0) {
        clearInterval(intervalId);
        setIntervalId(null);
        stop();
      }
    }, [timer]);

    const handleClick = () => {
        // Clearing any existing interval
        clearInterval(intervalId);
        start();

        setIntervalId(
          setInterval(() => {
            // Update timer
            setTimer(prevTimer => prevTimer - 1000);
          }, 1000)
        );
    };

    return (
        <Button disabled={disabled} onClick={handleClick}>
            {step === 0 ? 'First brewing' : 'Brew'}
            <CountDown>{toMinutesAndSeconds(timer)}</CountDown>
        </Button>
    );
};

export default BrewButton;
