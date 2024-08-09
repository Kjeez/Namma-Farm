import React from 'react'

const HomeBanner2 = () => {
  return (
    <>
       <div className="container w-full flex py-12 justify-center bg-extra-light-yellow">
            <div className='flex justify-center my-8f py-4'>
              <div className="left-div">
                <div className='flex'>
                  <div className='h-72 mx-2 w-96 bg-yellow rounded-xl'>combo deals</div>
                  <div className='h-72 mx-2 w-96 bg-orange rounded-xl'>weekly special</div>
                </div>
                <div className='bg-green mx-2 h-72 rounded-xl my-4 pr-2'>bestsellers</div>
              </div>
              <div className="pb-2 mb-4 mx-2 w-96 bg-brown rounded-xl right-div">
                SUper saver
              </div>
            </div>
       </div>
    </>
  )
}

export default HomeBanner2