import styles from '../styles/Home.module.scss'
import Login from './auth/login'
import Boards from './boards/index'

const Home = () => {
  return (
    <div>
      {true ? <Login/> : <Boards/> }
    </div>
  )
}

export default Home
