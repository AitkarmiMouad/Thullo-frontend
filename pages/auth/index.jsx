import React from 'react'
import Boards from '../b/index'
import ProtectedRoute from '../../components/ProtectedRoute'

const Auth = () => {
  return (
    <ProtectedRoute component={<Boards />} path='/' />
  )
}

export default Auth