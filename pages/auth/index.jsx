import React from 'react'
import Login from './login'
import Boards from '../boards/index'

const Auth = () => {
  return (
    <div>
      {true ? <Login /> : <Boards />}
    </div>
  )
}

export default Auth