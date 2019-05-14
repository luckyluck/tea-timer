// @flow
/**
 * Function converts number to string with minutes and seconds
 * @function toMinutesAndSeconds
 * @param {number} time
 * @returns {string}
 */
export const toMinutesAndSeconds = (time: number): string => {
  const minutes = Math.floor(time / (60 * 1000));
  const seconds = (time - minutes * 60 * 1000) / 1000;

  return `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
};