import React from 'react';
import styles from './healthBar.module.css';

interface HealthBarProps {
    current: number;
    max?: number;
}

const HealthBar: React.FC<HealthBarProps> = ({ current, max = 100 }) => {
    const width = (current / max) * 100;
    const healthColor = current > 20 ? '#76d275' : 'firebrick';

    return (
        <>
            <span className={styles.text}>{current}/{max}</span>
            <div className={styles.progress}>
                <div className={styles.health} style={{width: `${width}%`, backgroundColor: healthColor }}>
                </div>
            </div>
        </>
    );
}

export default HealthBar;
