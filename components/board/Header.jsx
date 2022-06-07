import React from 'react'
import stylesComponents from '../../styles/Components.module.scss'
import { FaLock, FaPlus, FaEllipsisH } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='flex items-center justify-between mx-9 pt-6'>
      <div className='flex items-center justify-start'>
        <button type="button" className={`${stylesComponents.btnSecondary} mr-1`}>
          <FaLock className='mr-2' />
          Private
        </button>
        <div className="flex items-center mx-1">
          <img className={stylesComponents.avatar} src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
        </div>
        <button type="button" className={`${stylesComponents.btnPrimary} mx-1 px-3`}>
          <FaPlus className='text-lg' />
        </button>
      </div>
      <button type="button" className={`${stylesComponents.btnSecondary} self-end`}>
        <FaEllipsisH className='mr-2' />
        Show Menu
      </button>
    </div>
  )
}

export default Header