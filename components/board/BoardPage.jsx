import React, { useState } from 'react'
import componentsStyle from '../../styles/Components.module.scss'
import Header from './Header'
import Kanban from './Kanban'
import SideBar from './SideBar'

const BoardPage = () => {

  const [showSideBar, setShowSideBar] = useState(false)

  return (
    <div className={`${componentsStyle.containerSection} bg-white`}>
      {showSideBar && <SideBar setShowSideBar={setShowSideBar} />}
      <Header setShowSideBar={setShowSideBar}/>
      <Kanban/>
    </div>
  )
}

export default BoardPage