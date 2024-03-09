import { renderHook, act, RenderHookResult } from '@testing-library/react';
import { rollDice as actualRollDice  } from '../utils';
import useBattle, { Result } from './useBattle';

jest.mock('../utils');
jest.useFakeTimers();

const rollDice = actualRollDice as jest.Mock;

describe('useBattle', () => {
    let hook: RenderHookResult<Result, Result>;

    beforeEach(() => {
        hook = renderHook(() => useBattle());
    });

    it('should initially have full score for both players, not be in battle and not be attacking', () => {
        expect(hook.result.current.player.score).toBe(100);
        expect(hook.result.current.opponent.score).toBe(100);
        expect(hook.result.current.isBattleOver).toBe(false);
        expect(hook.result.current.isAttacking).toBe(false);
    });

    it('should simulate a battle when the battle function is called', async () => {
        rollDice.mockImplementationOnce(() => 45).mockImplementationOnce(() => 20);

        await act(async () => {
            hook.result.current.battle();
            jest.advanceTimersByTime(1000);
        });

        expect(hook.result.current.player.score).toBe(80);
        expect(hook.result.current.player.roll).toBe(45);

        expect(hook.result.current.opponent.score).toBe(55);
        expect(hook.result.current.opponent.roll).toBe(20);

        expect(hook.result.current.isAttacking).toBe(false);
    });
});
