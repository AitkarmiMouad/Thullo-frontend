import React, { useRef, useState } from "react";
import componentsStyle from '../../styles/Components.module.scss'
import boardStyle from '../../styles/Board.module.scss'
import { useDrag, useDrop } from "react-dnd";
import ITEM_TYPE from "../../utils/types";
import { FaEllipsisH } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import TextareaAutosize from 'react-textarea-autosize';

const List = ({ children, id, setLists, lists, list }) => {

  const [addCard, setAddCard] = useState(false);
  const [paramList, setParamList] = useState(false);

  const findList = (id) => {
    const list = lists.filter((l) => l.id === id)[0]
    return {
      list,
      index: lists.indexOf(list),
    }
  }

  const originalIndex = findList(id).index

  function moveList(arr, new_index, old_index) {
    if (new_index > arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr
  }

  const [, drop] = useDrop(() => ({
    accept: ITEM_TYPE.LIST,
    drop(item, monitor) {
      // target - dragged  // new - old
      if (originalIndex !== item.originalIndex) {
        setLists([...moveList(lists, findList(id).index, findList(item.id).index)])
      }
    },
    hover(item, monitor) {
      // target - dragged  // new - old
      if (monitor.canDrop())
        if (originalIndex !== item.originalIndex) {
          setLists([...moveList(lists, findList(id).index, findList(item.id).index)])
        }
    }
  }))

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ITEM_TYPE.LIST,
    item: { id, originalIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }
  ))


  return (
    <div className={`${isDragging ? 'opacity-0' : ''} flex flex-col gap-y-8 w-72 min-w-max relative`} ref={(node) => drag(drop(node))}>
      <div className="flex flex-row justify-between items-center">
        <div className="font-medium">{list.status} {list.icon}</div>
        <button className={`${componentsStyle.btnSecondary} bg-transparent active:bg-gray-200`} onClick={() => { setParamList(!paramList) }}>
          <FaEllipsisH className='' />
        </button>
        <div className={`absolute z-20 w-fit p-4 mt-2 overflow-hidden border bg-white rounded-md shadow-xl ${!paramList ? 'hidden' : ''} -right-28 top-8 `}>
          <button className={`${componentsStyle.btnSpan} w-full`}>
            Rename
          </button>
          <hr className="border-gray-200 " />
          <button className={`${componentsStyle.btnSpan} w-full`}>
            Delete
          </button>
        </div>
      </div>
      {children}
      <div className={`${!addCard ? 'hidden' : ''} ${boardStyle.card} h-full p-3`}>
        <div className=''>
          <TextareaAutosize minRows={1} className={`${componentsStyle.textBox} resize-none border-0`} placeholder="Enter a title for this card..." aria-label="Enter a title for this card..." />
          <button className={`${componentsStyle.btnPrimary} bg-green-800 active:bg-green-600 my-3 h-full`}>save</button>
        </div>
      </div>
      <button className={`${componentsStyle.lightBlueBtn}`} onClick={() => { setAddCard(!addCard) }}>
        Add another card
        <FaPlus className='ml-2' />
      </button>
    </div>
  )
};

export default List;