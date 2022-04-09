import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearhBar from "../src/components/SearchBar";
import Box, { BoxProps } from '@mui/material/Box';
import { purple } from '@mui/material/colors';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
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
      </Box>
    </div>
  )
}

export default Home
