import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearhBar from "../src/components/SearchBar";
import Box, { BoxProps } from '@mui/material/Box';
import { purple } from '@mui/material/colors';
import { Filters } from "../src/containers/Filters";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { DataTable } from "../src/components/DataTable";
import { transactions } from "../src/data/mock_transactions";
import { Divider } from "../src/components/Divider";
import { clearFilters, updateFilters} from "../src/actions/actions";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const COLUMNS = [
    "Transaction Name",
    "Amount",
    "Category",
    "Vendor"
  ]

  let categories = Array.from(new Set(transactions.map(transaction => transaction.category)));
  let names = Array.from(new Set(transactions.map(transaction => transaction.transaction_name)));
  let vendorNames = Array.from(new Set(transactions.map(transaction => transaction.transaction_vendor)));
  let amountRange = [0, 1000];

  // Search Bar Value Update
  const onSearchTextUpdate = (text: string) => {
    dispatch(updateFilters('searchText', text));
  }

  return (
    <div className={styles.container}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 1,
          m: 1,
          bgcolor: purple[500],
          borderRadius: 1,
          margin: 'auto',
          marginBottom: '10px',
          height: '400px'
        }}
        >
        <h1 className={styles.searchHeader}>Search Transactions</h1>
        <SearhBar
          onInputUpdate={onSearchTextUpdate}
        />
        <Divider />
        <Filters
          categories={categories}
          names={names}
          amountRange={amountRange}
          vendorNames={vendorNames}
        />
      </Box>
      <DataTable
        columns={COLUMNS}
        data={transactions}
      />
    </div>
  )
}

export default Home
