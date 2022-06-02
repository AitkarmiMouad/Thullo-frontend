import type { NextPage } from 'next'
import React from 'react'
import ProtectedRoute from '../../components/ProtectedRoute'

const Boards: NextPage = () => {
  return (
      <ProtectedRoute component={''}/>
  )
}


export default Boards