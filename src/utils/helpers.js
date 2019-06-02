// @flow
/**
 * Function converts number to string with minutes and seconds
 * @function toMinutesAndSeconds
 * @param {number} time - a number which should be positive and 59 minutes 59 seconds as a maximum
 * @returns {string}
 */
export const toMinutesAndSeconds = (time: number): string => {
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
  if (x < 1) {
    return 0;
  }

  return parseInt(x * 100 / fullNumber, 10);
};
