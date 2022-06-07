import React from "react";
import stylesKanban from '../../styles/Kanban.module.scss'
import stylesComponents from '../../styles/Components.module.scss'
import Card from "./Card";
import Col from "./Col";
import List from "./List";
import { FaPlus } from 'react-icons/fa'

const Kanban = () => {

  return (
    <div className={`${stylesKanban.container} relative kanban`}>
      <List>
        <Col>
          <Card />
        </Col>
        <button className={`${stylesComponents.lightBlueBtn}`}>
          Add another card
          <FaPlus className='ml-2' />
        </button>
      </List>
      <button className={`${stylesComponents.lightBlueBtn}`}>
        Add another list
        <FaPlus className='ml-2' />
      </button>
    </div>
  );
}


export default Kanban