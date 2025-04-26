import React from 'react'

const BannerContent = () => {
  return (
    <div className='w-full flex justify-start items-center '>
        <div className='w-full flex-col flex justify-start items-center'>
            <p className='flex w-full text-xl font-sans text-secondary mb-5 tablet:text-xs mobile:mb-3'>It Solutions . Services Company</p>
            <h1 className='flex w-full text-4xl font-semibold text-gray-800 font-sans capitalize tablet:text-lg mobile:text-sm'>Transforming into digital software company.</h1>
            <p className='flex w-full text-2xl font-sans text-slate-600 my-5 tablet:text-xs tablet:my-2'>We develop effective plans to move your customers behaviour.</p>
        </div>
      
    </div>
  )
}

export default BannerContent
