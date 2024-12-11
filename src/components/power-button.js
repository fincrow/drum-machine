import * as React from 'react';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

export default function PowerButton({ changePower }) {
  return (
    <Stack spacing={0} direction="column" sx={{ alignItems: 'center', mb: -3 }}>
      <Typography variant="body1" sx={{ fontFamily: 'Trebuchet MS, sans-serif' }}>
        Power
      </Typography>
      <Switch 
        defaultChecked
        onChange={ (event) => changePower(event.target.checked) } 
        sx={{
        '& .MuiSwitch-thumb': {
          backgroundColor: 'rgb(125, 125, 125)',
          width: 10, 
          height: 20, 
          borderRadius: 1
        },

        '& .MuiSwitch-track': {
          backgroundColor: 'rgb(235, 235, 235)',
          opacity: 1,
          borderRadius: 1,
          border: '1px solid rgb(222, 184, 135)',
        },

        '& .Mui-checked + .MuiSwitch-track': {
          backgroundColor: 'rgb(222, 184, 135)',
          borderRadius: 1,
          opacity: 1,
        },

        }}
        />
    </Stack>
  );
}