import { toMinutesAndSeconds } from './helpers';

/*describe('Helper functions', () => {

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

});*/
