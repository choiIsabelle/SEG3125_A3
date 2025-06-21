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

  // retreive the game status from the GamePage component and set gameOver and hasPlayerWon states
  const getGameStatus = (status, gameResult) => {
    setHasPlayerWon(gameResult);
    setGameOver(status);
  }

  const handlePlayAgain = () => {
    setIsPlayerReady(false);
    setGameReady(false);
    setGameOver(false);
    setHasPlayerWon(false);
  }

  const handleNavigate = (page) => {
    switch (page) {
      case 'landing':
        setIsPlayerReady(false);
        setGameReady(false);
        setGameOver(false);
        setHasPlayerWon(false);
        break;
      default:
        break;
    }
  }

  return (
    <>
    <Navbar handleNavigate={handleNavigate}/>
    {!isPlayerReady && !gameReady && <LandingPage handleGameStart={handleGameStart} />}
    {isPlayerReady && <GetInfos handleGetInfos={handleGetInfos} />}
    {gameReady && !gameOver && <GamePage name={playerName} difficulty={playerLevel} getGameStatus={getGameStatus} />}
    {gameOver && <GameOverPage status={hasPlayerWon} setPlayAgain={handlePlayAgain} />}
    </>
  )
}

export default App
