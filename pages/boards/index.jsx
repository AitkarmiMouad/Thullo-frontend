import React from 'react'
import ProtectedRoute from '../../components/ProtectedRoute'
import BoardsComponent from '../../components/boards/BoardsComponent'
import Layout from '../../components/Layout'

const Boards = () => {
  return (
    <Layout>
      <ProtectedRoute component={<BoardsComponent />} />
    </Layout>
  )
}


export default Boards