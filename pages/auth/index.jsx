import React from 'react'
import Boards from '../boards/index'
import ProtectedRoute from '../../components/ProtectedRoute'

const Auth = () => {
  return (
    <ProtectedRoute component={<Boards/>}/>
  )
}

export default Auth