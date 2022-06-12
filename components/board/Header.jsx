import React, { useState } from 'react'
import componentsStyle from '../../styles/Components.module.scss'
import { FaLock, FaPlus, FaEllipsisH } from 'react-icons/fa'
import { IoEarth } from 'react-icons/io5'
import Invitation from './Invitation'

const Header = ({setShowSideBar}) => {

  const [visibility, setVisibility] = useState(false)
  const [showInvitation, setShowInvitation] = useState(false)

  return (
    <div className='flex items-center justify-between mx-9 pt-6 relative'>
      <div className='flex items-center justify-start'>
        <button type="button" className={`${componentsStyle.btnSecondary} mr-1`} onClick={() => { setVisibility(!visibility) }}>
          <FaLock className='mr-2' />
          Private
        </button>



        <div className={`absolute z-20 w-fit p-4 mt-2 overflow-hidden border bg-white rounded-md shadow-xl ${!visibility ? 'hidden' : ''}  left-0 top-16 `}>
          <div className='font-medium'>
            Visibility
          </div>
          <div className={componentsStyle.grayLabel}>
            Choose who can see to this board.
          </div>
          <div className={`flex flex-col mt-4`}>
            <div className='active:bg-gray-300 hover:bg-gray-200 p-4 rounded-md'>
              <div className='flex flex-row items-center'>
                <IoEarth className='mr-2' />
                <div>Public</div>
              </div>
              <div className={componentsStyle.grayLabel}>
                Anyone on the internet can see this.
              </div>
            </div>
          </div>
          <div className={`flex flex-col mt-4`}>
            <div className='bg-customgray-100 active:bg-gray-300 hover:bg-gray-200 p-4 rounded-md'>
              <div className='flex flex-row items-center'>
                <FaLock className='mr-2' />
                <div>Private</div>
              </div>
              <div className={componentsStyle.grayLabel}>
                Only board members can see this
              </div>
            </div>
          </div>

        </div>


        <div className="flex items-center mx-1">
          <img className={componentsStyle.avatar} src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
        </div>
        <div className='relative'>

        <button type="button" className={`${componentsStyle.btnPrimary} mx-1 px-3`} onClick={()=>{setShowInvitation(!showInvitation)}}>
          <FaPlus className='text-lg' />
        </button>
        {showInvitation && <Invitation type='board'/> }
        </div>
      </div>
      <button type="button" className={`${componentsStyle.btnSecondary} self-end`} onClick={()=>{setShowSideBar(true)}} >
        <FaEllipsisH className='mr-2' />
        Show Menu
      </button>
    </div>
  )
}

export default Header