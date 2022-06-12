import React from 'react'
import { FaTh } from 'react-icons/fa'
import componentsStyle from '../../styles/Components.module.scss'

const NavBoardInfo = () => {
  return (
    <div className='ml-16 hidden md:flex h-full items-center'>
      <div className='font-medium mx-4 justify-center'>
        DevChalenges
      </div>
      <hr className="border-0 bg-gray-400 w-px h-9 m-0" />
      <button type="button" className={`${componentsStyle.btnSecondary} mx-4 h-10`}>
        <FaTh className='mr-2' />
        Boards
      </button>
    </div>
  )
}

export default NavBoardInfo