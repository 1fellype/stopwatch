import './App.css';
import React, { useState } from 'react';


const App = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    const id = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
    setIntervalId(id);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setTime(time); // Atualiza o estado do tempo quando parado
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="App">
      <div className="timer">
        <div className="time">{formatTime()}</div>
      </div>
      <div className="buttons">
        <button className="start" onClick={startTimer}>Iniciar</button>
        <button className="stop" onClick={stopTimer}>Parar</button>
        <button className="reset" onClick={resetTimer}>Zerar</button>
      </div>
    </div>
  );
};

export default App;


