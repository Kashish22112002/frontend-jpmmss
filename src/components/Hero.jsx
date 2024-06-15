import React from 'react';
import projectDetails from '../constant';
import heroImg from '../assets/landing.jpeg'

const Hero = () => {
  return (
    <section className="bg-orange-50 text-green-800 mx-auto">
      <div className="flex justify-around">
        <div className='w-1/2'>
            <img src={heroImg} alt="" className='max-w-[700px] rounded-md my-4 mx-auto' />
        </div>
        <div className="text-center flex flex-col items-center justify-center w-1/2">
            <h1>{"(logo)"}</h1>
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to {projectDetails.NAME}</h1>
            <p className="mt-4 text-xl font-bold">{projectDetails.DESC}</p>
            <button className="mt-8 px-6 py-2 text-xl text-orange-50 bg-green-800 border border- font-semibold rounded-xl">Shop Now</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;