import * as React from 'react';

const BeforeUnload = () => {
  React.useEffect(() => {
    window.addEventListener('beforeunload', preventAnNotify);

    return () => {
      window.removeEventListener('beforeunload', preventAnNotify);
    };
  }, []);

  const preventAnNotify = event => {
    // Cancel the event
    event.preventDefault();
    // Chrome requires returnValue to be set
    event.returnValue = '';
  };

  return null;
};

export default BeforeUnload;
