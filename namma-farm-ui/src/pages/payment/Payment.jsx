import React from 'react'
import PaymentMode from '../../components/paymentMode/PaymentMode'
import Cart from '../../components/cart/Cart'

const Payment = () => {
  return (
    <>
    <div className="relative flex flex-col items-end">
    <Cart />
    </div>
    <PaymentMode />
    </>
  )
}

export default Payment