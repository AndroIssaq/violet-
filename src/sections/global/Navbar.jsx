import React from 'react'
import Cart from './Cart';
import { useState } from 'react';
import logo from '../../assets/309666073_178653171364847_2034739299267281444_n.jpg'
import { useSelector,useDispatch } from 'react-redux';
import Icons from '../../components/Icons';
import MopileIcons from '../../components/MopileIcons';
const Navbar = () => {
  const cartIsOpen=useSelector(state=>state.Cart.isCartOpen)
  return (
    <nav className='nav relative bg-black w-full'>
        <div className="container">
            <div className="content flex items-center justify-between w-full h-[70px] ">
                <div className="logo font-bold text-[25px] tracking-widest flex items-center gap-[10px]">
                  <div className='w-[50px] h-[50px] flex items-center justify-center rounded-full overflow-hidden '><img src={logo} alt="" /></div>
                  <h1 className=' text-white'>VIOLET</h1> 
                  </div>
                  <Icons/>
                  <MopileIcons/>
            </div>
        </div>
        {
          cartIsOpen?<Cart/>:''
        }
        
       
    </nav>
  )
}

export default Navbar