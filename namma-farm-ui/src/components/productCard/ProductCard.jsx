import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({title}) => {
    return (
        <>
            <div className='shadow-xl py-12 px-4 mx-1 rounded-lg'>
                
                 <div>
                 <div className='absolute ml-1 mt-1 bg-orange text-white rounded-full w-fit px-1  text-center text-xs'>-12%</div>
                <span className='absolute ml-44 mt-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill text-red-500" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                    </svg>
                </span>
                 <img width={200} src="/assets/Rectangle 2836.png" alt="" />

                 </div>
                <div>
                    <p className='text-2xl font-semibold'>Title</p>
                    <p>Reviews</p>
                    <span className='font-semibold'>RS. 25,991</span> <span className='ml-4'>RS. 25,991</span>
                    {title == "View"?
                        (
                            <div className="flex items-center">
                                <button className='flex mt-4 text-black border-2 border-black text-sm py-1 px-10 rounded-full'>
                                    <Link to="/addAddress">View</Link></button>
                                <div className='bg-black rounded-full mt-4 ml-4 p-2 w-8 h-8 flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gift-fill text-white" viewBox="0 0 16 16">
                                        <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
                                    </svg>
                                </div>
                            </div>
                        )
                : 
                <div className='flex justify-evenly items-center'>
                            <span className='border-2 mt-3 flex text-black text-sm py-2 px-2 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus " viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                </svg>
                                <span className='mx-2 font-bold'>1</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                                </svg>
                            </span>
                            <button className='bg-black flex justify-center items-center px-2 mt-4 text-white text-xs py-3 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-bag hover:cursor-pointer mt-0.5 mr-1" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                </svg>
                                <Link to="/addAddress">Add to cart</Link></button>
                        </div>
                }

                </div>
            </div>
        </>
    )
}

export default ProductCard