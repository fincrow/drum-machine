import React, { useState, useEffect } from 'react';

function DrumPad({ letter, audioFile, audioName, updateDisplay, volume, power }) {
  const idName = audioFile.replace('.mp3', '');
  const [isPressed, setIsPressed] = useState(false);

  const playSound = () => {
    if(power) {
      const audio = document.getElementById(letter);
      updateDisplay(audioName);
      audio.currentTime = 0;
      audio.volume = volume/100;
      audio.play(); 
      setIsPressed(true);
    }
    else {
      return;
    }
  };

  const handleKeyPress = (event) => {
    if (event.key.toUpperCase() === letter) {
      playSound();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [letter, volume, power]);

  const handleButtonPress = () => {
    playSound();
  };

  useEffect( () => {
    if(isPressed) {
      const timeout = setTimeout(()=>{
        setIsPressed(false);
      }, 100);
      return () => clearTimeout(timeout)
    }
  },[isPressed]);

  return (
    <button
      className={`drum-pad ${isPressed ? 'pressed' : ''}`}
      id={idName}
      onClick={handleButtonPress} 
    >
      {letter}
      <audio id={letter} src={audioFile}></audio>
    </button>
  );
}

export default DrumPad;
