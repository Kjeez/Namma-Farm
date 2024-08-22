import React from 'react'
import { Link } from 'react-router-dom'

const SingleOrder = () => {
    return (
        <>
            <div className='border-2 my-8 rounded-xl'>
                <div className='flex justify-between py-4'>
                    <div className='flex'>
                        <div className='mx-4'>
                            <p>Order number</p>
                            <p>WU8891911</p>
                        </div>
                        <div className='mx-4'>
                            <p>Date placed</p>
                            <p>Jul 6,2021</p>
                        </div>
                        <div className='mx-4'>
                            <p>Total amount</p>
                            <p>RS 25,991</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='mx-4'>
                            <button className='border-2 flex justify-center items-center text-black text-center py-2 text-sm px-6 rounded-full'>
                                <Link to="/addAddress">View Order</Link></button>
                        </div>
                        <div className='mr-4'>
                            <button className='border-2 flex justify-center items-center text-black text-center py-2 text-sm px-6 rounded-full'>
                                <Link to="/addAddress">View Invoice</Link></button>
                        </div>

                    </div>
                </div>

                <div className='flex'>
                    <img className='my-4 mx-4' src="/assets/Rectangle 2836.png" alt="" />
                    <div className='my-4'>
                        <div className='flex justify-between'>
                            <p className='font-semibold ml-4'>Roasted dry fruits 300g</p>
                            <p className='font-semibold mr-4'>RS 25,991</p>
                        </div>
                        <p className='mx-4 my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, harum obcaecati. Laudantium sit sint numquam consequuntur omnis odio libero maxime, aliquid porro. Sed hic quo praesentium in quasi optio odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia autem excepturi nostrum. Voluptatum mollitia repellat id placeat, obcaecati magnam dolorum magni ut inventore aliquid pariatur optio eligendi delectus aperiam architecto?</p>
                    </div>
                </div>
                <div className='py-4 flex justify-between items-center'>
                    <div className='flex ml-4  items-center' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check bg-orange text-white p-0 rounded-full mr-2" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                        </svg>
                        <p>Delivered on July 12,2021</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <p className='mx-4'>View Product</p>
                        <p className='mx-4'>Buy again</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleOrder