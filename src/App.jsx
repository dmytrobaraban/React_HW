import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimer] = useState(false);
  const [savesTime, setSavesTime] = useState([]);

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
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  const timerStart = () => {
    soundStart.play();
    setTimer(true);
  };

  const timerStop = () => {
    soundStop.play();
    setSavesTime([...savesTime, time]);
    setTimer(false);
  };

  const resetTimer = () => {
    soundReset.play();
    timerStop();
    setTime(0);
    setSavesTime([]);
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
      <h1>{formatTime(time)}</h1>
      <div className="btn">
        {!timerOn && <button onClick={timerStart}>start</button>}
        {timerOn && <button onClick={timerStop}>stop</button>}
        <button onClick={resetTimer}>reset</button>
      </div>
      <div className="btn">
        <button onClick={() => setTime(60)}>1 minute</button>
        <button onClick={() => setTime(180)}>3 minute</button>
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
