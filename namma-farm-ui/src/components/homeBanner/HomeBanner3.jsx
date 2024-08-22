import React from 'react'
import SingleOvalProduct from '../singleOvalProduct/SingleOvalProduct'


const HomeBanner3 = ({ items }) => {
    return (
        <>
            <div className="upper-div bg-yellow py-12 ">
                <div className='flex  h-72 ml-28 '>
                    <div className="left-div mt-12 mx-2  w-40">
                        <span className='text-3xl font-semibold'>Shop by</span><br />
                        <span className='text-3xl font-semibold'>Nutrition</span>
                        <div className='flex'>
                            <div className='bg-white p-3 mr-2 mt-8 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                </svg>
                            </div>
                            <div className='bg-white p-3 mx-2 mt-8 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg></div>
                        </div>
                    </div>
                    <div className="right-div w-full flex justify-evenly  h-72">
                        {items.map(item => <SingleOvalProduct item={item} />)}
                    </div>
                </div>
            </div>

            <div className="lower-div flex  py-12 bg-banner items-center justify-center">c
                <div className=' w-80  top-10 rounded-2xl h-64 mr-44'>
                    <p className='font-semibold text-4xl text-white pt-14'>What people <br /> say about us</p>
                </div>
                <div className='bg-white pl-4 pt-2 w-72 rounded-2xl h-64 mx-4'>
                    <p className='font-semibold text-3xl'>Name</p>
                    <p>comapny</p>
                    <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae aut natus tenetur voluptatibus velit magni harum, doloribus corrupti.</p>
                </div>
                <div className='bg-white pl-4 pt-2 w-72 rounded-2xl h-64 mx-4'>
                    <p className='font-semibold text-3xl'>Name</p>
                    <p>comapny</p>
                    <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae aut natus tenetur voluptatibus velit magni harum, doloribus corrupti.</p>
                </div>
            </div>
        </>
    )
}

export default HomeBanner3