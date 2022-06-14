import React from 'react'
import boardStyle from '../../styles/Board.module.scss'
import componentsStyle from '../../styles/Components.module.scss'
import { FaSistrix } from 'react-icons/fa'

const Cover = () => {
  return (
    <div className={`absolute z-10 w-96 p-4 mt-2 overflow-hidden border bg-white rounded-md shadow-xl left-0 top-10 `}>
      <div className='flex flex-col gap-y-3'>
        <div>
          <div className='font-medium'>
            Photo Search
          </div>
          <div className={componentsStyle.grayLabel}>
            Search Unsplash for photos
          </div>
        </div>

        <div className=''>
          <div className={`${componentsStyle.searchDiv} h-12 shadow-lg`}>
            <input className={`${componentsStyle.textBox} border-0 text-base`} type="search" name="search" placeholder="Keywords...." aria-label="Keywords...." />
            <button className={`${componentsStyle.btnPrimary} h-full text-base`}>
              <FaSistrix />
            </button>
          </div>
        </div>

        <div className={`z-10 w-full p-2 mt-2 border bg-white rounded-md shadow-xl left-0 top-10 overflow-auto max-h-96 `}>
          <div className='grid grid-cols-4 gap-x-3 justify-center items-center'>

            <div className={`${boardStyle.pictureCard} h-16 w-16 mx-auto my-2`}>
              <img className={`${boardStyle.pictureCardImage} h-full`} src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />
            </div>

          </div>
        </div>


      </div>


    </div>
  )
}

export default Cover