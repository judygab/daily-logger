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

const Home: NextPage = () => {
  const state = useSelector((state: RootStateOrAny) => state);
  console.log(state);

  const COLUMNS = [
    "Transaction Name",
    "Amount",
    "Category",
    "Vendor"
  ]

  let categories = Array.from(new Set(transactions.map(transaction => transaction.category)));
  let names = Array.from(new Set(transactions.map(transaction => transaction.transaction_name)));
  let amountRange = [0, 1000];

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
          width: '70%',
          margin: 'auto',
          height: '400px'
        }}
        >
        <SearhBar />
        <Filters />
      </Box>
      <DataTable
        columns={COLUMNS}
        data={transactions}
      />
    </div>
  )
}

export default Home
