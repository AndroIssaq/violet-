import React from 'react'
import {BsCartPlus} from 'react-icons/bs'
import axios from 'axios'
import { useState , useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { setItems } from '../features/CartSlice'
import { Link } from 'react-router-dom'
import { addToCart } from '../features/CartSlice';
import {createClient} from 'contentful'
export const NewArrivel = () => {

    const [data, setData]=useState([])
const client = createClient({
  space: 'jo6qr63zu3xa',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'iOrV82_gw5NPn9uJ0Zb9DF5JD8wO49bKi8vO7DNWtG4'
})


/*
    const apiUrl="http://localhost:1337/api/products?populate=img"
    const abiToken="b178992a5e53015d6e8256bc6493261ca5d4de82e132a9086a67bc350a7e1941a3a26ebe7e1fc039aac581673c164c47b86c31cf3161ca36295f3ed4f51249513254643b19b3679ea602ae83a4613a1a2da8c71ce0d7dd4ed295a4527c11f698473c442c3806439a04d9d6488a2e628c89e9d493ca6a6a39aac14b82e0bd8f41"
    const items=useSelector((state)=>state.Cart.items)
    const dispatch=useDispatch()
    const getData=async()=>{
        axios.get(apiUrl).then(response=>{dispatch(setItems(response?.data?.data))})
    }
    const count=useSelector(state=>state.Cart.count)
*/

const getData= async()=>{
    try {
        const response=await client.getEntries({content_type:'product'})
       const data=response.items
       setData(data)
    } catch (error) {
        console.log(error);
    }
}
  useEffect(()=>{
    getData()
  },[])
  console.log(data);


  return (
    <div className='arrivals flex flex-col items-center justify-center '>
        <div className='title lg:w-[60%] md:w-[60%] sm:w-[97%] w-[97%] flex items-center justify-between mt-[50px]'>
            <h1 className='lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px] font-bold'>New Arrivals</h1>
            <p className='lg:text-[15px] md:text-[20px] sm:text-[12px] text-[12px] '>Bouquets that were made a month ago or less  </p>
        </div>
        <div className="products w-[100%] gap-[20px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 justify-center mt-[20px]">

           
              {
                data.map(item=>{
                    return(
                        <Link to={``}><div className="product flex flex-col items-center shadow-md rounded-md p-[10px] cursor-pointer  ">
                        <div className=' rounded-md  overflow-hidden lg:h-[320px] md:h-[250px]'><img src={'http:'+item.fields.img.fields.file.url}  className=' object-cover h-full hover:scale-[1.1] transition duration-300' /></div>
                        <div className="info flex flex-col gap-0 w-full">
                            <div className="name mt-[5px] flex items-start w-full  lg:text-[18px] md:text-[15px] text-[12px] px-[5px]"><h1>{item.fields.title}</h1></div>
                            <div className="des flex items-center justify-between w-full px-[5px]">
                                <span className="price text-[15px] font-bold">{ " EGP "}</span>
                                <span 
                                className="addcart text-[20px] cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center"><BsCartPlus/></span>
                            </div>
                        </div>
                    </div> </Link>
                    )
                })
              }
                  
                 
                
      
           
        </div>
    </div>
  )
}
