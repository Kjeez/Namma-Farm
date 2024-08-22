import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const SingleItem = ({ item }) => {
    return (
        <>
            <div className='border2 flex justify-center py-2'>
                <img src="/assets/image.png" width={150} height={150} className='border-2 mx-8' alt="image" />
                <div className='mx-2'>
                    <div className="flex ml-28 bg-red-100 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-x-lg text-red-700 mt-0.5 ml-1" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                    <span className='text-red-500 text-sm font-bold ml-1'>Remove</span>
                    </div>
                    <p className='text-2xl font-semibold'>title</p>
                    <div className="flex">
                        <span className='mt-1 text-2xl font-bold'>Price</span>
                        <span className='ml-10 border-2 flex text-black text-sm py-3 px-4 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus " viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                            <span className='mx-2 font-bold'>1</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
const Cart = ({ items, setIsCart,title }) => {
    return (
        <>
            <div className='flex z-30 shadow-lg absolute top-0 right-0 bg-white justify-center flex-col w-96'>
                <div className="top flex items-center">
                    <span className='text-2xl ml-8 my-8'>SHOPPING CART</span><div className='bg-yellow mx-2 text-white rounded-full px-2'>2</div>
                    <span onClick={() => setIsCart(false)} className='ml-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </span>
                </div>
                <div className="middle">
                    {/* {items.map(item => (<SingleItem item={item}/>))} */}
                    <SingleItem />
                    <SingleItem />
                    <SingleItem />
                </div>
                {title!="Checkout" && <div className='flex my-8 justify-evenly items-center'>
                    <input type="text" placeholder='Coupon Code' className='border-2 pl-2 py-1' />
                    <button className='border-2 border-neutral-700 rounded-sm px-2 py-1 bg-gray-200  text-sm'>Apply</button>
                </div>}
                
                <div className="bottom bg-light-yellow p-8">
                    <p className='text-sm'>Shipping and taxes calculated at checkout</p>
                    <hr className='border-black mt-2'></hr>
                    <span className='text-sm'>Total Payment</span><span className='ml-28 text-2xl font-bold'>749.00</span><br />
                    <button className='bg-black mt-4 text-white text-sm py-3 w-full flex justify-center text-center rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4 mr-1" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                        </svg>
                        <Link to="/addAddress">{title}</Link></button>
                </div>
            </div>
        </>
    )
}

export default Cart