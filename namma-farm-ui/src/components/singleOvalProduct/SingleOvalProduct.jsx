import React from 'react'

const SingleOvalProduct = ({ item }) => {
    return (
        <>
            <div className='bg-white w-40 py-2 shadow-xl justify-evenly text-center flex flex-col items-center my-4 rounded-full '>
                <img src={item.src} width={100} height={100} alt="image" />
                <p className='font-semibold'>{item.title}</p>
                <p className='text-sm'>{item.desc}</p>
            </div>
        </>
    )
}

export default SingleOvalProduct