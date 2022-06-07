import React from "react";
import { FaEllipsisH } from 'react-icons/fa'
import stylesComponents from '../../styles/Components.module.scss'

const List = ({ children }) => {

  return (
    <div className="flex flex-col w-72 min-w-max">
      <div className="flex flex-row justify-between items-center">
        <div className="font-medium">Backlog 🤔</div>
        <button className={`${stylesComponents.btnSecondary} bg-transparent active:bg-gray-200`}>
          <FaEllipsisH className='' />
        </button>
      </div>
      {children}
    </div>
  )
};

export default List;