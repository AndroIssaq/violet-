import React from 'react'
import {MdMenu,MdOutlineShoppingBag}from 'react-icons/md'
import {GiFlowerPot} from 'react-icons/gi'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUsers} from 'react-icons/fa'
import {BsImages} from 'react-icons/bs'
import {BsTelephone} from 'react-icons/bs'
import { useSelector,useDispatch } from 'react-redux';
import { setIsCartOpen } from '../features/CartSlice'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const MopileIcons = () => {
    const [navOpen,setNavOpen]=useState(false)
    const dispatch=useDispatch()
  return (
    <div className='icons  z-50 lg:hidden md:hidden text-white sm:block block relative'>
        <button onClick={()=>setNavOpen(!navOpen)} className='text-[30px] mr-[10px]'><MdMenu/></button>
        <ul className={`${navOpen?'block':' hidden'} absolute w-[100px] text-[20px] h-[300px] bg-black right-[-5px] flex items-center justify-center flex-col  rounded-md top-[55px] gap-[5px]`}>
        <Link to={'/'}><span onClick={()=>setNavOpen(!navOpen)} className=' cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center '><AiOutlineHome/></span></Link>
        <Link to={'/Products'}><span onClick={()=>setNavOpen(!navOpen)} className=' cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center '><GiFlowerPot/></span></Link>
        <Link><span onClick={()=>setNavOpen(!navOpen)} className=' cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center '><FaUsers/></span></Link>
        <Link><span onClick={()=>setNavOpen(!navOpen)} className=' cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center text-white'><BsImages/></span></Link>
        <Link><span onClick={()=>setNavOpen(!navOpen)} className=' cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center '><BsTelephone/></span></Link>
        <Link><span className=' cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center ' onClick={()=>dispatch(setIsCartOpen())}><MdOutlineShoppingBag/></span></Link>
        </ul>
    </div>
  )
}

export default MopileIcons