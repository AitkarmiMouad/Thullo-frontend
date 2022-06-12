import React, { useState } from 'react'
import NavBoardInfo from './NavBoardInfo'
import Logo from '../../public/Logo.svg'
import Image from 'next/image'
import stylesNavBar from '../../styles/Navbar.module.scss'
import stylesComponents from '../../styles/Components.module.scss'
import { FaSistrix } from 'react-icons/fa'

const myLoader = ({ src, width, quality }) => {
  return `https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`
}

const Navbar = () => {

  const [activeDrop, setActiveDrop] = useState(false)

  return (

    <div className="bg-white shadow z-10 relative">
      <div className="px-6 py-2 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <div className='grid place-items-center h-full mr-2'>
                <Image src={Logo} alt="Logo" />
              </div>
            </div>
          </div>

          {true && <NavBoardInfo />}

          <div className="flex-1 flex items-center justify-end">
            <div className='hidden lg:block mx-6'>
              <div className={stylesComponents.searchDiv}>
                <input className={`${stylesComponents.textBox} border-0`} type="search" name="search" placeholder="Keyword..." aria-label="Keyword..." />
                <button className={`${stylesComponents.btnPrimary} h-full`}>search</button>
              </div>
            </div>
            <div className='lg:hidden mr-4 active:bg-gray-100 p-2.5 rounded-md'>
              <FaSistrix />
            </div>

            <div className='relative inline-block' onClick={() => { setActiveDrop(!activeDrop) }}>

              <button className={stylesNavBar.dropDownBtn}>
                <div className='grid place-items-center h-full mr-2'>
                  <Image loader={myLoader} src='me.png' height={35} width={35} className='rounded-md' alt='profile pic' />
                </div>
                <span className="mx-1 hidden md:block font-secondary font-medium">Joe Doe</span>
                <svg className="w-5 h-5 mx-1 hidden md:block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
                </svg>
              </button>

              <div className={`${stylesNavBar.dropDownMenu} ${!activeDrop ? 'hidden' : ''} right-0 `}>

                <a href="#" className={stylesNavBar.anchorDropDown}>
                  <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" fill="currentColor"></path>
                    <path d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z" fill="currentColor"></path>
                  </svg>

                  <span className="mx-1">
                    My Profile
                  </span>
                </a>

                <hr className="border-g ray-200 " />

                <a href="#" className={stylesNavBar.anchorDropDown}>
                  <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3C6.23858 3 4 5.23858 4 8C4 10.7614 6.23858 13 9 13C11.7614 13 14 10.7614 14 8C14 5.23858 11.7614 3 9 3ZM6 8C6 6.34315 7.34315 5 9 5C10.6569 5 12 6.34315 12 8C12 9.65685 10.6569 11 9 11C7.34315 11 6 9.65685 6 8Z" fill="currentColor"></path>
                    <path d="M16.9084 8.21828C16.6271 8.07484 16.3158 8.00006 16 8.00006V6.00006C16.6316 6.00006 17.2542 6.14956 17.8169 6.43645C17.8789 6.46805 17.9399 6.50121 18 6.5359C18.4854 6.81614 18.9072 7.19569 19.2373 7.65055C19.6083 8.16172 19.8529 8.75347 19.9512 9.37737C20.0496 10.0013 19.9987 10.6396 19.8029 11.2401C19.6071 11.8405 19.2719 12.3861 18.8247 12.8321C18.3775 13.2782 17.8311 13.6119 17.2301 13.8062C16.6953 13.979 16.1308 14.037 15.5735 13.9772C15.5046 13.9698 15.4357 13.9606 15.367 13.9496C14.7438 13.8497 14.1531 13.6038 13.6431 13.2319L13.6421 13.2311L14.821 11.6156C15.0761 11.8017 15.3717 11.9248 15.6835 11.9747C15.9953 12.0247 16.3145 12.0001 16.615 11.903C16.9155 11.8059 17.1887 11.639 17.4123 11.416C17.6359 11.193 17.8035 10.9202 17.9014 10.62C17.9993 10.3198 18.0247 10.0006 17.9756 9.68869C17.9264 9.37675 17.8041 9.08089 17.6186 8.82531C17.4331 8.56974 17.1898 8.36172 16.9084 8.21828Z" fill="currentColor"></path>
                    <path d="M19.9981 21C19.9981 20.475 19.8947 19.9551 19.6938 19.47C19.4928 18.9849 19.1983 18.5442 18.8271 18.1729C18.4558 17.8017 18.0151 17.5072 17.53 17.3062C17.0449 17.1053 16.525 17.0019 16 17.0019V15C16.6821 15 17.3584 15.1163 18 15.3431C18.0996 15.3783 18.1983 15.4162 18.2961 15.4567C19.0241 15.7583 19.6855 16.2002 20.2426 16.7574C20.7998 17.3145 21.2417 17.9759 21.5433 18.7039C21.5838 18.8017 21.6217 18.9004 21.6569 19C21.8837 19.6416 22 20.3179 22 21H19.9981Z" fill="currentColor"></path>
                    <path d="M16 21H14C14 18.2386 11.7614 16 9 16C6.23858 16 4 18.2386 4 21H2C2 17.134 5.13401 14 9 14C12.866 14 16 17.134 16 21Z" fill="currentColor"></path>
                  </svg>

                  <span className="mx-1">Group Chat</span>
                </a>

                <hr className="border-gray-200 " />


                <a href="#" className={stylesNavBar.anchorDropDown}>
                  <svg className="w-5 h-5 mx-1 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z" fill="currentColor"></path>
                  </svg>

                  <span className="mx-1 text-red-500">
                    Sign Out
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar