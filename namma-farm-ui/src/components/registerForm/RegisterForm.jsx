import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  const [state, setState] = useState(false)

  return (
    <>
      <div className="form border-2 mx-60 my-4">
        <div className="top h-16 flex">
          <div className={(state ? `w-full text-center hover:cursor-pointer` : `bg-black w-full text-center hover:cursor-pointer`)} onClick={() => setState(false)}><p className={state ? `text-2xl mt-1 text-black pt-3` : 'text-2xl text-white mt-1 pt-3'}>Sign in</p></div>
          <div className={!state ? `w-full text-center hover:cursor-pointer` : `bg-black w-full text-center hover:cursor-pointer`} onClick={() => setState(true)} ><p className={!state ? 'text-black text-2xl pt-3' : 'text-white text-2xl pt-3'}>Sign Up</p></div>
        </div>
        <div className="bottom-section flex items-center justify-evenly py-32">
          <div>
            <p className='mb-1'>Enter Your name</p>
            <input className='border-2 mb-2 py-2 w-96' type="email" placeholder='Enter Your Email' />
            <p className='mb-1'>Enter E-mail address</p>
            <input className='border-2 mb-2 py-2 w-96' type="email" placeholder='Enter Your Email' />
            <p>Password</p>
            <input className='border-2 py-2  w-96' type="password" placeholder='Enter Your Password' />
            <p className='mt-2'>Re-Enter Password</p>
            <input className='border-2 py-2  w-96' type="password" placeholder='Enter Your Password' />
            <p className='mt-5'>Already an memeber ? <Link className='text-green' to="/login">Sign In</Link> </p>
          </div>

          <div>
            <button className='bg-black mt-72 text-white py-2 px-4 rounded-full'>Create Account</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterForm