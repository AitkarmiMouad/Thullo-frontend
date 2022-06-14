import React from 'react'
import componentsStyle from '../../styles/Components.module.scss'
import boardStyle from '../../styles/Board.module.scss'
import authStyle from '../../styles/Auth.module.scss'
import TextareaAutosize from 'react-textarea-autosize';

const EditAccount = ({setEditOn}) => {
  return (
    <div className=''>
      <div className='flex flex-col'>
        <div className='w-fit text-2xl font-medium'>Change Info</div>
        <div className={`${componentsStyle.grayLabel}`}>Changes will be reflected to every services</div>
      </div>
      <div className='flex mt-5 justify-start items-center '>
        <div className={`${boardStyle.pictureCard} h-24 w-24 mr-3`}>
          <img className={`${boardStyle.pictureCardImage} h-full`} src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />
        </div>
        <button className={`${componentsStyle.btnSecondary} h-10`}>CHANGE PHOTO</button>
      </div>

      <div className='grid grid-cols-2 gap-4 mt-3'>
        <div className="col-span-1">
          <label className={authStyle.label} htmlFor="first_name">
            First Name
          </label>

          <input
            className={`${componentsStyle.textBox} mt-2 `}
            type="text"
            id="first_name"
          />
        </div>
        <div className="col-span-1">
          <label className={authStyle.label} htmlFor="last_name">
            Last Name
          </label>

          <input
            className={`${componentsStyle.textBox} mt-2 `}
            type="text"
            id="last_name"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className={authStyle.label} htmlFor="Bio">Bio</label>
        <TextareaAutosize minRows={4} className={`${componentsStyle.textBox} resize-none border`} />
      </div>

      <div className="mt-4">
        <label className={authStyle.label} htmlFor="EmailAddress">Email Address</label>
        <input id="EmailAddress" className={`${componentsStyle.textBox} mt-2 `} type="email" />
      </div>

      <div className="mt-4">
        <label className={authStyle.label} htmlFor="Password">Password</label>
        <input id="Password" className={`${componentsStyle.textBox} mt-2 `} type="password" />
      </div>

      <div className="mt-4">
        <label className={authStyle.label} htmlFor="Phone">Phone</label>
        <input id="Phone" className={`${componentsStyle.textBox} mt-2 `} type="tel" />
      </div>


      <div className="mt-8">
        <button className={`${componentsStyle.btnPrimary} w-full`} onClick={()=>{setEditOn(false)}}>
          Save
        </button>
      </div>

    </div >
  )
}

export default EditAccount