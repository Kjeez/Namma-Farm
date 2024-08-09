import React from 'react'

const Questions = ({ q, a }) => {
    return (
        <>
            <div className="questions my-4 flex w-auto justify-between border-2 rounded-lg">
                <div className='ml-4 py-4'>
                    <p className='text-2xl'>{q}</p>
                    <p className='text-xl w-96'>{a}</p>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-up-right-square-fill text-orange mt-2 mr-2" viewBox="0 0 16 16">
  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707"/>
</svg>
            </div>
        </>
    )
}
const Faq = ({ questions }) => {
    return (


        <>
            <div className="container flex flex-col w-full my-8 items-center">
                <div className='my-4'>
                    <p className='text-4xl font-semibold'>Frequently asked Questions</p>
                </div>
                {questions.map(item => (<Questions q={item.q} a={item.a} />))}

                <div className="questions bg-orange my-4 flex mx-10 justify-between rounded-lg">
                    <div className='ml-4 py-4 mr-72'>
                        <p className='text-2xl text-white'>Do you have any Queries ?</p>
                    </div>

                    <button className='bg-white my-6 ml-72 py-2 mr-2 px-4 text-orange  rounded-full'>Get in touch</button>

                </div>
            </div>

        </>
    )
}

export default Faq