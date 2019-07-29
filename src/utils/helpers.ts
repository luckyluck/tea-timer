import { NOTIFICATION_KEY } from './constants';
import { Permissions } from './enums';

/**
 * Function converts number to string with minutes and seconds
 * @function toMinutesAndSeconds
 * @param {number} time - a number which should be positive and 59 minutes 59 seconds as a maximum
 * @returns {string}
 */
export const toMinutesAndSeconds = (time?: number): string => {
  // Setting limit to 59 minutes 59 seconds
  const limit = 60 * 60 * 1000 - 1000;

  if (time === null || !isFinite(time) || time < 0 || time > limit) {
    return '00:00';
  }

  const minutes = Math.floor(time / (60 * 1000));
  const seconds = Math.floor((time - minutes * 60 * 1000) / 1000);

  return `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
};

/**
 * Calculates percentage for given 2 numbers - x and full number
 * @param {number} x
 * @param {number} fullNumber
 * @returns {number}
 */
export const getProgress = (x: number, fullNumber: number) => {
  // TypeScript will fail if we try to provide not-number as arguments
  if (!x || !fullNumber || typeof x !== 'number' || typeof fullNumber !== 'number' || x < 1) return 0;
  // This case is invalid
  if (x > fullNumber) return 0;

  return Math.floor(x * 100 / fullNumber);
};

/**
 * Display user notification, either via service worker, or via window.Notification
 * @param message - a text message to display
 */
export const displayNotification = async (message: string) => {
  const permission = localStorage.getItem(NOTIFICATION_KEY);

  // Do not send notification is a user hasn't granted permission yet
  if (!permission || permission === Permissions.denied) return;

  if ('serviceWorker' in navigator && (window as any).swRegistration) {
    try {
      const { swRegistration: { scope } } = (window as any);
      const registration = await navigator.serviceWorker.getRegistration(scope);
      await registration.showNotification(message);
    } catch (e) {
      console.log('Things happen:', e);
    }
  }
};
