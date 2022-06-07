import React from 'react'
import { useRouter } from 'next/router'
import ProtectedRoute from '../../../components/ProtectedRoute'
import Layout from '../../../components/Layout'
import BoardPage from '../../../components/board/BoardPage'

const Board = () => {
  const router = useRouter()
  const { idBoard } = router.query

  return (
    <Layout>
      <ProtectedRoute component={<BoardPage />} />
    </Layout>
  )
}

export default Board