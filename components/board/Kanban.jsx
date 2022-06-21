import React, { useState } from "react";
import kanbanStyle from '../../styles/Kanban.module.scss'
import componentsStyle from '../../styles/Components.module.scss'
import Card from "./Card";
import List from "./List";
import { FaPlus } from 'react-icons/fa'
import { Lists } from "../../utils/index";
import { useDrop } from "react-dnd";
import ITEM_TYPE from "../../utils/types";
import CardInfo from "./CardInfo";
import Modal from "../Modal";
import { useRouter } from "next/router";

const Kanban = () => {

  const [lists, setLists] = useState(Lists);
  const [showModal, setShowModal] = useState(false)

  const router = useRouter()

  const [, drop] = useDrop(() => ({ accept: ITEM_TYPE.KANBAN }))

  return (
    <div className={`${kanbanStyle.container} relative kanban`} ref={drop} >

      {/* Card Modal */}
      <Modal showModal={showModal} setShowModal={setShowModal} goBackTo={() => { router.push('/b/[idBoard]/?idBoard=1') }} >
        <CardInfo setShowModal={setShowModal} />
      </Modal>

      {/* Lists */}
      {lists.map((list) => {
        return (
          <List key={list.id} id={list.id} setLists={setLists} lists={lists} list={list} >
            {
              list.cards.map(card => (
                <Card key={card.id} id={card.id} setLists={setLists} lists={lists} list={list} card={card} setShowModal={setShowModal} />
              ))
            }
          </List>
        )
      })}

      {/* add list btn */}
      <button className={`${componentsStyle.lightBlueBtn}`} >
        Add another list
        <FaPlus className='ml-2' />
      </button>
    </div>
  );
}


export default Kanban