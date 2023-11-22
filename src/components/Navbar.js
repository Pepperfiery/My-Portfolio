import React from 'react'
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'

import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='fixed bottom-12 lg:bottom-14 w-full overflow-hidden z-50'>
        <div className='container mx-auto '>
            <div className='w-full bg-black/20 h-[96px] backdrop-blur-6xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center
            text-2xl text-white/50  '>
                <Link 
                to='home'
                activeClass='active'
                smooth={true}
                spy = {true}
                offset = {-200}
                className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-[#34012F]'>
                    <BiHomeAlt />
                </Link>

                <Link
                 to='services'
                 activeClass='active'
                smooth={true}
                spy = {true}
                className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center  hover:text-[#34012F]'>
                    <BsClipboardData />
                </Link>

                <Link to='stack'
                activeClass='active'
                smooth={true}
                spy = {true} 
                className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-[#34012F]'>
                    <BiUser />
                </Link>

                <Link 
                to='work'
                activeClass='active'
                smooth={true}
                spy = {true} 
                className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-[#34012F]'>
                    <BsBriefcase />
                </Link>

                <Link 
                to='contact'
                activeClass='active'
                smooth={true}
                spy = {true} 
                className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-[#34012F]'>
                    <BsChatSquare />
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar