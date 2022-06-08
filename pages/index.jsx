import BoardsPage from '../components/boards/BoardsPage'
import ProtectedRoute from '../components/ProtectedRoute'
import Layout from '../components/Layout'


const Home = () => {
  return (
    <Layout>
      <ProtectedRoute component={<BoardsPage />} />
    </Layout>
  )
}

export default Home
