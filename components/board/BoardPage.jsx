import React from 'react'
import stylesComponents from '../../styles/Components.module.scss'
import Header from './Header'
import Kanban from './Kanban'

const BoardPage = () => {
  return (
    <div className={`${stylesComponents.containerSection} bg-white relative`}>
      <Header/>
      <Kanban/>
    </div>
  )
}

export default BoardPage