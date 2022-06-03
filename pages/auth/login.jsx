import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Auth.module.scss'
import Image from 'next/image'
import Logo from '../../public/Logo.svg'
import { FaFacebookSquare, FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa'

const Login = () => {

  const router = useRouter()

  const goToRegister = (e) => {
    e.preventDefault()
    router.push('/auth/register')
  }

  return (
    <div className={styles.container}>

      <div className={styles.card}>
        <div className='mx-auto w-fit my-4 scale-125'>
          <Image src={Logo} alt="Logo" />
        </div>

        <form className="mt-6">
          <div>
            <label htmlFor="username" className={styles.label}>E-mail</label>
            <input type="text" className={styles.input} />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className={styles.label}>Password</label>
              <a href="#" className={styles.anchor}>Forget Password?</a>
            </div>

            <input type="password" className={styles.input} />
          </div>

          <div className="mt-6">
            <button className={`${styles.btn} bg-customblue-300 hover:bg-customblue-200`}>
              Login
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <a className={`${styles.anchor} text-center text-gray-500 uppercase cursor-default`}>or login with Social Media</a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

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

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          Don&apos;t have an account?
          <a href="#" className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
            onClick={(e) => goToRegister(e)}
          >
            Create One
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login