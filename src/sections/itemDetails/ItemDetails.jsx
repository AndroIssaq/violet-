import React from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCartPlus } from "react-icons/bs";
import { useDispatch ,useSelector} from 'react-redux';
import { addToCart ,decreaseCount , increaseCount  } from '../../features/CartSlice'
const ItemDetails = () => {
  const cartitems=useSelector(state=>state.Cart.cart)
  const [item,setItem]=useState([])
  const [recommendeds,setRecommendeds]=useState([])
    const params=useParams()
    const itemId=params.itemId
    const getItem=async()=>{
        axios.get(`http://localhost:1337/api/products/${itemId}?populate=img`).then(response=>{setItem(response.data.data)}),error=>{console.log(error)}
    }
    const getRecommended=async()=>{
      axios.get(`http://localhost:1337/api/Products?populate=*`).then(response=>{setRecommendeds(response.data.data)}),error=>{console.log(error)}
  }
    useEffect(()=>{
        getItem()
        getRecommended()
    },[itemId])
    const dispatch=useDispatch()
    const count=useSelector(state=>state.Cart.count)
  return (
    <div className='mt-[100px]'>
      <div className="container lg:px-[50px] md:px-[0px] px-[0px]">
        <div className="content flex items-start justify-between md:h-auto h-auto gap-[50px]  lg:flex-row md:flex-col sm:flex-col flex-col">
          <div className="left h-full flex-1 w-full">
            <div className="img h-full w-full">
              <img src={'http://localhost:1337'+item?.attributes?.img?.data?.attributes.url} alt="" className='w-full h-[70%] object-cover' />
            </div>
          </div>
          <div className="right flex-1 flex items-start justify-start h-[100vh]">
            <div className="title text-black lg:text-[55px] md:text-[45px] text-[35px] ">
              <h1>{item?.attributes?.title}</h1>
              <div className="details flex items-start justify-start flex-col gap-[20px] mt-[30px]">
                <div>
                  <h1 className=' lg:text-[20px] md:text-[20px] text-[17px]  '>Price: {item?.attributes?.price} EGP</h1>
                </div> 
                <div>
                  <h1 className='lg:text-[20px] md:text-[20px] text-[17px] '>Type: <span className='text-violet-600'>{item?.attributes?.tupe}</span></h1>
                </div>
                <div>
                  <h1 className='lg:text-[20px] md:text-[20px] text-[17px] '>Published at: <span >{item?.attributes?.publishedAt}</span></h1>
                </div>
                <div>
                  <h1 className='lg:text-[20px] md:text-[20px] text-[17px] flex items-center gap-[10px]'>Quantity:
                    <div className='flex items-center gap-[10px]'>
                      <button onClick={()=>dispatch( decreaseCount())  } className='bg-violet-600 text-white w-[40px] h-[40px] rounded-[10px]'>-</button>
                      <span>{count}</span>
                      <button onClick={()=>dispatch( increaseCount()) }  className='bg-violet-600 text-white w-[40px] h-[40px] rounded-[10px]'>+</button>
                    </div>
                    </h1>
                </div>
                <div className="btns flex items-center lg:flex-row md:flex-row sm:flex-col flex-col w-full  gap-[30px] mt-[30px]">
                  <button className='add-to-cart bg-[#9333ea] text-white  lg:w-[130px] md:w-[170px] w-full h-[60px] rounded-[10px] text-[18px] '>Buy Now</button>
                  <button onClick={()=>dispatch(addToCart({
                    id:item.id,
                    title:item.attributes.title,
                    price:item.attributes.price,
                    img:item.attributes.img.data.attributes.url,
                    count:count
                  }))} className='buy-now bg-white text-violet-600 lg:w-[130px] md:w-[170px] border w-full border-violet-600 h-[60px] rounded-[10px] text-[18px]'>Add to Cart</button>
                </div>
              </div>
              </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-center mb-[30px]'><h1 className='text-[45px]'>Recommended products</h1></div>
        <div className="recomended w-[100%] gap-[20px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 justify-center">
        {recommendeds.map((recommended)=>{
          const categories=recommended.attributes.categories.data
          const category=categories.map((category)=>category.attributes.title)
                if( category[1]=='Recommended' ){
                    return(
                        <Link to={`/itemDetalis/${recommended.id}`}><div className="product flex flex-col items-center shadow-md rounded-md p-[10px] cursor-pointer hover:scale-[1.1] transition duration-300 ">
                        <div className=' rounded-md h-auto  overflow-hidden'><img src={'http://localhost:1337'+recommended?.attributes?.img?.data?.attributes.url} alt="" className='w-full h-[70%] object-cover' /> </div>
                        <div className="info flex flex-col gap-0 w-full">
                            <div className="name mt-[5px] flex items-start w-full  text-[18px] px-[5px]"><h1>{recommended.attributes.title}</h1></div>
                            <div className="des flex items-center justify-between w-full px-[5px]">
                                <span className="price text-[15px] font-bold">{recommended.attributes.price+ " EGP "}</span>
                                <span className="addcart text-[20px] cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center"><BsCartPlus/></span>
                            </div>
                        </div>
                    </div> </Link>
                    )
                }   
               
            })}
        </div>
      </div>
    </div>
    
  )
  
}

export default ItemDetails