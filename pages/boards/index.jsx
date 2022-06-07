import React from 'react'
import ProtectedRoute from '../../components/ProtectedRoute'
import Layout from '../../components/Layout'
import Boards from '../../components/boards/BoardsPage'

const BoardsPage = () => {
  return (
    <Layout>
      <ProtectedRoute component={<Boards />} />
    </Layout>
  )
}


export default BoardsPage