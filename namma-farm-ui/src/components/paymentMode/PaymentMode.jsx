import React from 'react'

const PaymentMode = () => {
    return (
        <>
            <div className='container pt-32 pr-96 pb-28'>
                <p className='text-3xl mb-4 ml-28 mr-96'>Make Payment</p>
                <div className="options border-2 ml-28">
                    <div className='flex ml-2 py-6'>
                        <input type="checkbox" id="html" name="fav_language" value="HTML" />
                        <p className='mx-4'>Credit Card / Debit Card</p>
                    </div>
                    <div className='flex bg-light-green py-6'>
                        <input className='ml-2' type="checkbox" id="html" name="fav_language" value="HTML" />
                        <p className='mx-4'>Razorpay Secure ( UPI,Cards,Wallets,NetBanking )</p>
                    </div>
                    <div className='flex justify-center flex-col items-center py-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-wallet my-4" viewBox="0 0 16 16">
                            <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1" />
                        </svg>
                        <p className='text-center my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis autem nobis corporis <br /> tenetur quia perferendis tempore excepturi eveniet.</p>
                    </div>
                    <div className='flex ml-2 py-6'>
                        <input type="checkbox" id="html" name="fav_language" value="HTML" />
                        <p className='mx-4'>CRED Pay - earn rewords on UPI,Cards,Pay Later</p>
                    </div>
                    <div className='flex ml-2 py-6'>
                        <input type="checkbox" id="html" name="fav_language" value="HTML" />
                        <p className='mx-4'>Cash on Delivery (Pan India)</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentMode