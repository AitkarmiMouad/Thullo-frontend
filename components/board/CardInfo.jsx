import React, { useEffect, useRef, useState } from 'react'
import boardStyle from '../../styles/Board.module.scss'
import componentsStyle from '../../styles/Components.module.scss'
import { FaTimes, FaUserCircle, FaFileAlt, FaPen, FaPlus, FaUserFriends, FaUsers } from 'react-icons/fa'
import { IoMdImage } from 'react-icons/io'
import { MdLabel } from 'react-icons/md'
import TextareaAutosize from 'react-textarea-autosize';
import Invitation from './Invitation'
import Label from './Label'
import Cover from './Cover'

const CardInfo = ({ setShowModal }) => {


  const descriptionTextBox = useRef(null)
  const [editDescription, setEditDescription] = useState(false)
  const [showMembers, setShowMembers] = useState(false)
  const [showMembersDiv, setShowMembersDiv] = useState(false)
  const [showLabels, setShowLabels] = useState(false)
  const [showCovers, setShowCovers] = useState(false)

  useEffect(() => {
    if (editDescription)
      descriptionTextBox.current.focus()
  }, [editDescription])

  return (
    <div className={`${boardStyle.card} overflow-visible p-2 my-11 h-full`} style={{ minWidth: '800px' }}>
     { setShowModal && <button
        type="button" className={`${componentsStyle.btnPrimary} px-3 absolute right-2`}
        onClick={(e) => setShowModal(false)}
      >
        <FaTimes className='text-lg' />
      </button>}

      <div className={`${boardStyle.pictureCard} m-3`}>
        <img className={`${boardStyle.pictureCardImage} h-36`} src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />
      </div>

      <div className='flex flex-row justify-between gap-5 mx-3 my-5'>
        <div className='w-9/12'>
          <div className="my-3 font-medium">
            ✋🏿 Move anything that is actually started here
          </div>
          <div className='flex items-center'>
            <span className={`${componentsStyle.grayLabel} `}>in list</span>&nbsp;
            <span className='text-sm font-medium'>In Progress</span>
          </div>

          <div className='flex flex-row justify-between items-center mt-5'>
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


          <div className='flex flex-row justify-between items-center mt-5'>
            <div className={`${componentsStyle.grayLabel} my-2`}>
              <FaFileAlt className="mr-2" />
              <span>Attachments</span>
            </div>
            <button className={`${componentsStyle.btnSecondary} bg-transparent border text-gray-400 py-2 `}
              onClick={() => { }}
            >
              <FaPlus className="mr-2" />
              add
            </button>
          </div>


          <div className='flex flex-col'>


            <div className='flex items-center'>
              <div className={`${boardStyle.pictureCard}  w-40 h-24`}>
                <img className={`${boardStyle.pictureCardImage} h-full`} src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />
              </div>
              <div className=''>
                <div className={`${componentsStyle.grayLabel} `}>Added July 5, 2020</div>
                <div className='font-medium text-sm my-2'>Reasoning by Ranganath Krishnamani</div>
                <div className='flex'>

                  <button className={`${componentsStyle.btnSecondary} bg-transparent border text-gray-400 py-2 mr-4 `}
                    onClick={() => { }}
                  >
                    Download
                  </button>
                  <button className={`${componentsStyle.btnSecondary} bg-transparent border text-gray-400 py-2 `}
                    onClick={() => { }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>


          </div>


          <div className={`${boardStyle.card} h-fit w-full border p-2 m-0 mt-5 flex flex-col `}>
            <div className='flex'>
              <div className="flex items-start mx-1 my-2">
                <img className={componentsStyle.avatar} src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
              </div>
              <TextareaAutosize minRows={1} className={`${componentsStyle.textBox} resize-none border-0`} placeholder="Write a comment..." aria-label="Write a comment..." />
            </div>
            <button className={`${componentsStyle.btnPrimary} m-2 self-end `}>Comment</button>
          </div>

          <div className='mt-5'>

            <div className='flex justify-between items-center'>
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
              <div>
                <button className={`${componentsStyle.btnSpan} ml-2 self-end `}>Edit</button>
                <span className='text-customgray-200 ml-2'>-</span>
                <button className={`${componentsStyle.btnSpan} ml-2 self-end `}>Delete</button>
              </div>
            </div>
            <div className='mt-2'>
              “The gladdest moment in human life, methinks, is a departure into unknown lands.” – Sir Richard Burton
            </div>
          </div>

          <hr className="border-gray-200 my-4 " />


        </div>
        <div className='flex flex-col gap-y-3 w-3/12'>
          <div className={`${componentsStyle.grayLabel} my-2`}>
            <FaUserCircle className="mr-2" />
            <span>Actions</span>
          </div>
          {!showMembersDiv && <button type="button" className={`${componentsStyle.btnSecondary} w-full h-10`} onClick={() => { setShowMembersDiv(!showMembersDiv) }} >
            <FaUserFriends className='mr-2' />
            Members
          </button>}
          <div className='relative'>
            <button type="button" className={`${componentsStyle.btnSecondary} w-full h-10`} onClick={() => { setShowLabels(!showLabels) }}>
              <MdLabel className='mr-2' />
              Labels
            </button>
            {showLabels && <Label />}
          </div>
          <div className='relative'>
            <button type="button" className={`${componentsStyle.btnSecondary} w-full h-10`} onClick={() => { setShowCovers(!showCovers) }}>
              <IoMdImage className='mr-2' />
              Cover
            </button>
            {showCovers && <Cover />}
          </div>


          {
            showMembersDiv && <div>
              <div className={`${componentsStyle.grayLabel} mt-5`}>
                <FaUsers className="mr-2" />
                <span>Members</span>
              </div>
              <div className='flex flex-col gap-y-3 my-3'>
                <div className='flex flex-col justify-between items-start gap-2'>

                  <div className='flex flex-row items-center'>
                    <div className="flex items-center mx-1">
                      <img className={componentsStyle.avatar} src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                    </div>
                    <div className='ml-3'>
                      Morris Croft
                    </div>
                  </div>

                  <div className='relative mt-3'>
                    <button className={`min-w-full ${componentsStyle.lightBlueBtn} w-fit`} onClick={() => { setShowMembers(!showMembers) }} >
                      Assign a member
                      <FaPlus className='ml-2' />
                    </button>
                    {showMembers && <Invitation type='card' />}
                  </div>

                </div>
              </div>
            </div>}


        </div>

      </div>


    </div>
  )
}

export default CardInfo