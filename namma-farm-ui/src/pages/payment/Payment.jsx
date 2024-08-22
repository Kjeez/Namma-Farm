import React from 'react'
import PaymentMode from '../../components/paymentMode/PaymentMode'
import Cart from '../../components/cart/Cart'

const Payment = () => {
  return (
    <>
    <div>
      <Cart />
    </div>
    <PaymentMode />
    </>
  )
}

export default Payment