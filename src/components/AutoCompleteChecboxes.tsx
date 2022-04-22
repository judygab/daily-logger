import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface AutoCompleteProps {
  label: string
  options: Array<string>
  onHandleChange: (updatedList: Array<string>) => void
}

interface Option {
  title: string
}

export const AutoCompleteCheckboxes: React.FC<AutoCompleteProps> = ({ label,options, onHandleChange }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleOnCheckUpdate = (event, newValue) => {
    setSelectedValues(newValue);
    onHandleChange(newValue);
  }

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={options}
      disableCloseOnSelect
      onChange={(event, newValue) => {
        handleOnCheckUpdate(event, newValue)
      }}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            value={option}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      style={{ width: 150, margin: "8px" }}
      renderInput={(params) => (
        <TextField {...params} label={label} />
      )}
    />
  );
}
