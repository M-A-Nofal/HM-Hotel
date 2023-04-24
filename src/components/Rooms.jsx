import React from 'react';

const Rooms = () => {
  return (
    <div className=' max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 py-16 lg:mb-[20%] md:mb-[35%] px-4 grid md:grid-cols-3 gap-4'>
        <div className=' relative md:top-20 md:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
            <p className=' pt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quis tempore unde, illum sequi sapiente?</p>
        </div>
        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className=' object-cover w-full h-full' src="https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="rooms" />
            <img className=' object-cover w-full h-full row-span-2' src="https://images.unsplash.com/photo-1505577058444-a3dab90d4253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="rooms" />
            <img className=' object-cover w-full h-full' src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="rooms" />
        </div>
    </div>
  )
}

export default Rooms