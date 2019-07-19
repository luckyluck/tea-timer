import * as React from 'react';
import { Row, Col } from 'reactstrap';
import { Spring } from 'react-spring/renderprops';

import { ActionButton } from './index.styles';
import { toMinutesAndSeconds } from '../../utils/helpers';

interface Props {
  disabled: boolean,
  active: boolean,
  step: number,
  start: Function,
  stop: Function,
  time: number,
  limit: number,
}

const BrewButton = ({ disabled, active, start, stop, step, time, limit }: Props) => {
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

  return (
    <Spring native from={{ scale: 1 }} to={{ scale: active ? 10 : 1 }}>
      {({ scale }) => (
        <ActionButton
          style={{
            transform: (scale as any).interpolate(scale => `scale(${scale})`),
            fontSize: active ? '80%' : '100%'
          }}
          disabled={disabled}
          onClick={handleClick}
        >
          <Row style={{ visibility: active ? 'hidden' : 'visible' }}>
            <Col>
              {getText()}
            </Col>
          </Row>
          {step <= limit && (
            <Row>
              <Col>
                {toMinutesAndSeconds(timer)}
              </Col>
            </Row>
          )}
        </ActionButton>
      )}
    </Spring>
  );
};

export default BrewButton;
