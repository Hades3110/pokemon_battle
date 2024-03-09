import React from 'react';
import { Button } from '../Button';

import styles from './startBattle.module.css';

interface Props {
    onStartGame: () => void;
}

const StartBattle = ({ onStartGame }: Props) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onStartGame();
    }

    return <form className={styles.form} onSubmit={handleSubmit}>
        <Button variant="primary" type="submit">Start Game</Button>
    </form>
}

export default  StartBattle;
