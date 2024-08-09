import React from 'react'

const Addaddress = () => {
  return (
    <>
    <div className="container pt-32 pr-44 w-full pb-44">
        <div className="form h-96 mr-96 ml-28">
             <p className='text-2xl'>BILLING ADDRESS</p>
             <input className='w-full border-2 mt-2 border-gray-300 py-2 pl-2 rounded-md' type="text" placeholder='type something' /> <br />
             <input className='w-full border-2 mt-4 border-gray-300 py-2 pl-2 rounded-md' type="text" placeholder='type something' />
             <div className="flex">
             <input className='w-full border-2 mt-4 mr-2 border-gray-300 py-2 pl-2 rounded-md' type="text" placeholder='type something' />
             <input className='w-full border-2 mt-4 ml-2 border-gray-300 py-2 pl-2 rounded-md' type="text" placeholder='type something' />
             </div>
             <input className='w-full border-2 mt-4 border-gray-300 py-2 pl-2 rounded-md' type="text" placeholder='type something' />
             <input className='w-full border-2 mt-4 border-gray-300 py-2 pl-2 rounded-md' type="text" placeholder='type something' />
             <div className="flex">
             <input className='w-full border-2 mt-4 mr-2 border-gray-300 py-2 pl-2 rounded-md' type="text" placeholder='type something' />
             <input className='w-full border-2 mt-4 ml-2 border-gray-300 py-2 pl-2 rounded-md' type="text" placeholder='type something' />
             </div>
             <div className="flex mr-72">
             <input className='w-full mr-96 border-2 mt-4 border-gray-300 py-2 pl-2 rounded-md' type="text" placeholder='type something' />
             </div>
        </div>
    </div>
    </>
  )
}

export default Addaddress