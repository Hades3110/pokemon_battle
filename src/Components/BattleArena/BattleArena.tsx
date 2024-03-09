import { useEffect } from 'react';
import classNames from 'classnames';

import type { IPokemon } from '../../interface';

import { useBattle } from '../../hooks';
import { Pokemon } from '../Pokemon';
import { Button } from '../Button';
import { AttackSwords } from "../AttackSwords";

import styles from './battleArena.module.css';

interface Props {
    playerPokemon: IPokemon;
    opponentPokemon: IPokemon;
    getOpponentPokemon: () => void;
    onStartGame: () => void;
    clearStatistics: () => void;
    addStatistics: (isPlayerWin: boolean) => void;
}

const BattleArena = ({
   playerPokemon,
   opponentPokemon,
   getOpponentPokemon,
   onStartGame,
   clearStatistics,
   addStatistics,
}: Props) => {
    const {
        player,
        opponent,
        isBattleOver,
        isAttacking,
        battle,
    } = useBattle();

    useEffect(() => {
        if(isBattleOver) {
            addStatistics(player.score > 0);
        }
    }, [isBattleOver, player.score]);

    return(<div className={styles.container}>
            <div className={classNames(styles.pokemonContainer, styles.opponent)}>
                <h3 className={styles.heading}>Opponent's Pokemon</h3>
                <Pokemon pokemon={opponentPokemon} score={opponent.score} isAttacking={isAttacking} />
            </div>
            <div className={classNames(styles.pokemonContainer, styles.user)}>
                <h3 className={styles.heading}>Your Pokemon</h3>
                <Pokemon pokemon={playerPokemon} score={player.score} isAttacking={isAttacking} />
            </div>

            <AttackSwords isAttacking={isAttacking} />

            {isBattleOver ?
                <>
                    <h3>{player.score > 0 ? 'You Win!' : 'Game Over!'}</h3>
                    <Button variant="secondary" onClick={() => {
                        clearStatistics();
                        onStartGame();
                    }}>
                        Receive a new Pokémon
                    </Button>
                    <Button variant="primary" onClick={getOpponentPokemon}>
                        Or continue with the same one
                    </Button>
                </> :
                <>
                    <div>
                        <p className={styles.playerHit}>Your hit for: {player.roll}</p>
                        <p className={styles.opponentHit}>Your opponent hit for: {opponent.roll}</p>
                    </div>
                    <Button variant="primary" disabled={isAttacking} color="primary" onClick={battle}>Attack</Button>
                </>
            }
        </div>
    )
}

export default BattleArena;
