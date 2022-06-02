import React from 'react'
import ProtectedRoute from '../../components/ProtectedRoute'

const Boards = () => {
  return (
      <ProtectedRoute component={'hi'}/>
  )
}


export default Boards