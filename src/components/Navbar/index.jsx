import React from 'react'

import logo from '../../assets/logo-airbnb.png'

function Navbar() {
  return (
    <header>
      <nav className='h-[70px] flex shadow-md p-4'>
        <img src={logo} alt="" className='max-w-[100px]'/>
      </nav>
    </header>
  );
}

export default Navbar;
