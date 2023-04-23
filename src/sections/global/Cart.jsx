import React from 'react'
import {MdHighlightOff} from "react-icons/md";
import { useSelector,useDispatch } from 'react-redux';
import { setIsCartOpen ,deleteProduct,deleteAll} from '../../features/CartSlice';
import {BsTrash} from 'react-icons/bs'
import {Link} from 'react-router-dom'
const Cart = () => {
  const dispatch=useDispatch()
  const cartItems=useSelector(state=>state.Cart.cart)
    const count=useSelector(state=>state.Cart.count)
    var total=0
    const totalPrice = ()=>{
      cartItems.forEach(item => {
        total+=item.price*item.count
        return total
      })
    };
    totalPrice()

    
      
    if(cartItems.length<1){
      return(
        <>
          <div className=' cart  w-[100%] h-[100vh] fixed z-[100]  top-0 '>
    <div className=' absolute lg:w-[26%] md:w-[50%] sm:w-[100%] w-[100%] h-[100vh] top-0 right-0 bg-white shadow-lg p-[20px] flex flex-col items-center gap-[20px]'>
    <div className="title flex items-center w-[100%] justify-between">
            <h1>Shipping Bag ({cartItems.length})  </h1>
            <span className='text-[18px] cursor-pointer' onClick={()=>dispatch(setIsCartOpen({}))}><MdHighlightOff/></span>
        </div>
        <div className='w-full h-full flex items-center justify-center'>
          <h1 className='text-[20px] font-bold text-center '>There Is No Items Yet Back to Shopping</h1> 
        </div>
        
    </div>
    </div>
        </>
      )
    }
    else{
      return (
        <div className={` cart  w-[100%] h-[100vh] fixed z-[100] overflow-y-scroll  top-0`}>
        <div className={` absolute ${cartItems.length >2 ? 'h-auto': 'h-[100vh]' } lg:w-[26%] md:w-[50%] sm:w-[100%]  w-[100%] h-[100vh] top-0 right-0 bg-white shadow-lg p-[20px] flex flex-col items-center gap-[20px]`}>
            <div className="title flex items-center w-[100%] justify-between">
                <h1>Shipping Bag ({cartItems.length})  </h1>
                <span className='text-[18px] cursor-pointer' onClick={()=>dispatch(setIsCartOpen({}))}><MdHighlightOff/></span>
            </div>
    
        <div className="items w-[100%] flex flex-col items-center gap-[20px]">
        {
          cartItems.map(item=>{
              return(
                <div className="item flex items-center gap-[40px] w-[100%] border-b border-violet-600 p-[10px]">
                    <div className="image w-[100px] h-full"><img src={'http://localhost:1337'+item.img} alt="" className='h-full object-cover' /></div>
                    <div className='details'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className="details flex items-start justify-start flex-col gap-[10px] mt-[10px]">
                    <div>
                      <h1 className=' lg:text-[15px] md:text-[20px] text-[17px]  '>Price: <span className='text-violet-600'> {item.price} EGP x  {item.count}</span> </h1>
                    </div> 
                    <div>
                      <h1 className=' lg:text-[15px] md:text-[20px] text-[17px]  '>quantity: <span className='text-violet-600'>{item.count}</span>  </h1>
                    </div> 
                    <div>
                      <h1 className=' lg:text-[15px] md:text-[20px] text-[17px]  '>Total: <span className='text-violet-600'>{item.count*item.price} EGP</span>  </h1>
                    </div> 
                    <button onClick={()=>dispatch(deleteProduct(item.id))} className='text-[25px] text-red-600'><span><BsTrash/></span></button>
                    </div>
                    </div>
                </div>
            )
          })
        }
        </div>
        <div className="subtotal flex items-center justify-between w-[90%]">
            <span className='text-[15px] font-bold'>SUPTOTAL</span>
            <span className='text-[15px] font-bold'> <span className='text-violet-600'>{total} EGP</span></span>
        </div>
        <Link to={'/checkOut'} className='w-full'><div className=" checkout w-[100%] flex items-center justify-center">
            <button onClick={()=>dispatch(setIsCartOpen())} className=' bg-slate-900 text-white w-[90%] h-[40px] '>CHECKOUT</button> 
        </div></Link>
        {
          cartItems.length>0&& <div className="checkout w-[100%] flex items-center justify-center" onClick={()=>dispatch(deleteAll())}>
          <button className=' bg-red-400 text-white w-[90%] h-[40px] '>Remove All</button>
      </div>
        }
       
        </div>
        </div>
      )
    }
  
}

export default Cart