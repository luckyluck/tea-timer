import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

import { ButtonContainer, TextContainer, ProgressCircle } from './index.styles';
import { toMinutesAndSeconds } from '../../utils/helpers';

type Props = {
  disabled: boolean;
  active: boolean;
  step: number;
  start: Function;
  stop: Function;
  time: number;
  limit: number;
};

const CustomCircularProgress = withStyles({
  root: {
    color: '#ffffff'
  }
})(CircularProgress);

const BrewButton = ({ disabled, active, start, stop, step, time, limit }: Props) => {
  // diameter is 300, stroke width is 4, radius is (diameter / 2) - (2 * strokeWidth)
  const radius = 142;
  const circumference = 2 * radius * Math.PI;
  const [intervalId, setIntervalId] = React.useState(null);
  const [timer, setTimer] = React.useState(time);

  React.useEffect(() => {
    // Checking if it's time to stop timer
    if (timer <= 0 && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setTimeout(stop, 1000);
    }
    // Updating timer after every step increase
    if (!intervalId && (!timer || timer !== time)) {
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
      return step === 0 ? 'Preparing' : 'Brewing';
    }

    switch (true) {
      case step === 0:
        return 'Prepare';
      case step > limit:
        return 'Refresh';
      default:
        return 'Brew';
    }
  };

  const getProgress = () => Math.ceil(((time - timer) * 100) / time);

  const getFillColor = React.useCallback(() => {
    if (active) return 'transparent';
    if (disabled) return '#6c757d';
    return '#007bff';
  }, [active, disabled]);

  return (
    <ButtonContainer onClick={handleClick}>
      <CustomCircularProgress variant="static" value={getProgress()} size={300}/>
      <TextContainer style={{ backgroundColor: getFillColor() }}>
        <span style={{ visibility: active ? 'hidden' : 'visible' }}>
          {getText()}
        </span>
        {step <= limit && (
          <span>
            {toMinutesAndSeconds(timer)}
          </span>
        )}
      </TextContainer>
    </ButtonContainer>
  );
};

export default BrewButton;
