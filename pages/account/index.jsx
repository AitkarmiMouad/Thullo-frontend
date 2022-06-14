import React from 'react'
import ProtectedRoute from '../../components/ProtectedRoute'
import Layout from '../../components/Layout'
import Account from '../../components/account/Account'


const account = () => {
  return (
    <Layout>
      <ProtectedRoute component={<Account />} />
    </Layout>
  )
}

export default account