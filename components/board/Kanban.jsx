import React, { useState } from "react";
import stylesKanban from '../../styles/Kanban.module.scss'
import stylesComponents from '../../styles/Components.module.scss'
import Card from "./Card";
import List from "./List";
import { FaPlus } from 'react-icons/fa'
import { Cards, Lists } from "../../utils/index";
import { useDrop } from "react-dnd";
import ITEM_TYPE from "../../utils/types";

const Kanban = () => {

  const [cards, setCards] = useState(Cards);
  const [lists, setLists] = useState(Lists);


  const [, drop] = useDrop(() => ({ accept: ITEM_TYPE.KANBAN }))

  return (
    <div className={`${stylesKanban.container} relative kanban`} ref={drop} >
      {/* Lists */}
      {lists.map((list) => {
        return (
          <List key={list.id} id={list.id} setLists={setLists} lists={lists} list={list} >
            {
              cards.map(card => (
                <Card key={card.id} />
              ))
            }
            <button className={`${stylesComponents.lightBlueBtn}`}>
              Add another card
              <FaPlus className='ml-2' />
            </button>
          </List>
        )
      })}
      {/* add list btn */}
      <button className={`${stylesComponents.lightBlueBtn}`}>
        Add another list
        <FaPlus className='ml-2' />
      </button>
    </div>
  );
}


export default Kanban