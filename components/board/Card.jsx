import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import stylesBoard from '../../styles/Board.module.scss'
import stylesComponents from '../../styles/Components.module.scss'
import ITEM_TYPE from "../../utils/types";
import { FaComments, FaPlus, FaPaperclip } from 'react-icons/fa'

const Card = ({ id, card, setLists, lists, list }) => {

  const findCard = (id, List) => {
    const card = List.cards.filter((c) => c.id === id)[0]
    return {
      card,
      index: List.cards.indexOf(card),
    }
  }

  const findList = (id) => {
    const list = lists.filter((l) => l.id === id)[0]
    return {
      list,
      index: lists.indexOf(list),
    }
  }

  const originalListIndex = lists.indexOf(list)

  const originalCardIndex = findCard(id, list).index

  function moveCard(arr, newCardIndex, oldCardIndex, newListIndex, oldListIndex) {


    console.log('old Card index : ' + oldCardIndex);
    console.log('new Card index : ' + newCardIndex);
    console.log('old List index : ' + oldListIndex);
    console.log('new List index : ' + newListIndex);

    if (oldListIndex === newListIndex) {
      console.log('same List')

      if (newCardIndex > arr[oldListIndex].cards.length) {
        var k = newCardIndex - arr[oldListIndex].cards.length + 1;
        while (k--) {
          arr[oldListIndex].cards.push(undefined);
        }
      }
      arr[oldListIndex].cards.splice(newCardIndex, 0, arr[oldListIndex].cards.splice(oldCardIndex, 1)[0]);

    }
    else {
      console.log('other List')
    }

    return arr
  }

  const [, drop] = useDrop(() => ({
    accept: ITEM_TYPE.CARD,
    drop(item, monitor) {
      // target - dragged  // new - old
      if (originalCardIndex !== item.originalCardIndex || originalListIndex !== item.originalListIndex) {

        const oldCardIndex = findCard(item.id, list).index
        const newCardIndex = findCard(id, list).index
        const oldListIndex = item.originalListIndex
        const newListIndex = originalListIndex

        setLists([...moveCard(lists, newCardIndex, oldCardIndex, newListIndex, oldListIndex)])

      }

    },
    hover(item, monitor) {

    }
  }))

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ITEM_TYPE.CARD,
    item: { id, originalCardIndex, originalListIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }
  ))

  return (
    <div className={`${stylesBoard.card} w-full h-fit my-5 py-4 px-3 rounded-2xl ${isDragging ? 'opacity-0' : ''}`} ref={(node) => drag(drop(node))} >
      <div className={`${stylesBoard.pictureCard} m-0`}>
        <img className={`${stylesBoard.pictureCardImage} h-36`} src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />
      </div>
      <div className="my-3 font-medium">{card.title} {card.icon}</div>
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

export default React.memo(Card)