import React from 'react'
import SingleOvalProduct from '../../components/singleOvalProduct/SingleOvalProduct'
import ProductCard from '../../components/productCard/ProductCard'

const items = [
    { "title": "Rice", "desc": "Lorem ipsum dolor sit amet","src":"/assets/freepik-export-20240504124244yJNz 1.png"},
    { "title": "Oil", "desc": "Lorem ipsum dolor sit amet","src":"/assets/freepik-export-20240504125638LCdH 1.png"},
    { "title": "Flour", "desc": "Lorem ipsum dolor sit amet","src":"/assets/freepik-export-20240504125417TOT0 (1) 1.png"},
    { "title": "Dryfruits", "desc": "Lorem ipsum dolor sit amet","src":"/assets/freepik-export-20240504125417TOT0 (1) 1.png"},
    { "title": "Flour", "desc": "Lorem ipsum dolor sit amet","src":"/assets/freepik-export-20240504125638LCdH 1.png"},
  ]
const AllProducts = () => {
  return (
    <>
    <div className="upper-div bg-ligt-grey py-12 ">
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

        <div className='flex px-12'>
            <div className='mt-4'>
                <p className='text-2xl font-semibold'>Filter by Price</p>
                <p className='text-2xl font-semibold'>Product Categories</p>
                <ul>
                    <li>COCONUT(JAGGERY)</li>
                    <li>DATE PALM (JAGGERY)</li>
                    <li>HONEY (5)</li>
                    <li>SUGARCANE JAGGERY (4)</li>
                    <li>OIL (OLIVE) (9)</li>
                    <li>SUGARCANE (JAGGERY) (4)</li>
                </ul>
                <p className='text-2xl font-semibold'>Availability</p>
                <p>In-stock (50)</p>
                <p>OUT OF STOCK (1)</p>
                <p className='font-semibold text-2xl'>Size</p>
                <ul>
                    <li>
                        Gluten
                    </li>
                    <li>FREE</li>
                    <li></li>
                    <li>DAIRY FREE</li>
                    <li>NUT FREE</li>
                    <li>SOY FREE</li>
                    <li>VEGAN</li>
                     <li>LOW</li>
                     <li>SODIUM</li>
                     <li>KETO</li>
                </ul>
                <div className='bg-green mt-20 flex flex-col pt-12 rounded-xl justify-evenly items-center'>
                     <p className='text-white text-4xl'>30% OFF</p>
                     <p className='text-white my-4'>Enjoy 15% off your first <br /> order when you join</p>
                     <img src="/assets/Group 19358.png" alt="" />
                </div>
            </div>
            <div className=' ml-16 flex py-8 w-fit flex-wrap rowit justify-evenly'>
                 <ProductCard />
                 <ProductCard />
                 <ProductCard />
                 <ProductCard />
                 <ProductCard />
                 <ProductCard />
                 <ProductCard />
                 <ProductCard />
                 <ProductCard />
                 <ProductCard />
                 <ProductCard />
                 <ProductCard />
            </div>
        </div>
    </>
  )
}

export default AllProducts