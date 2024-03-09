import { useState } from 'react';

const useStatistics = () => {
    const [wins, setWins] = useState<number>(0);
    const [losses, setLosses] = useState<number>(0);

    const clearStatistics = () => {
        setWins(0);
        setLosses(0);
    }

    const addStatistics = (isUserWin: boolean) => {
        isUserWin ? setWins(prev => prev + 1) : setLosses(prev => prev + 1);
    }

    const shouldShowStatistics = !!wins || !!losses;

    return {
        wins,
        losses,
        shouldShowStatistics,
        clearStatistics,
        addStatistics
    }
}

export default useStatistics;
