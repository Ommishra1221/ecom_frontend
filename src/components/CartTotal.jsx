import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext)

    return (
        <div className='w-full'>
            <div className="text-2xl">
                <Title text1={'CART'} text2={'TOTALS'} />

            </div>
            <div className="flex flex-col gap-2 mt-2 test-sm">
                <div className="flex justify-between">
                    <p className="">Subtotal</p>
                    <p className="">{currency}{getCartAmount()}.00</p>
                </div>
                <div className="flex justify-between">
                    <p className="">Shipping Fee</p>
                    <p className="">{currency}{delivery_fee}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <b className="">Total</b>
                    <b className="">{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</b>
                </div>
            </div>

        </div>
    )
}

export default CartTotal
