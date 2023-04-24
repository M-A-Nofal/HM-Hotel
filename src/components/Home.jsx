import React from 'react';
import home from '../assets/home.jpeg'

const Home = () => {
  return (
    <div className='w-full h-screen '>
        <img className='w-full h-screen top-0 left-0 object-cover' src={home} alt="bg" />
        <div className=' bg-black/30 absolute top-0 left-0 w-full h-screen'></div>
        <div className=' absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className=' md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p>All Inculsive</p>
                <h1 className=' font-bold text-5xl md:text-7xl drop-shadow-2xl'>HM A Luxury Hotel</h1>
                <p className=' max-w-[600px] drop-shadow-2xl py-2 text-xl'>Here are the best hotel booking sites, including recommendations for international travel and for finding low-priced hotel rooms.</p>
                <button className=' bg-white text-black'>Discover Now</button>
            </div>
        </div>
    </div>
  )
}

export default Home