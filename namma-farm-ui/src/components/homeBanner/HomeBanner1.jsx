import React from 'react'

const SingleIcon = ({title,icon}) => {
    return (
        <div className='pt-8 pb-12'>
            <img src={icon} className='ml-7 mb-4 ' alt="image" />
            <p className='font-semibold'>{title}</p>
        </div>
    )
}
const HomeBanner1 = ({features}) => {
  return (
    <div className="flex justify-evenly bg-light-yellow">
       {features.map(item => ( <SingleIcon title={item.title} icon={item.icon} />))}
    </div>
  )
}

export default HomeBanner1