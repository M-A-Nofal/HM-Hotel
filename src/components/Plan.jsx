import React from 'react'

const Plan = () => {
  return (
    <div className=' max-w-[1400px] m-auto grid md:grid-cols-2 gap-10 py-16 px-4'>
        <div className=' grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className=' row-span-3 object-cover h-full w-full p-2' src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="plan" />
            <img className=' row-span-2 object-cover h-full w-full p-2' src="https://images.pexels.com/photos/14652224/pexels-photo-14652224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="plan" />
            <img className=' row-span-2 object-cover h-full w-full p-2' src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80" alt="plan" />
            <img className=' row-span-3 object-cover h-full w-full p-2' src="https://images.pexels.com/photos/14534362/pexels-photo-14534362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="plan" />
            <img className=' row-span-2 object-cover h-full w-full p-2' src="https://images.pexels.com/photos/14568712/pexels-photo-14568712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="plan" />
        </div>
        <div className=' flex flex-col justify-center h-full'>
            <h3 className=' text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className=' text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, architecto?</p>
            <p className=' pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, temporibus optio tempore quos perspiciatis nisi suscipit, saepe necessitatibus odit aliquam expedita fuga, facere ut architecto magnam et eius voluptatem facilis.</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan