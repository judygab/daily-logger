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
  amountRange,
  vendorNames
}: {
  categories: Array<string>,
  names: Array<string>,
  amountRange: Array<number>,
  vendorNames: Array<string>
}) => {
  return (
    <Box sx={{
      width: '780px',
      backgroundColor: 'white',
      borderColor: "rgba(0, 0, 0, 0.1)",
      borderWidth: "1px",
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '15px',
      borderBottomRightRadius: "4px",
      borderBottomLeftRadius: "4px",
    }}>
      <div className={styles.filtersContainer}>
        <MultipleSelectChip
          title="Categories"
          list={categories}
        />
        <DropdownWrapper title="Price">
          <RangeSlider />
        </DropdownWrapper>
        <AutoCompleteCheckboxes
          options={vendorNames}
        />
      </div>
      <Button disabled>Clear All</Button>
    </Box>
  )
}
