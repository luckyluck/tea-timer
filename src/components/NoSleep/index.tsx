import * as React from 'react';

interface Props {
  active: boolean,
}

const NoSleep = ({ active }: Props) => {
  return active ? (
    <video
      src="assets/nosleep.mov"
      autoPlay={true}
      loop={true}
      muted={true}
      style={{
        width: 0,
        height: 0,
        position: 'absolute',
        top: 0,
        left: 0
      }}
    />
  ) : null;
};

export default NoSleep;
