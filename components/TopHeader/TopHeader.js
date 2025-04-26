"use client"
import React from 'react'
import Logo from '/public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const TopHeader = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const handleMenuToggle = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  }
  return (
    <div className='w-full px-8 py-3 fixed top-0 left-0 bg-white shadow-md z-50 mobile:px-4'>
      <div className='w-full flex'>
      
        <div className='w-full flex justify-between'>
          <button className='hidden tablet:block tablet:w-[40px] tablet:mr-8 mobile:w-[30px] mobile:mr-2' onClick={(e) => {handleMenuToggle(e)}}>
            <span className='flex w-full h-[5px] bg-secondary mb-1'></span>
            <span className='flex w-full  h-[5px] bg-secondary mb-1'></span>
            <span className='flex w-full  h-[5px] bg-secondary'></span>
          </button>
          <div className='flex items-center'>
          <Image src={Logo} width={400} height={400} alt="Logo" className='w-16 h-16 tablet:w-10 tablet:h-10 mobile:w-8' />
          <div className='flex flex-col justify-center ml-2' >
            <h1 className='text-2xl font-bold font-sans tablet:text-xl mobile:text-sm'>Qubitix</h1>
            <p className='text-gray-500 font-sans text-sm sm-to-xs:text-xs'>Your tagline goes here</p>
          </div>
          </div>
          <div className={`${showMenu === true ?  'tablet:flex fixed top-0 left-0 w-full h-full items-center bg-black/50' : 'hidden'}`}></div>
          <div className={`flex items-center bg-white ml-auto ${showMenu === true ? 'tablet:block tablet:h-full tablet:fixed tablet:top-0 tablet:w-4/6 tablet:left-0' : 'tablet:hidden sm-to-xs:hidden'}`}>
            <div className={`hidden tablet:flex border-b-2 p-2 mb-3`}>              
              <div className='flex items-center'>
                <Image src={Logo} width={400} height={400} alt="Logo" className='w-16 h-16 tablet:w-10 tablet:h-10' />
                <div className='flex flex-col justify-center ml-2' >
                  <h1 className='text-2xl font-bold font-sans tablet:text-xl'>Qubitix</h1>
                  <p className='text-gray-500 font-sans text-sm sm-to-xs:text-xs'>Your tagline goes here</p>
                </div>
              </div>       
              <button className='hidden tablet:block tablet:w-[40px] tablet:ml-auto mobile:w-[30px] mobile:mr-2' onClick={(e) => {handleMenuToggle(e)}}>X</button>       
            </div>
            <ul className='flex w-full justify-around tablet:top-flex tablet:flex-col '>
              <li className='flex px-3'>
                <Link href="/" className='text-slate-800 font-sans text-xl hover:text-secondary mobile:text-[16px]'>Home</Link>
              </li>
              <li className='flex px-3'>
                <Link href="/" className='text-slate-800 font-sans text-xl hover:text-secondary mobile:text-[16px]'>Projects</Link>
              </li>
              <li className='flex px-3'>
                <Link href="/" className='text-slate-800 font-sans text-xl hover:text-secondary mobile:text-[16px]'>Services</Link>
              </li>
              <li className='flex px-3'>
                <Link href="/" className='text-slate-800 font-sans text-xl hover:text-secondary mobile:text-[16px]'>About</Link>
              </li>
            </ul>
          </div>
          <div className='flex items-center ml-auto'>
            <Link href="/" className='bg-secondary text-white font-sans text-xl px-4 py-2 rounded-lg hover:bg-slate-800 mobile:text-sm mobile:px-2 mobile:rounded-md '>Get In Touch</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
