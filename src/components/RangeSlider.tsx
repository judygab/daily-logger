import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

export const RangeSlider = ({ onHandleChange } : { onHandleChange : (updatedRange: Array<number>) => void}) => {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    onHandleChange(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300, paddingTop: '30px' }}>
          <Slider
            getAriaLabel={() => 'Range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
          />
    </Box>
  )
}
