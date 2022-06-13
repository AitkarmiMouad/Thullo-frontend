import React from 'react'
import boardStyle from '../../styles/Board.module.scss'
import componentsStyle from '../../styles/Components.module.scss'
import { FaLock, FaPlus, FaTimes } from 'react-icons/fa'
import { IoMdImage } from 'react-icons/io'

const CardInfo = ({setShowModal}) => {

  return (
    <div className={`${boardStyle.card} p-2 h-96`}>
      <button
        type="button" className={`${componentsStyle.btnPrimary} mr-2 px-3 absolute right-0`}
        onClick={(e) => setShowModal(false)}
      >
        <FaTimes className='text-lg' />
      </button>
    </div>
  )
}

export default CardInfo