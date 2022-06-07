import React from 'react'
import { FaPlus } from 'react-icons/fa'
import stylesComponents from '../../styles/Components.module.scss'
import BoardCards from './BoardCards'
import Modal from '../Modal'
import AddBoard from './AddBoard'

const BoardsPage = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className={`${stylesComponents.containerSection} bg-customwhite-200 relative`}>
      <div className='flex items-center justify-between mx-28 pt-10'>
        <div className='font-medium'>All Boards</div>
        <button
          type="button" className={`${stylesComponents.btnPrimary}`}
          onClick={() => setShowModal(true)}
        >
          <FaPlus className='mr-2' />
          Add
        </button>
        <Modal showModal={showModal} setShowModal={setShowModal} >
          <AddBoard showModal={showModal} setShowModal={setShowModal} />
        </Modal>
      </div>
      <BoardCards />
      <div className='bottom-3 absolute text-customgray-200 w-full text-sm text-center'>
        © 2020 Ait karmi Mouad, devchallenges.io
      </div>
    </div>
  )
}

export default BoardsPage