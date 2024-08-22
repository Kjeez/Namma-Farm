import React from 'react'

const SingleReview = () => {
  return (
    <>
    <div className='my-2'>
        <div>rating</div>
        <div className='flex justify-between'>
            <div className='flex'>
                <img src="" alt="profile" />
                <p className='ml-2 font-semibold'>Full Name</p>
                <p className='bg-orange rounded-lg px-2 ml-2 mt-2 text-xs text-white font-xs'>Verified</p>
            </div>
            <div className='text-xs'>04/14/2024</div>
        </div>
        <div className='text-xs my-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, recusandae quidem quisquam ut, voluptatibus ullam dolorem magni deleniti dolor cum qui ipsa veritatis cupiditate placeat error facere tempora similique quas.
        </div>
        <hr />
    </div>
    </>
  )
}

export default SingleReview