"use client";
import React, { useState } from 'react'

const CallBack = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        try{
            const response = await fetch('/api/contact',{
                method:'POST',
                headers:{ 'Content-Type':'application/json' },
                body:JSON.stringify(formData),
            });

            const data = await response.json();

            if(response.ok) {
                alert('Form submitted successfully !');
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            } else {
                alert('Error submitting form:' + data.message);
                console.log('Error:',data.message);
            }
        } catch(error) {
            console.error('Error submitting form:',error);
        }
    
    };

  return (
   
      <div className='w-full flex bg-white shadow-md rounded-lg py-9 px-10 ipad:w-full 
        ipad:mr-0 mobile:flex-col mobile:p-4'>
        <div className='flex w-[40%] flex-col px-9 mobile:w-full mobile:p-0 mobile:mb-4'>
          <h2 className='text-2xl font-sans font-semibold text-primary mb-3 mobile:text-lg mobile:my-2'>Request a Call Back</h2>
          <p className='w-full font-sans text-slate-600'>Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.</p>
        </div>
       
        <form onSubmit={handleSubmit} className='w-[60%] flex flex-col items-center text-gray-600 text-md text-lg font-sans text-center mb-3 mobile:w-full mobile:text-sm'>
        <div className='w-full grid grid-cols-2 gap-4'>
            <input 
            type="text" 
             name="firstName"
            placeholder="First Name" 
            className='border border-gray-300 rounded-lg p-2 w-full' 
            value={formData.firstName}
            onChange={handleChange}
            required 
            />
            <input 
            type="text" 
            name="lastName"
            placeholder="Last Name" 
            className='border border-gray-300 rounded-lg p-2 w-full' 
            value={formData.lastName}
            onChange={handleChange}
            required 
            />
            <input 
            type="email" 
            name="email"
            placeholder="Email" 
            className='border border-gray-300 rounded-lg p-2 w-full' 
            value={formData.email}
            onChange={handleChange}
            required 
            />
            <input 
            type="tel" 
            name="phone"
            placeholder="Phone Number" 
            className='border border-gray-300 rounded-lg p-2 w-full' 
            value={formData.phone}
            onChange={handleChange}
            required 
            />
        </div>

        
        <textarea 
         name="message"
            placeholder="Your Message" 
            className='border border-gray-300 rounded-lg p-2 w-full mt-4' 
            value={formData.message}
            onChange={handleChange}
            required
        ></textarea>

        
            <button 
                type="submit" 
                className='bg-secondary text-white py-2 px-6 rounded-lg mt-4'
            >                Submit
            </button>
        </form>
      </div>
      
    
  )
}

export default CallBack
