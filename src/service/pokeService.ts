import axios from 'axios';
import type { IPokemon } from '../interface';
import { getRandomInt } from '../utils';

const baseURL = "https://pokeapi.co/api/v2/";

const MAX_NUM_OF_POKEMON = 500;

export const getRandomPokemon = async (): Promise<IPokemon> => {
    const pokemonId = getRandomInt(MAX_NUM_OF_POKEMON);
    const response = await axios.get(`${baseURL}pokemon/${pokemonId}`);

    return response.data;
}
