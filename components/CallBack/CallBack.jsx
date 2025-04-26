import React from 'react'

const CallBack = () => {
  return (
   
      <div className='w-full flex bg-white shadow-md rounded-lg py-9 px-10 ipad:w-full 
        ipad:mr-0 mobile:flex-col mobile:p-4'>
        <div className='flex w-[40%] flex-col px-9 mobile:w-full mobile:p-0 mobile:mb-4'>
          <h2 className='text-2xl font-sans font-semibold text-primary mb-3 mobile:text-lg mobile:my-2'>Request a Call Back</h2>
          <p className='w-full font-sans text-slate-600'>Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.</p>
        </div>
       
        <form className='w-[60%] flex flex-col items-center text-gray-600 text-md text-lg font-sans text-center mb-3 mobile:w-full mobile:text-sm'>
        <div className='w-full grid grid-cols-2 gap-4'>
            <input 
            type="text" 
            placeholder="First Name" 
            className='border border-gray-300 rounded-lg p-2 w-full' 
            required 
            />
            <input 
            type="text" 
            placeholder="Last Name" 
            className='border border-gray-300 rounded-lg p-2 w-full' 
            required 
            />
            <input 
            type="email" 
            placeholder="Email" 
            className='border border-gray-300 rounded-lg p-2 w-full' 
            required 
            />
            <input 
            type="tel" 
            placeholder="Phone Number" 
            className='border border-gray-300 rounded-lg p-2 w-full' 
            required 
            />
        </div>

        
        <textarea 
            placeholder="Your Message" 
            className='border border-gray-300 rounded-lg p-2 w-full mt-4' 
            required
        ></textarea>

        
            <button 
                type="submit" 
                className='bg-secondary text-white py-2 px-6 rounded-lg mt-4'
            >
                Submit
            </button>
        </form>
      </div>
      
    
  )
}

export default CallBack
