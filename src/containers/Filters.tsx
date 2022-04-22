import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import { MultipleSelectChip } from "../components/MultiSelect";
import { DropdownWrapper } from "../components/DropdownWrapper";
import { RangeSlider } from "../components/RangeSlider";
import styles from "../../styles/Filters.module.css";
import { AutoCompleteCheckboxes } from "../components/AutoCompleteChecboxes";
import { clearFilters, updateFilters} from "../actions/actions";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";

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
  const dispatch = useDispatch();

  // update categories
  const updateCategories = (categories: Array<string>) => {
    dispatch(updateFilters('categories', categories));
  }

  // update price range
  const updatePrice = (price: Array<number>) => {
      dispatch(updateFilters('price', price));
  }

  // update vendors
  const updateVendors = (vendors: Array<string>) => {
    dispatch(updateFilters('vendors', vendors));
  }

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
          onHandleChange={updateCategories}
        />
        <DropdownWrapper title="Price">
          <RangeSlider onHandleChange={updatePrice} />
        </DropdownWrapper>
        <AutoCompleteCheckboxes
          label="Vendors"
          options={vendorNames}
          onHandleChange={updateVendors}
        />
      </div>
      <Button disabled>Clear All</Button>
    </Box>
  )
}
