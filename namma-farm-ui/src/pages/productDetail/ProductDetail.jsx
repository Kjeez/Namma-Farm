import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/productCard/ProductCard'
import Review from '../../components/review/Review'

const ProductDetail = () => {
    const [review, setReview] = useState(false)
    return (
        <>
            <div className="container py-8 px-12 flex flex-col justify-center items-center">
                <div className="first-sec my-4 flex">
                    <div className="left-sec mr-10">
                        <img className='border-2 mb-4' width={500} height={500} src="https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg" alt="image" />
                        <div className='flex'>
                            <img width={100} height={100} src="https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg" alt="image" />
                            <img width={100} height={100} src="https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg" alt="image" />
                            <img width={100} height={100} src="https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg" alt="image" />
                            <img width={100} height={100} src="https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg" alt="image" />
                            <img className='border-2' width={100} height={100} src="https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg" alt="image" />
                        </div>
                    </div>
                    <div className="right-sec ml-10">
                        <p className='text-4xl font-extrabold mb-4'>Organic Diced Pea-Olive Oil</p>
                        <span className='font-semibold text-3xl my-4'>Price</span> <span className='my-4 mx-4 text-3xl font-semibold'>Price</span> <span className='my-4'>discount</span>
                        <p className='my-4'>rating</p>
                        <hr />

                        <div className='flex my-7 py-7 justify-evenly items-center'>
                            <span className=' mt-3 border-2 flex text-black text-sm py-3 px-4 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus " viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                </svg>
                                <span className='mx-2 font-bold'>1</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                                </svg>
                            </span>
                            <button className='bg-black flex mt-4 text-white text-sm py-3 px-12 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-bag hover:cursor-pointer mt-0.5 mr-2" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                </svg>
                                <Link to="/addAddress">Add to cart</Link></button>
                            <button className=' flex mt-4 text-green border-2 border-green text-sm py-3 px-8 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-heart hover:cursor-pointerc mt-0.5 mr-2 " viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                </svg>
                                <Link to="/addAddress">Checkout</Link></button>
                        </div>
                        <hr />
                        <div className='my-4'>
                            <p className='font-semibold my-2'>Diet Restrictions</p>
                            <ul className='ml-4'>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus.</li>
                            </ul>
                            <div className='bg-gray-200 w-full mt-4 p-4 rounded-xl'>
                                <p className='text-xl font-semibold'>Active Offers</p>
                                <div className='flex'>
                                    <div className='mt-1'>
                                        <img src="/assets/__before.png" width={20} height={20} alt="image" />
                                    </div>

                                    <div className='ml-4'>
                                        <p>Coupon Code : NAMMA 10</p>
                                        <p>10% off on purchase of any 2 Namma unnit.</p>
                                    </div>
                                    <hr />
                                </div>
                                <div className='flex'>
                                    <div className='mt-3'>
                                        <img src="/assets/__before.png" width={20} height={20} alt="image" />
                                    </div>
                                    <div className='ml-4 mt-2'>
                                        <p>Coupon Code : NAMMA 10</p>
                                        <p>10% off on purchase of any 2 Namma unnit.</p>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="second-sec my-4 w-full">
                    <ul className='flex justify-evenly w-full'>
                        <li className='border-b-2 border-orange'>Descriptiom</li>
                        <li>Benifits</li>
                        <li>How to cook</li>
                        <li className='hover:cursor-pointer' onClick={e => setReview(!review)}>Reviews</li>
                    </ul>
                    {review ?
                        <div className="my-28">
                            <Review />
                        </div>
                         :
                        <div className='my-6'>
                            <p className='leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ipsa non. Ipsam, numquam accusamus aut nam esse id aliquam fuga. Quae magni impedit eum perferendis, voluptatum quo rerum sequi pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ipsa non. Ipsam, numquam accusamus aut nam esse id aliquam fuga. Quae magni impedit eum perferendis, voluptatum quo rerum sequi pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ipsa non. Ipsam, numquam accusamus aut nam esse id aliquam fuga. Quae magni impedit eum perferendis, voluptatum quo rerum sequi pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ipsa non. Ipsam, numquam accusamus aut nam esse id aliquam fuga. Quae magni impedit eum perferendis, voluptatum quo rerum sequi pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ipsa non. Ipsam, numquam accusamus aut nam esse id aliquam fuga. Quae magni impedit eum perferendis, voluptatum quo rerum sequi pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ipsa non. Ipsam, numquam accusamus aut nam esse id aliquam fuga. Quae magni impedit eum perferendis, voluptatum quo rerum sequi pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ipsa non. Ipsam, numquam accusamus aut nam esse id aliquam fuga. Quae magni impedit eum perferendis, voluptatum quo rerum sequi pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ipsa non. Ipsam, numquam accusamus aut nam esse id aliquam fuga. Quae magni impedit eum perferendis, voluptatum quo rerum sequi pariatur?</p>
                        </div>
                    }
                </div>
                <div className="third-sec mt-4 w-full ">
                    <p className='text-xl font-semibold'>Frequently Bought Togetther</p>
                    <div className='flex mt-4 border-2 rounded-t-xl justify-center'>
                        <div className='px-16'>
                            <div className="checkbox mt-3">
                                <input type="checkbox" className='w-8 h-8 accent-green' id="vehicle1" name="vehicle1" value="Bike" />
                            </div>
                            <div className='pb-8'><ProductCard /></div>
                        </div>
                        <div className='border-2 py-2 px-16'>
                            <div className="checkbox mt-1">
                                <input type="checkbox" className='w-8 h-8 accent-green' id="vehicle1" name="vehicle1" value="Bike" />
                            </div>
                            <div className='pb-8'><ProductCard /></div>
                        </div>
                        <div className='border-2 px-12'>
                            <div className="checkbox mt-2">
                                <input type="checkbox" className='w-8 h-8 accent-green' id="vehicle1" name="vehicle1" value="Bike" />
                            </div>
                            <div className='pb-8'><ProductCard /></div>
                        </div>
                        <div className=' px-12'>
                            <div className="checkbox mt-2">
                                <input type="checkbox" className='w-8 h-8 accent-green' id="vehicle1" name="vehicle1" value="Bike" />
                            </div>
                            <div className='pb-8'><ProductCard /></div>
                        </div>
                    </div>
                    <div className="flex rounded-b-xl p-2 border-2 w-full justify-between items-center">
                        <p>Addedd    2 items</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                        </svg>
                        <p>2 Add on    RS. 25,991</p>
                        <button className='bg-black flex mt-4 text-white text-sm py-3 px-28 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4 mr-1" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                            </svg>
                            <Link to="/addAddress">Checkout</Link></button>
                    </div>
                </div>
                <div className="fourth-sec my-8 w-full">
                    <div className="flex justify-between items-center">
                        <p className='text-4xl font-semibold'>Our Bestsellers</p>

                        <button className='bg-black flex mt-4 text-white text-sm py-3 px-12 rounded-full'>
                            <Link to="/addAddress">View All</Link></button>
                    </div>
                    <div className="flex px-2 justify-evenly py-4">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
            <div>
                <img src="/assets/Frame.png" width={5000} alt="" />
            </div>
        </>
    )
}

export default ProductDetail