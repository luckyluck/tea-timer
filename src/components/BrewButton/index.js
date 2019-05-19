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
      if (timer <= 0 && intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
        stop();
      }
      // Updating timer after every step increase
      if (!intervalId && !timer) {
        setTimer(time);
      }
    }, [timer, time]);

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

    const getText = () => {
      if (intervalId) {
        return 'Brewing...';
      }

      switch(step) {
        case 0:
          return 'First brewing';
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          return 'Brew';
        default:
          return 'Refresh'
      }
    };

    return (
        <Button disabled={disabled} onClick={handleClick}>
            {getText()}
            <CountDown>{toMinutesAndSeconds(timer)}</CountDown>
        </Button>
    );
};

export default BrewButton;
