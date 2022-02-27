import React from 'react'

import hero from '../../assets/hero.png'

function Hero() {
  return (
    <div className='mt-14'>
      <div className="flex justify-center mb-10">
        <img src={hero} alt="" className='max-w-[600px]'/>
      </div>
      <div className='pl-12'>
        <h1 className='font-bold text-xl mb-4'>Online Experiences</h1>
        <p className='font-poppins'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </div>
  );
}

export default Hero;
