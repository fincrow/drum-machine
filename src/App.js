import './App.css';
import heater1 from './assets/Heater-1.mp3';
import heater2 from './assets/Heater-2.mp3';
import heater3 from './assets/Heater-3.mp3';
import heater4 from './assets/Heater-4_1.mp3';
import clap from './assets/Heater-6.mp3';
import openHH from './assets/Dsc_Oh.mp3';
import kickNHat from './assets/Kick_n_Hat.mp3';
import kick from './assets/RP4_KICK_1.mp3';
import closedHH from './assets/Cev_H2.mp3';
import DrumPad from './components/drum-pad';
import VolumeSlider from './components/volume-slider';
import PowerButton from './components/power-button';
import React, { useState } from 'react';

const audioFiles = {
  'Q': { name: 'Heater 1', path: heater1 },
  'W': { name: 'Heater 2', path: heater2 },
  'E': { name: 'Heater 3', path: heater3 },
  'A': { name: 'Heater 4', path: heater4 },
  'S': { name: 'Clap', path: clap },
  'D': { name: 'Open HH', path: openHH },
  'Z': { name: 'Kick N Hat', path: kickNHat },
  'X': { name: 'Kick', path: kick },
  'C': { name: 'Closed HH', path: closedHH },
};

function App() {
  const [display, updateDisplay] = useState('');
  const [volume, changeVolume] = useState(50);
  const [power, changePower] = useState(true);

  return (
    <div id="drum-machine">
      <div id="drum-pad-section">
        {Object.entries(audioFiles).map(([key, value]) => (
          <DrumPad
            key={key}
            letter={key}
            audioFile={value.path}
            audioName={value.name}
            updateDisplay={updateDisplay}
            volume={volume}
            power={power}
          />
        ))}
      </div>
      <div id="display-section">
        <PowerButton 
          changePower={changePower}
        />
        <div id="display">{display}</div>
        <VolumeSlider 
          volume={volume}
          changeVolume={changeVolume}
        />
      </div>
    </div>
  );
}

export default App;
