import type { IPokemon } from '../../interface';
import { HealthBar } from '../HealthBar';

import styles from './pokemon.module.css';

interface Props {
    pokemon: IPokemon;
    score: number;
    isAttacking: boolean;
}

const Pokemon = ({ pokemon, score, isAttacking }: Props) => {

    return <div className={styles.container}>
        <h2 className={styles.heading}>Pokemon name: {pokemon.name}</h2>
        <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            style={isAttacking ? { transform: 'scale(1.1)' } : {}}
        />
        <HealthBar current={score} max={100} />
    </div>
}

export default Pokemon;
