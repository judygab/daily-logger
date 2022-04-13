import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import MultipleSelectChip from "../components/MultiSelect";
import { DropdownWrapper } from "../components/DropdownWrapper";
import styles from "../../styles/Filters.module.css";

export const Filters = () => {
  return (
    <Box sx={{
      width: '600px',
      backgroundColor: 'white',
      borderColor: "rgba(0, 0, 0, 0.1)",
      borderWidth: "1px",
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <div className={styles.filtersContainer}>
        <MultipleSelectChip />
        <DropdownWrapper title="dropdown" />
      </div>
      <Button disabled>Clear All</Button>
    </Box>
  )
}
