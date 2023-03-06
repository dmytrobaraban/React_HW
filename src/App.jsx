import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0); // час в секундах
  const [timerOn, setTimerOn] = useState(false);
  const [savedTimes, setSavedTimes] = useState([]);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1); // зменшуємо час на 1 секунду
      }, 1000);
    } else {
      clearInterval(interval); // зупиняємо таймер
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  const startTimer = () => {
    setTimerOn(true);
  };

  const stopTimer = () => {
    setSavedTimes([...savedTimes, time]);
    setTimerOn(false);
  };

  const resetTimer = () => {
    setTime(0);
    setTimerOn(false);
    setSavedTimes([]);
  };

  // конвертуємо час у формат HH:MM:SS
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="container">
      <h2>{formatTime(time)}</h2>
      <div className="btn">
        {!timerOn && <button onClick={startTimer}>Start</button>}
        {timerOn && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div className="btn">
        <button onClick={() => setTime(60)}>1 minute</button>

        <button onClick={() => setTime(180)}>3 minute</button>
      </div>
      <ul>
        {savedTimes.map((time, index) => (
          <li key={index}>{formatTime(time)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
