import React from 'react'
import bouquet1 from '../assets/bouquet1.jpg'
import bouquet2 from '../assets/bouquet2.jpg'
import bouquet3 from '../assets/bouquet3.jpg'
import bouquet4 from '../assets/bouquet1.jpg'
import {BsCartPlus} from 'react-icons/bs'
import { useSelector  ,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../features/CartSlice'
const BestSelling = () => {
    const dispatch=useDispatch()
    const items = useSelector((state)=>state.Cart.items)
    const count=useSelector(state=>state.Cart.count)
  return (
    <div className='arrivals flex flex-col items-center justify-center mt-[50px]'>
        <div className='title lg:w-[60%] md:w-[60%] sm:w-[97%] w-[97%] flex items-center justify-between mt-[50px]'>
            <h1 className='lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px] font-bold'>Best Selling</h1>
            <p className='lg:text-[15px] md:text-[20px] sm:text-[12px] text-[12px] '>These Bouquets Are Our Best Sellers   </p>
        </div>
        <div className="products w-[100%] gap-[20px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 justify-center mt-[20px]">

        {items.map((item)=>{
                if( item.attributes.isBestSeller ){
                    return(
                        <Link to={`/itemDetalis/${item.id}`}><div className="product flex flex-col items-center shadow-md rounded-md p-[10px] cursor-pointer  ">
                        <div className=' rounded-md  overflow-hidden lg:h-[320px] md:h-[250px]'><img src={'http://localhost:1337'+item.attributes.img.data.attributes.url} alt="" className=' object-cover hover:scale-[1.1] transition duration-300 h-full' /></div>
                        <div className="info flex flex-col gap-0 w-full">
                            <div className="name mt-[5px] flex items-start w-full  lg:text-[18px] md:text-[15px] text-[12px] px-[5px]"><h1>{item.attributes.title}</h1></div>
                            <div className="des flex items-center justify-between w-full px-[5px]">
                                <span className="price text-[15px] font-bold">{item.attributes.price+ " EGP "}</span>
                                <span onClick={()=>dispatch(addToCart({
                                    id:item.id,
                                    title:item.attributes.title,
                                    price:item.attributes.price,
                                    img:item.attributes.img.data.attributes.url,
                                    count:count
                                }))} className="addcart text-[20px] cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center"><BsCartPlus/></span>
                            </div>
                        </div>
                    </div> </Link>
                    )
                }   
                
            })}

        </div>
    </div>
  )
}

export default BestSelling