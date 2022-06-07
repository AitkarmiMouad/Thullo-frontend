import BoardsPage from './boards/BoardsPage'
import ProtectedRoute from '../components/ProtectedRoute'


const Home = () => {
  return (
    <ProtectedRoute component={<BoardsPage />} />
  )
}

export default Home
