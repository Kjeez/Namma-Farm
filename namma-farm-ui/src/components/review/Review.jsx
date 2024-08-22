import React from 'react'
import { Link } from 'react-router-dom'
import SingleReview from '../singleReview/SingleReview'
// import { Rating } from 'react-simple-star-rating'


const Review = () => {
  // const [rating, setRating] = useState(0)

  // // Catch Rating value
  // const handleRating = (rate) => {
  //   setRating(rate)

  //   // other logic
  // }
  // // Optinal callback functions
  // const onPointerEnter = () => console.log('Enter')
  // const onPointerLeave = () => console.log('Leave')
  // const onPointerMove = (value, index) => console.log(value, index)
  return (
    <>
      <div>
        <div className="flex w-full justify-between">
          <div>
            <span>
              Rating
            </span> <span>4.73 out of 5</span>
            <p>Based on 2250 reviews</p>
          </div>
          <div className='flex flex-col'>
            <p>Customer Review</p>
            <div>
              <span>Rating</span><span> Bar</span> <span>1842</span>

            </div>
            <div>
              <span>Rating</span><span> Bar</span> <span>1842</span>

            </div>
            <div>
              <span>Rating</span><span> Bar</span> <span>1842</span>

            </div>
            <div>
              <span>Rating</span><span> Bar</span> <span>1842</span>

            </div>
            <div>
              <span>Rating</span><span> Bar</span> <span>1842</span>

            </div>

          </div>

          <div className='mr-4'>
            <button className='flex mt-4 text-black border-2 border-black text-sm py-2 px-8 rounded-full'>
              <Link to="/addAddress">Write a review</Link></button>
          </div>
        </div>
        <div className=''>
             <SingleReview />
             <SingleReview />
             <SingleReview />
             <SingleReview />
             <SingleReview />
             <SingleReview />

        </div>
      </div>
    </>
  )
}

export default Review

