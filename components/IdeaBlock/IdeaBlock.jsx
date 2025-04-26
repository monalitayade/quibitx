import React from 'react'
import Idea from '/public/images/idea.png';
import Image from 'next/image'

const IdeaBlock = (props) => {
  //console.log("props", props);
  return (
    <>
    {props?.blockType === "idea" &&  <div className='w-full bg-white shadow-md rounded-lg p-4 flex flex-col justify-center items-center px-10 mr-8 ipad:w-[calc(50%-16px)] 
      ipad:mr-5 ipad:mb-5 mobile:w-full mobile:mr-0'>
      <div className='flex w-[40%] flex-col justify-between items-center mobile:w-[20%]'>
        <Image src={props.img} alt="idea image" width={200} height={200} className="w-full"/>
      </div>
      <div className='flex flex-col justify-between items-center my-8 text-2xl font-sans font-semibold text-primary mobile:text-lg mobile:my-2'>
        {props.title}
      </div>
      <div className='flex flex-col justify-between items-center text-gray-600 text-md text-lg font-sans text-center mb-3 mobile:text-sm'>
      {props.description}   
      </div>
      <button className='relative inline-block pb-1 font-sans group text-secondary mobile:text-sm'>Read More..
      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full"></span>      
      </button>
    </div>}
    {props?.blockType === "services" &&  <div className='w-full bg-white shadow-md rounded-lg p-4 flex flex-col justify-center items-center px-10 border border-secondary mr-8 ipad:w-[calc(50%-16px)] 
      ipad:mr-5 ipad:mb-5 mobile:w-full mobile:mr-0'>
      <div className='flex w-[40%] flex-col justify-between items-center mobile:w-[20%]'>
        <Image src={props.img} alt="idea image" width={200} height={200} className="w-full"/>
      </div>
      <div className='flex flex-col justify-between items-center my-8 text-2xl font-sans font-semibold text-primary mobile:text-lg mobile:my-2'>
        {props.title}
      </div>
      <div className='flex flex-col justify-between items-center text-gray-600 text-md text-lg font-sans text-center mb-3 mobile:text-sm'>
      {props.description}   
      </div>
      <button className='relative inline-block pb-1 font-sans group text-secondary mobile:text-sm'>Read More..
      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full"></span>      
      </button>
    </div>}
    </>
  )
}

export default IdeaBlock
