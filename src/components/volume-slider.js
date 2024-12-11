import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

export default function VolumeSlider({volume, changeVolume}) {

  const handleChange = (event, newValue) => {
    changeVolume(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        <VolumeDown />
        <Slider 
            aria-label="Volume" 
            value={volume} 
            onChange={handleChange}
            min={0}
            max={100}
            sx={{
                color: 'rgb(222, 184, 135)', 
                '& .MuiSlider-thumb': { 
                    backgroundColor: 'rgb(128, 128, 128)',
                    width: 10, 
                    height: 20, 
                    borderRadius: 1
                 }}}
        />
        <VolumeUp />
      </Stack>
    </Box>
  );
}