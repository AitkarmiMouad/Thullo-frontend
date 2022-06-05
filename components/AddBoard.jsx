import React from 'react'
import styles from '../styles/Board.module.scss'
import stylesNavBar from '../styles/Navbar.module.scss'
import { FaLock, FaPlus, FaTimes } from 'react-icons/fa'
import { IoMdImage } from 'react-icons/io'


const AddBoard = ({ setShowModal }) => {
  return (
    <div className={`${styles.card} p-2 h-80`}>
      <button
        type="button" className={`${stylesNavBar.iconbtn} active:bg-blue-500 bg-customblue-300 text-customwhite-100 px-3 absolute right-0`}
        onClick={(e) => setShowModal(false)}
      >
        <FaTimes className='text-lg' />
      </button>
      <div className={styles.pictureCard}>
        <img className={`${styles.pictureCardImage} h-24`} src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />
      </div>
      <div className={`${stylesNavBar.searchdiv} m-3 mt-5 border-gray-200 focus-within:border-customblue-200 `}>
        <input className={`${stylesNavBar.input} py-2`} type="text" placeholder="Add board title" aria-label="Add board title" />
      </div>
      <div className='flex flex-row mt-5'>
        <button type="button" className={`${stylesNavBar.iconbtn} mx-auto`}>
          <IoMdImage className='mr-2 text-lg' />
          Cover
        </button>
        <button type="button" className={`${stylesNavBar.iconbtn} mx-auto`}>
          <FaLock className='mr-2' />
          Private
        </button>
      </div>
      <div className='flex flex-row justify-end mt-5 m-3 '>
        <button className={styles.span} onClick={(e) => setShowModal(false)} >cancel</button>
        <button type="button" className={`${stylesNavBar.iconbtn} active:bg-blue-500 bg-customblue-300 text-customwhite-100 font-normal`}>
          <FaPlus className='mr-2' />
          Create
        </button>
      </div>
    </div>
  )
}

export default AddBoard