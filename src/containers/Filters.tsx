import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import { MultipleSelectChip } from "../components/MultiSelect";
import { DropdownWrapper } from "../components/DropdownWrapper";
import { RangeSlider } from "../components/RangeSlider";
import styles from "../../styles/Filters.module.css";
import { AutoCompleteCheckboxes } from "../components/AutoCompleteChecboxes";

export const Filters = ({
  categories,
  names,
  amountRange
}: {
  categories: Array<string>,
  names: Array<string>,
  amountRange: Array<number>
}) => {
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
        <MultipleSelectChip
          title="Categories"
          list={categories}
        />
        <DropdownWrapper title="dropdown">
          <RangeSlider />
        </DropdownWrapper>
      </div>
      <Button disabled>Clear All</Button>
    </Box>
  )
}
