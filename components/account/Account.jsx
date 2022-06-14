import React, { useState } from 'react'
import EditAccount from './EditAccount'
import componentsStyle from '../../styles/Components.module.scss'
import boardStyle from '../../styles/Board.module.scss'

const Account = () => {

  const [editOn, setEditOn] = useState(false)

  return (
    <div className='my-20'>
      <div className='mx-auto w-fit my-4 text-3xl font-medium'>Personal info</div>
      <div className='mx-auto w-9/12 border rounded-lg p-10'>
        {
          !editOn ?
            <div>
              <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                  <div className='w-fit text-2xl font-medium'>Profile</div>
                  <div className={`${componentsStyle.grayLabel}`}>Some info may be visible to other people</div>
                </div>
                <button className={`${componentsStyle.btnSecondary} bg-transparent border text-gray-400 py-2 `}
                  onClick={(e) => setEditOn(true)}
                >
                  Edit
                </button>
              </div>

              <hr className="border-gray-200 my-4 " />

              <div className='flex px-6 justify-start items-center '>
                <div className='text-gray-400 w-96'>Photo</div>
                <div className={`${boardStyle.pictureCard} h-24 w-24 m-3`}>
                  <img className={`${boardStyle.pictureCardImage} h-full`} src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />
                </div>
              </div>

              <hr className="border-gray-200 my-4 " />

              <div className='flex px-6 justify-start items-center '>
                <div className='text-gray-400 w-96'>Name</div>
                <div className='font-medium'>Xanthe Neal</div>
              </div>

              <hr className="border-gray-200 my-4 " />

              <div className='flex px-6 justify-start items-center '>
                <div className='text-gray-400 w-96'>Bio</div>
                <div className='font-medium'>I am a software developer and a big fan of devchallenges...</div>
              </div>

              <hr className="border-gray-200 my-4 " />

              <div className='flex px-6 justify-start items-center '>
                <div className='text-gray-400 w-96'>Phone</div>
                <div className='font-medium'>908249274292</div>
              </div>

              <hr className="border-gray-200 my-4 " />

              <div className='flex px-6 justify-start items-center '>
                <div className='text-gray-400 w-96'>Email</div>
                <div className='font-medium'>xanthe.neal@gmail.com</div>
              </div>

              <hr className="border-gray-200 my-4 " />

              <div className='flex px-6 justify-start items-center '>
                <div className='text-gray-400 w-96'>Password</div>
                <div>************</div>
              </div>


            </div> : <EditAccount setEditOn={setEditOn}/>
        }
      </div>
    </div>
  )
}

export default Account