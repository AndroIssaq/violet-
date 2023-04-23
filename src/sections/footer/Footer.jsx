import React from 'react'
import logo from '../../assets/309666073_178653171364847_2034739299267281444_n.jpg'
import {FaFacebook ,FaInstagram ,FaTiktok,FaYoutube} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='w-full bg-black p-[10px] text-white mt-[50px]'>
        <div className="container">
            <div className="content grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[40px]">
                <div className="col1 flex  flex-col gap-[20px] ">
                    <div className="title flex items-center">
                        <div className="logo w-[70px] h-[70px] rounded-full overflow-hidden"><img src={logo} alt="" className='w-full h-full'/></div>
                        <h1 className=' font-bold text-[20px] '>VioletGallery</h1>
                    </div>
                    <div className="des text-white text-[15px]">
                        <p className=' text-gray-400'>Send beautiful, affordable flowers and gifts from only P399 with Free Same-Day Delivery in Metro Manila, Metro Cebu, Davao, and other selected areas. FlowerStore.ph is the Philippines' No. 1 Online Gift Store providing all types of flower bouquets and gifts for all your needs! Cash On Delivery is accepted. No Credit Card required. Perfect for Birthdays, Anniversaries, Romance, I'm sorry, Valentine's Day, Mother's Day, and all other occasions. We also deliver sympathy funeral flowers.</p>
                    </div>
                    <div className="sub flex items-center">
                        <input type="email" placeholder='Your Email Address' className='w-[230px] h-[35px] p-[10px] text-[12px]'/>
                        <button className='w-[90px] h-[35px] bg-violet-500 p-[10px] text-[12px] flex items-center justify-center text-white font-bold'>Subscripe</button>
                    </div>
                </div>


                <div className="col2 flex flex-col gap-[20px] ">
                    <div className="title mt-[22px] text-[20px] font-bold"><h1 className='text-violet-400'>SITE LINKS</h1></div>
                    <ul className='flex flex-col gap-[10px] text-[15px] p-[5px]'>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">As Featured In</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Track Order</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Grand Valentine’s Giveaway</a></li>
                    </ul>
                </div>


                <div className="col3 flex flex-col gap-[20px] ">
                    <div className="title mt-[22px] text-[20px] font-bold"><h1 className=' text-violet-400'>CUSTOMER CARE</h1></div>
                    <ul className='flex flex-col gap-[10px] text-[15px] p-[5px]'>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Payment Methods</a></li>
                        <li><a href="#">Return & Exchange</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="col4 flex flex-col gap-[20px] ">
                    <div className="title mt-[22px] text-[20px] font-bold"><h1 className='text-violet-400'>VIOLET LINKS</h1></div>
                    <ul className='flex flex-col gap-[10px] text-[15px] p-[5px]'>
                        <div className="icons z-50 text-white items-center gap-[30px] text-[25px] lg:flex md:flex sm:hidden hidden">
                            <span className=' cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center '><FaFacebook/></span>
                            <span className=' cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center '><FaInstagram/></span>
                            <span className=' cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center '><FaTiktok/></span>
                            <span className=' cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center text-white'><FaYoutube/></span>
                        </div>
                        <h1 className='font-bold text-[15px]'>Phone: <p className=' font-thin text-[13px] text-gray-400'>01280710652</p></h1>
                        <h1 className='font-bold text-[15px]'>Email: <p className=' font-thin text-[13px] text-gray-400'>VioletGallery@gmail.com</p></h1>
                    </ul>
                </div>
            </div>
            <div className=' border-t-2 w-[100%] p-[10px] flex items-center justify-center mt-[20px]'><h1>© 2023 VIOLETGallery.co</h1></div>
        </div>
    </footer>
  )
}

export default Footer