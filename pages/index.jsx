import Boards from './boards/index'
import ProtectedRoute from '../components/ProtectedRoute'


const Home = () => {
  return (
    <ProtectedRoute component={<Boards />} />
  )
}

export default Home
