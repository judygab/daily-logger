import React, { useState, useEffect } from 'react';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

export default function CustomizedInputBase({ onInputUpdate } : {
  onInputUpdate: (text: string) => void
}) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (searchValue === '' && !buttonDisabled) {
      setButtonDisabled(true);
    } else if(searchValue !== '' && buttonDisabled) {
      setButtonDisabled(false);
    }
    const delayDebounceFn = setTimeout(() => {
      onInputUpdate(searchValue)
    }, 3000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchValue])

  return (
    <Paper
        component="form"
        sx={{ p: '2px 0px', display: 'flex', alignItems: 'center', width: 780, height: 'fit-content', marginTop: '20px' }}
      >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button disabled={buttonDisabled}>Clear</Button>
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
