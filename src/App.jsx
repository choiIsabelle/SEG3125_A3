import React from 'react'
import './App.css'
import LandingPage from './LandingPage'
import Navbar from './Navbar'
import GamePage from './GamePage'
import GetInfos from './GetInfos'
import GameOverPage from './GameOverPage'

function App() {
  const [isPlayerReady, setIsPlayerReady] = React.useState(false);
  const [gameReady, setGameReady] = React.useState(false);
  const [gameOver, setGameOver] = React.useState(false);
  const [hasPlayerWon, setHasPlayerWon] = React.useState(false);

  const [playerName, setPlayerName] = React.useState('');
  const [playerLevel, setPlayerLevel] = React.useState(1);

  const handleGameStart = () => {
    setIsPlayerReady(true) 
  };

  const handleGetInfos=(name, level) => {
    setPlayerName(name);
    setPlayerLevel(level);
    setIsPlayerReady(false);
    setGameReady(true);
  }

  const getGameStatus = (status, gameResult) => {
    console.log("What is the gameResult?", gameResult);
    setHasPlayerWon(gameResult);
    setGameOver(status);
  }

  const handlePlayAgain = () => {
    setIsPlayerReady(false);
    setGameReady(false);
    setGameOver(false);
    setHasPlayerWon(false);
  }

  // console.log("Is player ready", isPlayerReady);
  // console.log("Game ready", gameReady);
  // console.log("Player name", playerName);
  // console.log("Player level", playerLevel);
  console.log("Game over", gameOver);


  return (
    <>
    <Navbar />
    {!isPlayerReady && !gameReady && <LandingPage handleGameStart={handleGameStart} />}
    {isPlayerReady && <GetInfos handleGetInfos={handleGetInfos} />}
    {gameReady && !gameOver && <GamePage name={playerName} difficulty={playerLevel} getGameStatus={getGameStatus} />}
    {gameOver && <GameOverPage status={hasPlayerWon} setPlayAgain={handlePlayAgain} />}
    </>
  )
}

export default App
