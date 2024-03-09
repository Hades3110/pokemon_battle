import { renderHook, act, RenderHookResult } from '@testing-library/react';
import { getRandomPokemon as actualGetRandomPokemon } from '../service/pokeService';
import useRandomPokemon, { Result } from './useRandomPokemon';

jest.mock('../service/pokeService');

const getRandomPokemon = actualGetRandomPokemon as jest.Mock;

describe('useRandomPokemon', () => {
    let hook: RenderHookResult<Result, Result>;

    beforeEach(() => {
        hook = renderHook(() => useRandomPokemon());
    });

    it('should initially have null pokemon and not be loading', () => {
        expect(hook.result.current.playerPokemon).toBeNull();
        expect(hook.result.current.opponentPokemon).toBeNull();
        expect(hook.result.current.isLoading).toBe(false);
    });

    it('should fetch pokemon pair and set loading state accordingly', async () => {
        const mockPokemon1 = { name: 'Pikachu' };
        const mockPokemon2 = { name: 'Charizard' };
        getRandomPokemon.mockResolvedValueOnce(mockPokemon1).mockResolvedValueOnce(mockPokemon2);

        await act(async () => {
            await hook.result.current.getPokemonPair();
        });

        expect(hook.result.current.isLoading).toBe(false);
        expect(hook.result.current.playerPokemon).toEqual(mockPokemon1);
        expect(hook.result.current.opponentPokemon).toEqual(mockPokemon2);
    });

    it('should fetch new opponent pokemon and set loading state accordingly', async () => {
        const mockPokemon = { name: 'Bulbasaur' };
        getRandomPokemon.mockResolvedValue(mockPokemon);

        await act(async () => {
            await hook.result.current.getOpponentPokemon();
        });

        expect(hook.result.current.isLoading).toBe(false);
        expect(hook.result.current.opponentPokemon).toEqual(mockPokemon);
    });
});
