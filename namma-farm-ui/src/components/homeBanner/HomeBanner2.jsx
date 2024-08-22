import React from 'react'

const HomeBanner2 = () => {
  return (
    <>
      <div className="container w-full flex py-12 justify-center bg-extra-light-yellow">
        <div className='flex justify-center my-8f py-4'>
          <div className="left-div">
            <div className='flex'>
              <div className='h-72 mx-2 w-96 flex bg-yellow rounded-xl'>
                <div className='ml-8 mt-10'>
                  <p className='font-semibold text-3xl'>Combo Deals</p>
                  <p className=''>Rice and Spice</p>
                  <button className='bg-white my-6 py-2 mr-2 px-4 font-semibold  rounded-full'>Shop Now</button>
                </div>
                <div className='mt-28'>
                  <img src="/assets/freepik-export-20240504111558PX2V 1.png" alt="" />
                </div>
              </div>
              <div className='h-72 mx-2 w-96 flex bg-orange rounded-xl'>
                <div className='ml-8 mt-10'>
                  <p className='font-semibold text-3xl'>Weekly special</p>
                  <p className=''>Buy Olive oil and get rice free</p>
                  <button className='bg-black text-white my-6 py-2 mr-2 px-4 font-semibold  rounded-full'>Shop Now</button>
                </div>
                <div className='mt-32 pt-5'>
                  <img src="/assets/freepik-export-20240502052549KF10 1.png" alt="" />
                </div>
              </div>
            </div>
            <div className='bg-green mx-2 flex h-72 rounded-xl my-4 pr-2'>
              <div className='ml-8 mt-10'>
                <p className='font-semibold text-white text-3xl'>Bestsellers</p>
                <p className='text-white'>Explore our bestsellers: premium oil,high-quality <br /> rice and delicious nuts.</p>
                <button className='bg-black my-6 py-2 mr-2 text-white px-4 font-semibold  rounded-full'>Shop Now</button>
              </div>
              <div className=' h-20 mt-9'>
                <img src="/assets/freepik-export-20240611085811IWJF 1.png" width={400} alt="" />
              </div>


            </div>
          </div>
          <div className="mb-4 mx-2 w-96 bg-brown rounded-xl right-div">
            <div className='text-center mt-16'>
              <p className='font-semibold my-2 text-white text-3xl'>Super Savers</p>
              <p className='text-3xl my-2 text-light-yellow'>50 % Off</p>
              <p className='text-white my-2'>Flour,Dry Fruits and Millets</p>
              <button className='bg-white my-6 py-2 mr-2 px-4 font-semibold  rounded-full'>Shop Now</button>
            </div>
            <div className='flex justify-start mt-24'>
              <img className='' src="public/assets/freepik-export-20240504112031lVm8 2.png" width={190} height={190} alt="" />
              <img className='ml-1' src="public/assets/freepik-export-20240504112031lVm8 1.png" width={190} height={190} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeBanner2