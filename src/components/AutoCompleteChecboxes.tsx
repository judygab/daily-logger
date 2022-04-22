import * as React from 'react';
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
  onHandleChange?: (updatedList: Array<string>) => void
}

interface Option {
  title: string
}

export const AutoCompleteCheckboxes: React.FC<AutoCompleteProps> = ({ label,options, onHandleChange }) => {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={options}
      disableCloseOnSelect
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
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
