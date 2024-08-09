import React from 'react'

const Card = () => {
  return (
    <>
    <div className="card flex shadow-lg py-2 my-8 mx-4 h-30 justify-evenly">
         <img src="ewr" alt="image" />
         <div className="text w-96">
          <h1 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis natus officiis quas possimus nisi sapiente corporis blanditiis.</p>
          <div className='flex'>
          <h1 className='text-brown font font-semibold'>More info</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right text-brown ml-2 mt-1 font-semibold " viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
          </div>
          
         </div>
    </div>
    </>
  )
}
const AboutUs = () => {
  return (
    <>
    <div className="baner1 h-96 bg-black">
      
    </div>

    <div className="banner2 pt-10  pb-10 my-5 flex justify-evenly">
      <div className="img bg-cover">
        <img className='w-96 h-96 mt-3 rounded-bl-3xl rounded-tr-3xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGi4gPwjRV_OZLBzt0llgZxYsgmVRLt9z6gA&s" alt="" />
      </div>
      <div className="text w-96">
        <h5 className='text-brown font-semibold text-3xl'>About Us</h5>
        <h1 className='text-3xl font-semibold'>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti odit iure expedita blanditiis earum recusandae corporis distinctio vitae ex totam nemo officiis at, placeat voluptatibus in aliquid, repellendus debitis exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo incidunt repudiandae at laudantium atque ut quibusdam autem unde expedita dolorem, quas itaque architecto quaerat provident sed maxime fugiat nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto culpa deserunt illo, expedita itaque facilis iusto id corrupti placeat illum nesciunt. Eveniet unde ullam expedita, exercitationem modi veritatis fuga aliquid?</p>
      </div>
    </div>

    <div className="banner3 bg-light-yellow h-60">
      <div className='pt-16 flex justify-evenly'>
          <div className="experince">
            <h1 className='text-5xl font-semibold  underline'>20+</h1>
            <p className='mt-2 text-xl'>Total experinece</p>
          </div>
          <div className="experince">
            <h1 className='text-5xl font-semibold underline'>20+</h1>
            <p className='mt-2 text-xl'>Total experinece</p>
          </div><div className="experince">
            <h1 className='text-5xl font-semibold  underline'>20+</h1>
            <p className='mt-2 text-xl'>Total experinece</p>
          </div><div className="experince">
            <h1 className='text-5xl font-semibold  underline'>20+</h1>
            <p className='mt-2 text-xl'>Total experinece</p>
          </div>
        </div>
    </div>

    <div className="banner4 flex flex-col items-center">
        <div className="trust pt-5 pb-5 my-5">
          <h1 className='text-brown font-semibold text-2xl text-center'>TRUST</h1>
          <h1 className='font-semibold text-4xl text-center'>Why Choose Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="more-info w-auto pb-20  flex-wrap flex justify-evenly">
            <div className="left">
              <Card />
              <Card />
            </div>
            <div className="right">
              <Card />
              <Card />
            </div>
        </div>
      </div>

      <div className="banner4 bg-yellow h-60 pt-12 flex justify-evenly">
           <div className="text pt-5 pb-5 mr-20">
           <h1 className='text-5xl'>Start your journey with Us</h1>
           <p className='text-2xl mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
           </div>
           <div className="btn pt-9 pb-5 ml-20">
                <button className='bg-black text-white p-3 rounded-full'>Get in touch</button>
           </div>
      </div>

      <div className="banner5 flex flex-col my-5 items-center">
        <div className="text my-5">
            <h1 className='text-3xl font-semibold'>Meet our team</h1>
        </div>
        <div className="profile-cards flex justify-evenly border-2 my-4 items-center">
        <img className='mx-4 py-5' width={200} src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt="image" />
          <img className='mx-4 py-5' width={200} src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt="image" />
          <img className='mx-4 py-5' width={200} src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt="image" />
          <img className='mx-4 py-5' width={200} src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt="image" />
          <img className='mx-4 py-5' width={200} src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt="image" />
        </div>
      </div>
    </>
  )
}

export default AboutUs