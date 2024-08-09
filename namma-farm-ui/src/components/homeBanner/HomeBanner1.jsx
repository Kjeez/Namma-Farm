import React from 'react'

const SingleIcon = ({title,icon}) => {
    return (
        <div className='pt-12 pb-12'>
            <img src={icon} alt="image" />
            <p>{title}</p>
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