import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0); // час в секундах
  const [timerOn, setTimer] = useState(false);
  const [savesTime, setSavesTime] = useState([]);
  const [stopped, setStopped] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const soundStart = new Audio(
    'https://cdn.videvo.net/videvo_files/audio/premium/audio0086/watermarked/el_interface_button_22_hpx_preview.mp3'
  );
  const soundStop = new Audio(
    'https://cdn.videvo.net/videvo_files/audio/premium/audio0086/watermarked/el_interface_click_13_hpx_preview.mp3'
  );
  const soundReset = new Audio(
    'https://cdn.videvo.net/videvo_files/audio/premium/audio0038/watermarked/Babylon5DoorButto%20PE1090302_preview.mp3'
  );

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 0.1);
      }, 100); // оновлюємо кожні 100 мілісекунд
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (timerOn && Math.round(time) === 0) {
      setTimer(false);
      setTime(0);
      alert('Time is out!');
    }
  }, [timerOn, time]);

  useEffect(() => {
    const savedTime = localStorage.getItem('savedTimes');
    if (savedTime) {
      setSavesTime(JSON.parse(savedTime));
    }
  }, []);

  const timerStart = () => {
    setTimer(true);
    soundStart.play();
  };

  const timerContinue = () => {
    setTimer(true);
    setStopped(false);
    soundStart.play();
  };

  const timerStop = () => {
    setTimer(false);
    setSavesTime([...savesTime, time]);
    setStopped(true);
    soundStop.play();
  };

  const resetTimer = () => {
    setTimer(false);
    const newArray = [...savesTime]; // зберігаємо поточний список за сесію (до reset)
    localStorage.setItem('savedTimes', JSON.stringify(newArray)); //записуємо в localstorage 
    setTime(0);
    setSavesTime([]);
    setIsReset(true);
    soundReset.play();
  };

  // конвертуємо час у формат HH:MM:SS:MSMS
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
    const milliseconds = Math.floor((time % 1) * 1000)
      .toString()
      .padStart(4, '0');
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="container">
      <h1>{formatTime(time)}</h1>
      <div className="btn">
        {(!timerOn && !stopped) || isReset ? (
          <button onClick={timerStart}>Start</button>
        ) : (
          <button onClick={timerContinue}>Continue</button>
        )}
        <button onClick={timerStop}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div className="btn">
        <button onClick={() => setTime(2)}>1 minute</button>
        <button onClick={() => setTime(180)}>3 minute</button>
        <button onClick={() => setTime(300)}>5 minute</button>
      </div>
      <ul>
        {savesTime.map((time, index) => (
          <li key={index}>{formatTime(time)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
