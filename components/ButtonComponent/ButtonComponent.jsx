import React from 'react'

const ButtonComponent = ({filled,text}) => {
  return (
    <div className='w-auto flex justify-center items-center mr-3 '>
      <button className={`${filled ? 'bg-secondary  border-secondary text-white  hover:bg-white hover:border-[1px] hover:border-secondary hover:text-secondary ' : 'bg-white text-secondary border-secondary hover:bg-secondary hover:text-white'} border-[1px] transition duration-600 ease-in-out px-4 py-2 rounded font-semibold font-sans sm-to-xs:px-2 sm-to-xs:py-1 sm-to-xs:text-sm mobile:p-2 mobile:text-xs`}>
        {text}
      </button>      
    </div>
  )
}

export default ButtonComponent;
