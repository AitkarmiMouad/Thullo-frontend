import React from 'react'
import boardStyle from '../../styles/Board.module.scss'
import componentsStyle from '../../styles/Components.module.scss'
import { FaSistrix } from 'react-icons/fa'

const Invitation = ({ type }) => {
  return (
    <div className={`absolute z-10 w-96 p-4 mt-2 overflow-hidden border bg-white rounded-md shadow-xl left-0 top-10 `}>
      <div className='flex flex-col gap-y-3'>
        <div>
          <div className='font-medium'>
            Invite to {type}
          </div>
          <div className={componentsStyle.grayLabel}>
            Search users you want to invite to
          </div>
        </div>

        <div className=''>
          <div className={`${componentsStyle.searchDiv} h-12 shadow-lg`}>
            <input className={`${componentsStyle.textBox} border-0 text-base`} type="search" name="search" placeholder="User..." aria-label="User..." />
            <button className={`${componentsStyle.btnPrimary} h-full text-base`}>
              <FaSistrix />
            </button>
          </div>
        </div>

        <div className={`z-10 w-full p-2 mt-2 overflow-hidden border bg-white rounded-md shadow-xl left-0 top-10 `}>
          <div className='flex flex-col gap-y-1'>

            <div className='active:bg-gray-300 hover:bg-gray-200 rounded-lg p-3'>
              <div className='flex flex-row items-center'>
                <div className="flex items-center mx-1">
                  <img className={componentsStyle.avatar} src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                </div>
                <div className='ml-3'>
                  Morris Croft
                </div>
              </div>
            </div>

          </div>
        </div>

        <button className={`${componentsStyle.btnPrimary} mx-auto  h-fit`}>
          Invite
        </button>


      </div>


    </div>
  )
}

export default Invitation