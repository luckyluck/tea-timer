import { toMinutesAndSeconds, getProgress } from './helpers';

describe('Helper functions', () => {

  describe('toMinutesAndSeconds', () => {
    describe('should return all zeros', () => {
      it('if time is 0', () => {
        expect(toMinutesAndSeconds(0)).toBe('00:00');
      });

      it('if time is invalid', () => {
        expect(toMinutesAndSeconds(null)).toBe('00:00');
      });

      it('if time was not provided', () => {
        expect(toMinutesAndSeconds()).toBe('00:00');
      });

      it('if time is negative', () => {
        expect(toMinutesAndSeconds(-1)).toBe('00:00');
      });

      it('if time is bigger than 59 minutes 59 seconds', () => {
        expect(toMinutesAndSeconds(60 * 60 * 1000)).toBe('00:00');
      });
    });

    it('should return properly formatted string without minutes', () => {
      expect(toMinutesAndSeconds(59000)).toBe('00:59');
    });

    it('should return properly formatted string without seconds', () => {
      expect(toMinutesAndSeconds(120000)).toBe('02:00');
    });

    it('should return properly formatted string with minutes and seconds', () => {
      expect(toMinutesAndSeconds(125000)).toBe('02:05');
    });
  });

  describe('getProgress', () => {
    it('should return zero if x or fullNumber is invalid', () => {
      expect(getProgress(0, 100)).toBe(0);
      expect(getProgress(100, 0)).toBe(0);
      expect(getProgress(100, 1)).toBe(0);
      expect(getProgress(-5, 10)).toBe(0);
      expect(getProgress(5, -10)).toBe(0);
    });

    it('should return valid value rounded to the floor', () => {
      expect(getProgress(5, 33)).toBe(15);
      expect(getProgress(3, 11)).toBe(27);
      expect(getProgress(9, 77)).toBe(11);
      expect(getProgress(13, 75)).toBe(17);
      expect(getProgress(100, 111)).toBe(90);
    });
  });

});
