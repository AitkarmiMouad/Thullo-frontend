import Navbar from './navbar/Navbar'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='relative'>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout