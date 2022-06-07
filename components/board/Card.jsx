import React from "react";
import stylesBoard from '../../styles/Board.module.scss'
import { FaComments, FaPlus, FaPaperclip } from 'react-icons/fa'
import { IoMdImage } from 'react-icons/io'
import stylesComponents from '../../styles/Components.module.scss'

const Card = () => {

  return (
    <div className={`${stylesBoard.card} w-full h-fit my-5 py-4 px-3 rounded-2xl`}>
      <div className={`${stylesBoard.pictureCard} m-0`}>
        <img className={`${stylesBoard.pictureCardImage} h-36`} src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />
      </div>
      <div className="my-3 font-medium">Title</div>
      <div className="flex flex-wrap">
        <div className={`${stylesComponents.chip}`}>Default</div>
      </div>
      <div className="my-3 flex items-center justify-between">
        <div className="flex items-center justify-start">
          <div className="flex items-center mx-1">
            <img className={stylesComponents.avatar} src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
          </div>
          <button type="button" className={`${stylesComponents.btnPrimary} mx-1 px-3`}>
            <FaPlus className='text-lg' />
          </button>
        </div>
        <div className="flex items-center justify-end w-28">
          <div className={`${stylesComponents.grayLabel} px-0 ml-2`}>
            <FaComments className="mr-2" />
            <span>1</span>
          </div>
          <div className={`${stylesComponents.grayLabel} px-0 ml-2`}>
            <FaPaperclip className="mr-2" />
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;