import React from 'react'
import boardStyle from '../../styles/Board.module.scss'
import componentsStyle from '../../styles/Components.module.scss'
import { FaSistrix } from 'react-icons/fa'
import { MdLabel } from 'react-icons/md'


const Label = () => {
  return (
    <div className={`absolute z-10 w-96 p-4 mt-2 overflow-hidden border bg-white rounded-md shadow-xl left-0 top-10 `}>
      <div className='flex flex-col gap-y-3'>
        <div>
          <div className='font-medium'>
            Label
          </div>
          <div className={componentsStyle.grayLabel}>
            Select a name and a color
          </div>
        </div>

        <div className=''>
          <div className={`${componentsStyle.searchDiv} h-12 shadow-lg`}>
            <input className={`${componentsStyle.textBox} border-0 text-base`} type="search" name="search" placeholder="Label..." aria-label="Label..." />
            <button className={`${componentsStyle.btnPrimary} h-full text-base`}>
              <FaSistrix />
            </button>
          </div>
        </div>

        <div className={`z-10 w-full p-2 mt-2 border bg-white rounded-md shadow-xl left-0 top-10 overflow-auto max-h-96 `}>
          <div className='grid grid-cols-4 gap-x-3 justify-center items-center'>

            <div className={`rounded-lg h-16 w-16 mx-auto my-2 ${'bg-red-500'} `}></div>

          </div>
        </div>

        <div className={`${componentsStyle.grayLabel} my-2`}>
          <MdLabel className="mr-2" />
          <span>Available </span>
        </div>

        <div className="flex flex-wrap">
          <div className={`${componentsStyle.chip}`}>Default</div>
          <div className={`${componentsStyle.chip}`}>Default</div>
        </div>


      </div>


    </div>
  )
}

export default Label