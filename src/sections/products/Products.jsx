import React from 'react'
import {BsCartPlus} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setItems } from '../../features/CartSlice';
import { addToCart } from '../../features/CartSlice';
const Products = () => {
    const apiUrl="http://localhost:1337/api/products?populate=img"
    const abiToken="b178992a5e53015d6e8256bc6493261ca5d4de82e132a9086a67bc350a7e1941a3a26ebe7e1fc039aac581673c164c47b86c31cf3161ca36295f3ed4f51249513254643b19b3679ea602ae83a4613a1a2da8c71ce0d7dd4ed295a4527c11f698473c442c3806439a04d9d6488a2e628c89e9d493ca6a6a39aac14b82e0bd8f41"
    const dispatch=useDispatch()
    const count=useSelector(state=>state.Cart.count)
    const getData=async()=>{
        axios.get(apiUrl).then(response=>{dispatch(setItems(response?.data?.data))})
    }
  useEffect(()=>{
    getData()
  },[])
    const items=useSelector((state)=>state?.Cart?.items)
  return (
    <div className='text-black'>
        <div className="container">
            <div className="products w-[100%] gap-[20px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 justify-center mt-[20px]">
                {
                    items.map(item=>{
                        return(
                            <Link to={`/itemDetalis/${item.id}`}> <div className="product flex flex-col items-center shadow-md rounded-md  p-[10px] cursor-pointer  ">
                        <div className=' rounded-md  overflow-hidden lg:h-[320px] md:h-[250px]'><img src={'http://localhost:1337'+item.attributes.img.data.attributes.url} alt="" className=' object-cover h-full hover:scale-[1.1] transition duration-300' /></div>
                        <div className="info flex flex-col gap-0 w-full">
                            <div className="name mt-[5px] flex items-start w-full  lg:text-[18px] md:text-[15px] text-[12px]  px-[5px]"><h1>{item.attributes.title}</h1></div>
                            <div className="des cursor-pointer flex items-center justify-between w-full px-[5px]">
                                <span className="price text-[15px] font-bold">{item.attributes.price +" EGP "}</span>
                                <div onClick={()=>dispatch(addToCart({
                                    id:item.id,
                                    title:item.attributes.title,
                                    price:item.attributes.price,
                                    img:item.attributes.img.data.attributes.url,
                                    count:count
                                }))}><span  className="addcart text-[20px] cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center"><BsCartPlus/></span></div>
                                
                            </div>
                        </div>
                    </div> </Link>
                    )
                    })
                }
            </div>
        </div>  
    </div>
  )
}

export default Products