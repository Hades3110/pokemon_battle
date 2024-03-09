import axios from 'axios';
import { getRandomPokemon } from './pokeService';
import { IPokemon } from '../interface';
import * as utils from '../utils';

jest.mock('axios');

describe('getRandomPokemon', () => {
    it('fetches a random Pokemon from PokeAPI', async () => {
        const mockResponseData: IPokemon = {
            name: 'name',
            id: 1,
            sprites: {
                front_default: ''
            }
        };

        const mockInt = 123
        const mockRandomInt = jest.spyOn(utils, 'getRandomInt');
        mockRandomInt.mockReturnValue(mockInt);

        const mockedAxios = axios as jest.Mocked<typeof axios>;
        mockedAxios.get.mockResolvedValue({ data: mockResponseData });

        const randomPokemon = await getRandomPokemon();

        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(mockedAxios.get).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/pokemon/${mockInt}`); // replace 123 with the generated random ID

        expect(randomPokemon).toEqual(mockResponseData);
    });

    it('handles errors gracefully', async () => {
        const errorMessage = 'Failed to fetch Pokemon';
        const mockedAxios = axios as jest.Mocked<typeof axios>;
        mockedAxios.get.mockRejectedValue(new Error(errorMessage));

        await expect(getRandomPokemon()).rejects.toThrow(errorMessage);
    });
});
