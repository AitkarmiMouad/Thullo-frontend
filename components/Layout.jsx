import Navbar from './navbar/Navbar'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout