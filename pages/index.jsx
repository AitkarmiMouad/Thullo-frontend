import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Login from './auth/login'
import Boards from './boards/index'

import { useStoreState } from 'easy-peasy'

const Home = () => {

  const posts = useStoreState((state) => state.posts);

  return (
    <div>
      <Head>
        <title>Thullo</title>
        <meta name="description" content="Thullo App" />
        <link rel="icon" href="/favcon.ico" />
      </Head>
      {true ? <Login/> : <Boards/> }
      {posts}
    </div>
  )
}

export default Home
