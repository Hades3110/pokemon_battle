import { useState } from 'react';
import { getRandomPokemon } from '../service/pokeService';
import type { IPokemon } from '../interface';

type PokemonState = IPokemon | null;

export interface Result {
    playerPokemon: PokemonState;
    opponentPokemon: PokemonState;
    getPokemonPair: () => Promise<void>;
    getOpponentPokemon: () => Promise<void>;
    isLoading: boolean;
}

const useRandomPokemon = (): Result => {
    const [playerPokemon, setPlayerPokemon] = useState<PokemonState>(null);
    const [opponentPokemon, setOpponentPokemon] = useState<PokemonState>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getPokemonPair = async () => {
        setIsLoading(true);
        const fetchedPokemon1 = await getRandomPokemon();
        const fetchedPokemon2 = await getRandomPokemon();
        setPlayerPokemon(fetchedPokemon1);
        setOpponentPokemon(fetchedPokemon2);
        setIsLoading(false);
    }

    const getOpponentPokemon = async () => {
        setIsLoading(true);
        const fetchedPokemon = await getRandomPokemon();
        setOpponentPokemon(fetchedPokemon);
        setIsLoading(false);
    }

    return {
        playerPokemon,
        opponentPokemon,
        getPokemonPair,
        getOpponentPokemon,
        isLoading,
    }
}

export default useRandomPokemon;
