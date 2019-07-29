import * as React from 'react';

import { Permissions } from '../../utils/enums';
import { NOTIFICATION_KEY } from '../../utils/constants';

const Notification = () => {
  React.useEffect(() => {
    (async () => {
      const madeDecision = localStorage.getItem(NOTIFICATION_KEY);

      if ('Notification' in window && !madeDecision) {
        const state: Permissions = await (window as any).Notification.requestPermission();
        if (state !== Permissions.default) {
          // If a user make a decision, we should save it to avoid requesting permission later
          localStorage.setItem(NOTIFICATION_KEY, state);
        }
      }
    })();
  }, []);

  return null;
};

export default Notification;
