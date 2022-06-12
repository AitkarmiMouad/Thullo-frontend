import React from 'react'
import { useRouter } from 'next/router'
import ProtectedRoute from '../../../components/ProtectedRoute'
import Layout from '../../../components/Layout'
import Modal from '../../../components/Modal'
import BoardPage from '../../../components/board/BoardPage'
import CardInfo from '../../../components/board/CardInfo'

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