import React from 'react'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import panner1 from '../assets/Violet Gallery.png'
import panner2 from '../assets/إضافة عنوان.png'
const Coursel = () => {
  return (
    <div className=' rounded-md overflow-hidden  mt-[20px]'>
        <Splide  aria-label="My Favorite Images" options={{ 
          autoHeight:true,
          type: 'loop',
          autoplay:true,
        }}>
        <SplideSlide >
        <img src={panner1} alt="Image 1" className=' object-contain h-[500px] rounded-md w-[100%]'/>
        </SplideSlide>
          <SplideSlide>
          <img src={panner2} alt="Image 2" className='rounded-md w-[100%] h-[500px]  object-cover'/>
          </SplideSlide>
    </Splide>
  </div>
  )
}

export default Coursel