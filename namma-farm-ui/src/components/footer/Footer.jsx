import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <div className="footer bg-footer h-80 flex justify-evenly text-white">
        <div className="footer-linksewf flex flex-col pt-20">
          <div className='mb-4'>
          <img src="/assets/Link → logo_big.png.png" alt="image" />

          </div>
          <p>We are a eccomerce <br />platform to buy</p>
          <p>For Queries email us :</p>
          <a className='underline' href=""> <Link>welovetalking@nammafarm.in</Link></a>
          <p>For any order related Queries</p>
          <a className='underline' href=""> <Link>+91933074</Link></a>
        </div>
        <div className="footer-linksewf flex flex-col pt-20">
          <a className='underline' href=""> <Link>Home</Link></a>
          <a className='underline' href=""> <Link>About Us</Link></a>
          <a className='underline' href=""> <Link>Our Services</Link></a>
          <a className='underline' href=""> <Link>Our Products</Link></a>
          <a className='underline' href=""> <Link>Shop Now</Link></a>
        </div>
        <div className="footer-linksewf flex flex-col pt-20">
          <a className='underline' href=""> <Link>Terms of service</Link></a>
          <a className='underline' href=""> <Link>privacy policy</Link></a>
          <a className='underline' href=""> <Link>return & refund policy</Link></a>
          <a className='underline' href=""> <Link>contact us</Link></a>
          <a className='underline' href=""> <Link>corporate gifting</Link></a>
        </div>
        <div className="footer-linksewf flex flex-col pt-20">
          <p>NEWSLETTER</p>
          <p>Sign up to get the nkjdfnlsjn <br /> and more....</p>
          <input className='bg-footer border-2 px-4 py-2 mt-2 rounded-md' type="text" placeholder='your e-mail' />
          <div className="social-media-icon ml-20 mt-10">
            <p>follow as at</p>
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram m-2 ml-0" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook m-2" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer