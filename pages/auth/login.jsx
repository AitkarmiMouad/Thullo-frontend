import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Logo from '../../public/Logo.svg'
import authStyle from '../../styles/Auth.module.scss'
import componentsStyle from '../../styles/Components.module.scss'
import { FaFacebookSquare, FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa'
import { gql, useMutation } from '@apollo/client'

const Login = () => {

  const router = useRouter()

  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

  const goToRegister = (e) => {
    e.preventDefault()
    router.push('/auth/register')
  }

  const LOGIN = gql`
    mutation($input: LoginInput!) {
  login(input: $input)
}
  `

  const [login, { error , data }] = useMutation(LOGIN);

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login({
      variables: {
        input: {
          email: email,
          password: pwd,
        }
      },
    });

    router.push('/b')

  }

  return (
    <div className={authStyle.container}>

      <div className={authStyle.card}>
        <div className='mx-auto w-fit my-4 scale-125'>
          <Image src={Logo} alt="Logo" />
        </div>

        <form className="mt-6" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="username" className={authStyle.label}>E-mail</label>
            <input type="text" className={`${componentsStyle.textBox} mt-2 `} value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="mt-4">
            <label htmlFor="password" className={authStyle.label}>Password</label>
            <input type="password" className={`${componentsStyle.textBox} mt-2 `} value={pwd}
              onChange={(e) => setPwd(e.target.value)} />
          </div>

          <div className="mt-6">
            <button className={`${componentsStyle.btnPrimary} w-full`}>
              Login
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b lg:w-1/5"></span>

          <a className={`${authStyle.anchor} text-center text-gray-500 uppercase cursor-default`}>or login with Social Media</a>

          <span className="w-1/5 border-b lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 mx-6 justify-evenly">
          <button type="button" className='border border-customgray-200 rounded-full hover:border-red-500' onClick={() => { router.push('http://localhost:4000/auth/google') }}>
            <FaGoogle className='text-customgray-200 text-4xl p-2 hover:text-red-500' />
          </button>
          <button type="button" className='border border-customgray-200 rounded-full hover:border-blue-600' onClick={() => { router.push('http://localhost:4000/auth/facebook') }}>
            <FaFacebookSquare className='text-customgray-200 text-4xl p-2 hover:text-blue-600' />
          </button>
          <button type="button" className='border border-customgray-200 rounded-full hover:border-gray-800' onClick={() => { router.push('http://localhost:4000/auth/github') }}>
            <FaGithub className='text-customgray-200 text-4xl p-2 hover:text-gray-800' />
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          Don&apos;t have an account?
          <a href="#" className="font-medium text-gray-700 hover:underline"
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