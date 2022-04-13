import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearhBar from "../src/components/SearchBar";
import Box, { BoxProps } from '@mui/material/Box';
import { purple } from '@mui/material/colors';
import { Filters } from "../src/containers/Filters";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../src/components/Layout";

const Home: NextPage = () => {
  const state = useSelector((state: RootStateOrAny) => state);
  console.log(state);
  return (
    <Layout />
  )
}

export default Home
