import React from 'react'
import { Link } from 'react-router-dom'
import SingleOrder from '../../components/singleOrder/SingleOrder'

const OrderHistory = () => {
    return (
        <>
            <div className='flex'>
                <div className="left-div w-96 ml-12">
                    <ul>
                        <li className='border-b-2 my-4 border-black'>Account</li>
                        <li className='my-4'>ORDERS</li>
                        <hr />
                        <li className='my-4'>SAVED ADDRESS</li>
                        <hr />
                        <li className='my-4'>COUPONS</li>
                        <hr />
                        <li className='my-4'>EDIT PROFILE</li>
                        <hr />
                        <li className='my-4'>LOG OUT</li>
                    </ul>
                </div>
                <div className="right-div  w-full mx-12">
                    <SingleOrder />
                    <SingleOrder />
                    <SingleOrder />
                </div>
            </div>
        </>
    )
}

export default OrderHistory