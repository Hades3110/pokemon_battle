import { getRandomInt, rollDice } from './index';

describe('Utils', () => {
    it('getRandomInt should return number within range 1 - max', () => {
        const max = 10;
        const result = getRandomInt(max);
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(max);
    });

    it('rollDice should return number within range 1 - 6', () => {
        const result = rollDice();
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(6);
    });
});
