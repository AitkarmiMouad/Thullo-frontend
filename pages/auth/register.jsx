import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Logo.svg'
import authStyle from '../../styles/Auth.module.scss'
import componentsStyle from '../../styles/Components.module.scss'
import { FaFacebookSquare, FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa'
import { useRouter } from 'next/router'

const Register = () => {
  
  const router = useRouter()
  
  const goToLogin = (e) => {
    e.preventDefault()
    router.push('/auth/login')
  }

  return (
    <div className={`${authStyle.container} bg-gray-200`}>
      <div className="flex sm:mx-auto w-full sm:w-3/5 overflow-hidden bg-white rounded-lg shadow-lg ">
        <div className="hidden bg-cover bg-white border-r border-r-gray-200 lg:block lg:w-1/2 ">
          <div className='grid place-items-center h-full'>
            <div className='relative h-48 w-48'>
              <Image src={Logo} layout='fill' alt="Logo" />
            </div>
          </div>
        </div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-center text-gray-700 ">Thullo</h2>

          <p className="text-xl text-center text-gray-600 ">Welcome !</p>

          <div className="flex items-center mt-6 mx-6 justify-evenly">
            <button type="button" className='border border-customgray-200 rounded-full hover:border-red-500'>
              <FaGoogle className='text-customgray-200 text-4xl p-2 hover:text-red-500' />
            </button>
            <button type="button" className='border border-customgray-200 rounded-full hover:border-blue-600'>
              <FaFacebookSquare className='text-customgray-200 text-4xl p-2 hover:text-blue-600' />
            </button>
            <button type="button" className='border border-customgray-200 rounded-full hover:border-gray-800'>
              <FaGithub className='text-customgray-200 text-4xl p-2 hover:text-gray-800' />
            </button>
            <button type="button" className='border border-customgray-200 rounded-full hover:border-blue-400'>
              <FaTwitter className='text-customgray-200 text-4xl p-2 hover:text-blue-400' />
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b lg:w-1/4"></span>

            <a href="#" className="text-xs text-center text-gray-500 uppercase hover:underline">or login with email</a>

            <span className="w-1/5 border-b lg:w-1/4"></span>
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
            <label className={authStyle.label} htmlFor="LoggingEmailAddress">Email Address</label>
            <input id="LoggingEmailAddress" className={`${componentsStyle.textBox} mt-2 `} type="email" />
          </div>

          <div className="mt-4">
            <label className={authStyle.label} htmlFor="loggingPassword">Password</label>
            <input id="loggingPassword" className={`${componentsStyle.textBox} mt-2 `} type="password" />
          </div>

          <div className="mt-4">
            <label className={authStyle.label} htmlFor="loggingPasswordCheck">Confirm password</label>
            <input id="loggingPasswordCheck" className={`${componentsStyle.textBox} mt-2 `} type="password" />
          </div>


          <div className="mt-8">
            <button className={`${componentsStyle.btnPrimary} w-full`}>
              Sign up
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>

            <a href="#" className={`${authStyle.anchor} text-sm`} onClick={(e) => goToLogin(e)}>or login</a>

            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register