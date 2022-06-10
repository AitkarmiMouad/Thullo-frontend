import React from "react";
import { FaEllipsisH } from 'react-icons/fa'
import stylesComponents from '../../styles/Components.module.scss'
import { useDrag, useDrop } from "react-dnd";
import ITEM_TYPE from "../../utils/types";

const List = ({ children, id, setLists, lists, list }) => {

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
      if (originalIndex !== item.originalIndex) {;
        setLists([...moveList(lists, findList(id).index, findList(item.id).index)])
      }
    },
    hover(item, monitor) {
      // target - dragged  // new - old
      if(monitor.canDrop())
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
    <div className={`${isDragging ? 'opacity-0' : ''} flex flex-col gap-y-8 w-72 min-w-max`} ref={(node) => drag(drop(node))}>
      <div className="flex flex-row justify-between items-center">
        <div className="font-medium">{list.status} {list.icon}</div>
        <button className={`${stylesComponents.btnSecondary} bg-transparent active:bg-gray-200`}>
          <FaEllipsisH className='' />
        </button>
      </div>
      {children}
    </div>
  )
};

export default List;