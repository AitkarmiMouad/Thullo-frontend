import React from 'react'
import {useRouter} from 'next/router'
import ProtectedRoute from '../../components/ProtectedRoute'
import CardInfo from '../../components/board/CardInfo'

const Card = () => {

  const router = useRouter()

  const {idCard}= router.query

  return (
    <ProtectedRoute component={<CardInfo />} />
  )
}

export default Card