import React from 'react'
import { useNavigate } from "react-router-dom";
function Banner() {
  const navigate = useNavigate();
  return (
      <>
      <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col-reverse md:flex-row '>
              <div className='md:w-1/2 md:mt-32'>
                  <div className='md:space-y-12 space-y-6'>
                  <h1 className='md:text-4xl text-3xl font-bold'>Hello & Welcome! Join us to learn something <span className='text-[#62beff]'>new every day.</span></h1>
                      <p>Discover a world of books at your fingertips! Whether you’re a fan of fiction, a seeker of knowledge, or looking for the perfect study companion, we have something for everyone.</p>
            <div className="flex flex-col align-middle gap-2">
              <div className='flex justify-center md:justify-start'>
              <button onClick={() => navigate("/books")} className="button self-start text-2xl !px-5 !rounded-3xl">Discover Books</button>
              </div>
  
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