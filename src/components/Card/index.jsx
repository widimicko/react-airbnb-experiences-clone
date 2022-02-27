import React from 'react'

// import cardImage from '../../assets/card1.png'
import star from '../../assets/star.png'

function Card(props) {

  let badgeText

  if (props.item.openSpots === 0) {
    badgeText = 'Sold Out'
  } else if (props.item.location === 'Online') {
    badgeText = 'Online'
  }

  return (
    <div className='mt-14 w-48 relative'>
      {badgeText && <div className='absolute backdrop-blur-lg bg-white/30 text-white rounded m-2 p-1'>{badgeText}</div>}
      <img src="https://source.unsplash.com/random/176X235" alt="" className='rounded-md mb-2 w-[176px] h-[235px]'/>
      <div className='flex gap-1 mb-1'>
        <img src={star} alt="" />
        <p>{props.item.stats.rating}</p>
        <p className='text-gray-500'>({props.item.stats.reviewCount})</p>
        <p className='text-gray-500'>{props.item.location}</p>
      </div>
      <p className='mb-1'>{props.item.title}</p>
      <p><span className='font-bold'>From ${props.item.price}</span> / person</p>
    </div>
  );
}

export default Card;
