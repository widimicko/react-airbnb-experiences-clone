import React from 'react'

// import cardImage from '../../assets/card1.png'
import star from '../../assets/star.png'

function Card(props) {
  return (
  <div className='mt-14 w-48 '>
      <div className='absolute backdrop-blur-lg bg-white/30 text-white'>SOLD OUT</div>
      <img src="https://source.unsplash.com/random/176X235" alt="" className='rounded-md mb-2 w-[176px] h-[235px]'/>
      <div className='flex gap-1 mb-1'>
        <img src={star} alt="" />
        <p>{props.rating}</p>
        <p className='text-gray-500'>({props.reviewCount})</p>
        <p className='text-gray-500'>{props.location}</p>
      </div>
      <p className='mb-1'>{props.title}</p>
      <p><span className='font-bold'>From ${props.price}</span> / person</p>
    </div>
  );
}

export default Card;
