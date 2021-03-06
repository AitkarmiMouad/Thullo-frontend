import React from 'react'
import boardStyle from '../../styles/Board.module.scss'
import componentsStyle from '../../styles/Components.module.scss'

const BoardCards = () => {
  return (
    <div className={boardStyle.customGrid}>
      <div className={boardStyle.card}>
        <div className={boardStyle.pictureCard}>
          <img className={boardStyle.pictureCardImage} src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />
        </div>

        <div className="mx-3 mt-5">
          <div className='font-medium font-secondary'>
            Devchallenges Board
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center mx-1">
                <img className={componentsStyle.avatar} src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
              </div>
              <div className="flex items-center mx-1">
                <img className={componentsStyle.avatar} src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
              </div>
              <div className="flex items-center mx-1">
                <img className={componentsStyle.avatar} src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
              </div>
              <span className="mx-1 text-xs text-gray-500">+ 5 others</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default BoardCards