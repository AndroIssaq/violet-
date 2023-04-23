import React from 'react'
import {GiFlowerPot} from 'react-icons/gi'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUsers} from 'react-icons/fa'
import {BsImages} from 'react-icons/bs'
import {BsTelephone} from 'react-icons/bs'
import { useSelector,useDispatch } from 'react-redux';
import { setIsCartOpen } from '../features/CartSlice'
import { MdOutlineShoppingBag}from "react-icons/md";
import {Link} from 'react-router-dom'
const Icons = () => {
const dispatch=useDispatch()
const cartItems=useSelector(state=>state.Cart.cart)
  return (
    <div className="icons z-50 text-white items-center gap-[30px] text-[25px] lg:flex md:flex sm:hidden hidden">
      <Link to={'/'}> <span className=' cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center '><AiOutlineHome/></span></Link> 
      <Link to={'/Products'}> <span className=' cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center '><GiFlowerPot/></span></Link> 
        <span className=' cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center '><FaUsers/></span>
        <span className=' cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center text-white'><BsImages/></span>
        <span className=' cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center '><BsTelephone/></span>
        <span className=' cart-icon cursor-pointer relative w-[40px] h-[40px] rounded-full flex items-center justify-center ' onClick={()=>dispatch(setIsCartOpen())}><MdOutlineShoppingBag/>
        
          <span className={`${ cartItems.length ? 'fade-in ' : 'fade-out'} flex items-center justify-center`}>{cartItems.length}</span>
        
        </span>
    </div>
  )
}

export default Icons