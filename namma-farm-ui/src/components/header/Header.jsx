import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import Dropdown from '../dropdown/Dropdown';
import SearchBar from '../searchBar/SearchBar';
import Faq from '../faq/Faq';
import Cart from '../cart/Cart';

const Header = () => {
  const [isCart, setIsCart] = useState(false)
  return (
    <div>
      <div className='flex justify-around bg-orange pt-4 pb-4'>
        <div className='text-white italic'>FREE express international delivery + EASY returns </div>
        <div>
          <div>
            <ul className='style:none flex'>
              <li className=' text-white mx-2'><Link to="/about">About</Link></li>
              <li className=' text-white mx-2'><Link to="/contact">Contact Us</Link></li>
              <li className=' text-white mx-2' type="button">Faq</li>
            </ul>

          </div>

        </div>
      </div>

      <div className='flex justify-evenly pt-6 pb-6'>
        <div className='logo'>
          <Link to="/"><img src="/assets/Link → logo_big.png.png" alt="logo" /></Link>
        </div>
        <div className='navigation'>
          <ul className='flex'>
            <li>
              <div className="dropdown mx-2">
                <Dropdown
                  title="Shop by Category"
                  arr={["1c", "2"]}
                />
              </div>
            </li>
            <li>
              <div className="dropdown mx-2">
                <Dropdown
                  title="Shop by Nutrition"
                  arr={["3", "4"]}
                />
              </div>
            </li>
            <li className='mx-2 text-green font-bold'>People</li>
            <li className='mx-2 text-green font-bold'>Process</li>
            <li className='mx-2 text-green font-bold'>Super Savers</li>
            <li className='mx-2 text-green font-bold'>Blog</li>

          </ul>
        </div>
        <div className="search-bar">
          <SearchBar />
        </div>
        <div className="icons flex">
          <div className="profile mx-2 "><Link to="/login">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
          </Link>
          </div>
          <div className="like mx-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart hover:cursor-pointerc " viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </div>
          <div className="bag mx-2">
            {isCart ? <Cart setIsCart={setIsCart} title="Checkout" /> :
              <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsCart(true)} width="19" height="19" fill="currentColor" class="bi bi-bag hover:cursor-pointer" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header