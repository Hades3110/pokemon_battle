import { renderHook, act } from "@testing-library/react";
import useStatistics from './useStatistics';

describe('useStatistics hook', () => {
    it('should initiate with zero wins and losses', () => {
        const { result } = renderHook(useStatistics);

        expect(result.current.wins).toBe(0);
        expect(result.current.losses).toBe(0);
    });

    it('calling addStatistics with true should increase wins by 1', () => {
        const { result } = renderHook(useStatistics);

        act(() => {
            result.current.addStatistics(true);
        })

        expect(result.current.wins).toBe(1);
    });

    it('calling addStatistics with false should increase losses by 1', () => {
        const { result } = renderHook(useStatistics);

        act(() => {
            result.current.addStatistics(false);
        })

        expect(result.current.losses).toBe(1);
    });

    it('clearStatistics should set wins and losses to 0', () => {
        const { result } = renderHook(useStatistics);

        act(() => {
            result.current.addStatistics(true);
            result.current.addStatistics(false);
        });

        act(() => {
            result.current.clearStatistics();
        });

        expect(result.current.wins).toBe(0);
        expect(result.current.losses).toBe(0);
    });

    it('should show statistics if there are wins or losses', () => {
        const { result } = renderHook(useStatistics);

        act(() => {
            result.current.addStatistics(true);
            result.current.addStatistics(false);
        });

        expect(result.current.shouldShowStatistics).toBe(true);

        act(() => {
            result.current.clearStatistics();
        });

        expect(result.current.shouldShowStatistics).toBe(false);
    });
});
