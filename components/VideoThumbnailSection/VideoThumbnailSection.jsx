import React from 'react'
import Image from "next/image";
import VideoThumbnail from '/public/images/video-thumbnail.jpg';;

const VideoThumbnailSection = () => {
  return (
    <div className='w-full flex items-center justify-center  px-8 [&>*:nth-child(3)]:mr-0 ipad:flex-wrap  ipad:[&>*:nth-child(2)]:mr-0 mobile:px-[16px]'>
      <div className='w-full relative '>
        <Image src={VideoThumbnail} alt='Video Thumbnail' width={1200} height={800} className='w-full h-auto object-cover rounded-lg shadow-lg' />
        <div className='absolute top-0 right-0 w-1/2 h-full bg-secondary shadow-lg flex flex-col items-center justify-center p-9 tablet:[position:unset] tablet:w-full mobile:p-4'>
            <div className='w-full flex items-center justify-center font-sans text-[35px] font-semibold text-white mobile:text-xl'>
            Technology more experts that provides security
            </div>
            <p className='w-full flex items-start justify-start text-white text-lg font-sans leading-6 my-5 mobile:text-sm mobile:my-3' >The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy text using the starting sequence "Lorem ipsum". Fortunately, the phrase 'Lorem Ipsum' is now recognized by electronic pre-press systems and, when found, an alarm can be raised.</p>
            <ul className='w-full flex-wrap list-disc flex items-start justify-start text-white text-lg font-sans leading-6 mb-5 pl-4'>
                <li className=' w-1/2 mb-2 mobile:w-full mobile:text-sm'>Professional team</li>    
                <li className=' w-1/2 mb-2 mobile:w-full mobile:text-sm'> Goal achivment</li>
                <li className=' w-1/2 mb-2 mobile:w-full mobile:text-sm'>Server secure payments</li>    
                <li className=' w-1/2 mb-2 mobile:w-full mobile:text-sm'> Worldwide services company</li>
                <li className=' w-1/2 mb-2 mobile:w-full mobile:text-sm'>Live hat upport</li>    
                <li className=' w-1/2 mb-2 mobile:w-full mobile:text-sm'> Marketing expert policy</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default VideoThumbnailSection
