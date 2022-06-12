import React, { useEffect, useRef, useState } from 'react'
import sideBarStyle from '../../styles/SideBar.module.scss'
import componentsStyle from '../../styles/Components.module.scss'
import { FaTimes, FaUserCircle, FaFileAlt, FaPen } from 'react-icons/fa'
import TextareaAutosize from 'react-textarea-autosize';

const SideBar = ({ setShowSideBar }) => {

  const descriptionTextBox = useRef(null)
  const [editDescription, setEditDescription] = useState(false)

  useEffect(() => {
    if (editDescription)
      descriptionTextBox.current.focus()
  }, [editDescription])

  return (
    <div className={`${sideBarStyle.sideBarContainer}`}>
      <div className='flex flex-row justify-between items-center'>
        <div className='font-medium'>
          Devchallenges Board
        </div>
        <button
          type="button" className={`${componentsStyle.btnSecondary} bg-transparent px-3`}
          onClick={(e) => setShowSideBar(false)}
        >
          <FaTimes className='text-lg' />
        </button>
      </div>
      <hr className="border-gray-400 my-1" />
      <div className={`${componentsStyle.grayLabel} my-2`}>
        <FaUserCircle className="mr-2" />
        <span>Made by</span>
      </div>
      <div className='rounded-lg py-3'>
        <div className='flex flex-row items-center'>
          <div className="flex items-center mx-1">
            <img className={componentsStyle.avatar} src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
          </div>
          <div className='ml-3 flex flex-col'>
            <div>
              Morris Croft
            </div>
            <div className={`${componentsStyle.grayLabel} `}>
              on 4 July, 2020
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <div className={`${componentsStyle.grayLabel} my-2`}>
          <FaFileAlt className="mr-2" />
          <span>Description</span>
        </div>
        {
          !editDescription && <button className={`${componentsStyle.btnSecondary} bg-transparent border text-gray-400 py-2 `}
            onClick={() => { setEditDescription(true); }}
          >
            <FaPen className="mr-2" />
            edit
          </button>
        }
      </div>
      <div className='mt-3'>
        <TextareaAutosize ref={descriptionTextBox} minRows={1} disabled={!editDescription ? true : false} className={`${componentsStyle.textBox} resize-none border-1 max-h-96`} placeholder="Description..." aria-label="Description..." />
        {
          editDescription && <div className='mt-3 flex items-center'>
            <button className={`${componentsStyle.btnPrimary} bg-green-800 active:bg-green-700 py-2 `}
              onClick={() => { setEditDescription(false); }}
            >
              Save
            </button>
            <button className={`${componentsStyle.btnSpan} py-2 ml-3 `}
              onClick={() => { setEditDescription(false); }}
            >
              Cancel
            </button>
          </div>
        }
      </div>
      <div className={`${componentsStyle.grayLabel} my-5`}>
        <FaFileAlt className="mr-2" />
        <span>Team</span>
      </div>
      <div className='flex flex-col gap-y-3'>

        <div className='flex flex-row justify-between items-center'>
          <div className='flex flex-row items-center'>
            <div className="flex items-center mx-1">
              <img className={componentsStyle.avatar} src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
            </div>
            <div className='ml-3'>
              Morris Croft
            </div>
          </div>
          <button className={`${componentsStyle.btnSecondary} bg-transparent text-gray-400 py-2 `}>
            admin
          </button>
        </div>

        <div className='flex flex-row justify-between items-center'>
          <div className='flex flex-row items-center'>
            <div className="flex items-center mx-1">
              <img className={componentsStyle.avatar} src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
            </div>
            <div className='ml-3'>
              Morris Croft
            </div>
          </div>
          <button className={`${componentsStyle.btnSecondary} bg-transparent active:bg-red-100 border border-red-700 text-red-700 py-2 `}>
            delete
          </button>
        </div>



      </div>
    </div>
  )
}

export default SideBar