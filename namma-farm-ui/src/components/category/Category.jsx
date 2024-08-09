import React from 'react'

const Circle = ({title,img}) => {
    return (
        <>
        <div className="container h-32 w-32 border-2 mt-3">
         <img className='rounded-full border-orange-2' src={img} alt="image" />
         <p>{title}</p>
         </div>
         
        
        </>
    )
}
const Category = ({categories}) => {
    console.log(categories)
  return (
    <>
    <div className="flex items-center border-2 bg-ligt-grey">
      <div className="div flex justify-evenly mx-24 mt-2 w-full h-40 ">
      {categories.map((item,index) => (<Circle key={index} title={item.title} img={item.img} />))}
      </div>
    </div>
    </>
  )
}

export default Category