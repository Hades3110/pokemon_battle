import React from 'react';
import { useRandomPokemonPair, useStatistics } from './hooks';
import { StartBattle } from './Components/StartBattle';
import { BattleArena } from './Components/BattleArena';
import { Loading } from "./Components/Loading";

import styles from './app.module.css';

function App() {

  const {
      playerPokemon,
      opponentPokemon,
      getPokemonPair,
      getOpponentPokemon,
      isLoading
  } = useRandomPokemonPair();

  const {
      wins,
      losses,
      shouldShowStatistics,
      clearStatistics,
      addStatistics,
  } = useStatistics();

  const isGameStarted = playerPokemon && opponentPokemon  && !isLoading;

  return (
      <div className={styles.container}>
          <h1 className={styles.heading}>Pokemon Battle</h1>
          {shouldShowStatistics &&
            <div>
              <h2 className={styles.heading}>Wins: {wins} <br/> Losses: {losses}</h2>
            </div>
          }
          {isGameStarted && <BattleArena
              playerPokemon={playerPokemon}
              opponentPokemon={opponentPokemon}
              getOpponentPokemon={getOpponentPokemon}
              onStartGame={getPokemonPair}
              clearStatistics={clearStatistics}
              addStatistics={addStatistics}
          />}
          {isLoading && <Loading/>}
          {!isLoading && !isGameStarted && <StartBattle onStartGame={() => getPokemonPair()}/>}
      </div>
  );
}

export default App;
