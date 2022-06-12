import React from 'react'
import boardStyle from '../../styles/Board.module.scss'
import componentsStyle from '../../styles/Components.module.scss'
import { FaLock, FaPlus, FaTimes } from 'react-icons/fa'
import { IoMdImage } from 'react-icons/io'


const AddBoard = ({ setShowModal }) => {
  return (
    <div className={`${boardStyle.card} p-2 h-80`}>
      <button
        type="button" className={`${componentsStyle.btnPrimary} mr-2 px-3 absolute right-0`}
        onClick={(e) => setShowModal(false)}
      >
        <FaTimes className='text-lg' />
      </button>
      <div className={boardStyle.pictureCard}>
        <img className={`${boardStyle.pictureCardImage} h-24`} src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />
      </div>
      <div className={`${componentsStyle.searchDiv} mx-3`}>
        <input className={`${componentsStyle.textBox} py-2`} type="text" placeholder="Add board title" aria-label="Add board title" />
      </div>
      <div className='flex flex-row mt-5'>
        <button type="button" className={`${componentsStyle.btnSecondary} mx-auto`}>
          <IoMdImage className='mr-2 text-lg' />
          Cover
        </button>
        <button type="button" className={`${componentsStyle.btnSecondary} mx-auto`}>
          <FaLock className='mr-2' />
          Private
        </button>
      </div>
      <div className='flex flex-row justify-end mt-5 m-3 '>
        <button className={componentsStyle.btnSpan} onClick={(e) => setShowModal(false)} >cancel</button>
        <button type="button" className={`${componentsStyle.btnPrimary} ml-3`}>
          <FaPlus className='mr-2' />
          Create
        </button>
      </div>
    </div>
  )
}

export default AddBoard