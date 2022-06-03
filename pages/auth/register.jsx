import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Logo.svg'
import styles from '../../styles/Auth.module.scss'
import { FaFacebookSquare, FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa'
import { useRouter } from 'next/router'

const Register = () => {

  const router = useRouter()

  const goToLogin = (e) => {
    e.preventDefault()
    router.push('/auth/login')
  }

  return (
    <div className={`${styles.container} bg-gray-200`}>
      <div className="flex sm:mx-auto w-full sm:w-3/5 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="hidden bg-cover bg-white border-r border-r-gray-200 lg:block lg:w-1/2 ">
          <div className='grid place-items-center h-full scale-150'>
            <Image src={Logo} alt="Logo" />
          </div>
        </div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">Thullo</h2>

          <p className="text-xl text-center text-gray-600 dark:text-gray-200">Welcome back!</p>

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
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login with email</a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          <div className='grid grid-cols-6 gap-4 mt-3'>
            <div className="col-span-3">
              <label className={styles.label} htmlFor="first_name">
                First Name
              </label>

              <input
                className={styles.input}
                type="text"
                id="first_name"
              />
            </div>
            <div className="col-span-3">
              <label className={styles.label} htmlFor="last_name">
                Last Name
              </label>

              <input
                className={styles.input}
                type="text"
                id="last_name"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className={styles.label} htmlFor="LoggingEmailAddress">Email Address</label>
            <input id="LoggingEmailAddress" className={styles.input} type="email" />
          </div>

          <div className="mt-4">
            <label className={styles.label} htmlFor="loggingPassword">Password</label>
            <input id="loggingPassword" className={styles.input} type="password" />
          </div>

          <div className="mt-4">
            <label className={styles.label} htmlFor="loggingPasswordCheck">Confirm password</label>
            <input id="loggingPasswordCheck" className={styles.input} type="password" />
          </div>


          <div className="mt-8">
            <button className={`${styles.btn} bg-customblue-300 hover:bg-customblue-200`}>
              Sign up
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <a href="#" className={`${styles.anchor} text-sm`} onClick={(e) => goToLogin(e)}>or login</a>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register