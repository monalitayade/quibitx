import React from 'react'
import MainBannerImage from '/public/images/header-bg.jpg'
import Image from 'next/image'
import BannerContent from '../BannerContent/BannerContent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const MainBanner = () => {
  return (
    <div className='w-full  bg-gray-200 flex justify-center items-center'>
        <div className='w-full bg-gray-200 flex justify-start items-center relative'>
            <Image src={MainBannerImage} alt='banner' width={1000} height={400} className='w-full h-full object-cover' />
            <div className='w-6/12 flex flex-col items-start justify-start absolute pl-24 tablet:pl-7 mobile:pl-5 mobile:w-9/12'>
                <BannerContent />
                <div className='w-full flex justify-start'>
                    <ButtonComponent filled={true} text="Our Services"/>
                    <ButtonComponent filled={false} text="Contact Us"/>
                </div>
            </div>
            
        </div>    
    </div>
  )
}

export default MainBanner
