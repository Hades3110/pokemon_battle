import { useState } from "react";
import { rollDice } from '../utils';

type PlayerType = {
    score: number;
    roll: number;
};

export interface Result {
    player: PlayerType;
    opponent: PlayerType;
    isBattleOver: boolean;
    isAttacking: boolean;
    battle: () => void;
}

const useBattle = (): Result => {
    const [player, setPlayer] = useState<PlayerType>({ score: 100, roll: 0 });
    const [opponent, setOpponent] = useState<PlayerType>({ score: 100, roll: 0 });

    const [isBattleOver, setIsBattleOver] = useState<boolean>(false);
    const [isAttacking, setIsAttacking] = useState<boolean>(false);

    const battle = () => {
        if(isAttacking) return;

        setIsAttacking(true);
        const playerRoll = rollDice();
        const opponentRoll = rollDice();

        setPlayer((prevPlayer) => {
            const newScore = prevPlayer.score - opponentRoll;
            return {
                ...prevPlayer,
                score: newScore >= 0 ? newScore : 0,
                roll: playerRoll,
            };
        });

        setOpponent((prevOpponent) => {
            const newScore = prevOpponent.score - playerRoll;
            return {
                ...prevOpponent,
                score: newScore >= 0 ? newScore : 0,
                roll: opponentRoll,
            };
        });

        if (player.score - opponentRoll <= 0 || opponent.score - playerRoll <= 0) {
            setIsBattleOver(true);
        }

        setTimeout(() => {
            setIsAttacking(false);
        }, 1000);
    };

    return {
        player,
        opponent,
        isBattleOver,
        isAttacking,
        battle
    };
};

export default useBattle;
