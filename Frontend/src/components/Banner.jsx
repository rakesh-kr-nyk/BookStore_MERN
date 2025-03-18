import React from 'react'
import { useNavigate } from "react-router-dom";
function Banner() {
  const navigate = useNavigate();
  return (
      <>
      <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col-reverse md:flex-row '>
              <div className='md:w-1/2 md:mt-32'>
                  <div className='md:space-y-12 space-y-6'>
                  <h1 className='md:text-4xl text-3xl font-medium'>Hello & Welcome! Join us to learn something <span className='text-[#62beff]'>new every day.</span></h1>
                      <p>Discover a world of books at your fingertips! Whether you’re a fan of fiction, a seeker of knowledge, or looking for the perfect study companion, we have something for everyone.</p>
                      <div className="flex flex-col align-middle gap-2">
  <div>
    <label className="input validator  !border-gray-300 rounded-sm !outline-none dark:text-slate-900">
      <svg className="h-[1.5em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
      <input type="email" placeholder="mail@site.com" required/>
    </label>
    <div className="validator-hint hidden">Enter valid email address</div>
  </div>
  <button onClick={() => navigate("/signup")} className="button self-start">Join Now</button>
</div>
                  </div>
                  
              </div>
              <div className='md:w-1/2'>
              <img className='md:w-150 md:h-120 ' src="\logo.png" alt="logo" />
              </div>
      </div>
      </>
  )
}

export default Banner