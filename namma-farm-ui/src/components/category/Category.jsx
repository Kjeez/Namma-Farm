import React from 'react'

const Circle = ({title,img}) => {
  console.log(img)
    return (
        <>
        <div className="container h-32 w-32 mt-3">
         <img className='rounded-full border-2 ml-5 items-center border-yellow p-6'width={80} src={img} alt="image" />
         <p className='ml-8 mt-2 text-wrap text-sm'>{title}</p>
         </div>
         
        
        </>
    )
}
const Category = ({categories}) => {
    console.log(categories)
  return (
    <>
    
    <div className="flex items-center border-2 bg-ligt-grey py-4">
      <div className="div flex justify-evenly mx-24 mt-2 w-full h-40 ">
      <div className="container h-32 w-32 mt-3">
         <img className='rounded-full' src="/assets/Frame 1321315113.png" alt="image" />
         <p className='ml-8 mt-2'>All</p>
         </div>
      {categories.map((item,index) => (<Circle key={index} title={item.title} img={item.icon} />))}
      </div>
    </div>
    </>
  )
}

export default Category