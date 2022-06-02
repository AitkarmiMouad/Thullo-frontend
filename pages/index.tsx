import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Login from './auth/login'
import Boards from './boards/index'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Thullo</title>
        <meta name="description" content="Thullo App" />
        <link rel="icon" href="/favcon.ico" />
      </Head>
      {true ? <Login/> : <Boards/> }
    </div>
  )
}

export default Home
