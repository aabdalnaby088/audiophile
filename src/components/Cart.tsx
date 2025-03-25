import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { addItemToCart, clearCart, decreaseItemQuantity } from "../redux/cartSlice";
import QuantityBtn from "./QuantityBtn";
import { calculateCartTotal } from "../utils/calculateTotal";
import { Link } from "react-router-dom";

export default function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.cart ); 
    
    function handleClearCart(){
        dispatch(clearCart())
    }
    
    return (
    <div className="bg-white rounded-lg p-6 w-[350px] shadow-lg flex flex-col gap-6">
            {/* Header: Cart Title and Remove All */}
            <div className="flex justify-between items-center">
                <h5 className="text-lg font-bold uppercase tracking-wider">
                    Cart ({cart.quantity})
                </h5>
                <button
                    type="button"
                    className="text-sm text-gray-500 hover:text-orange-500 underline"
                    onClick={handleClearCart}
                >
                    Remove all
                </button>
            </div>

            {/* Cart Items */}
            <div className="flex flex-col gap-4">
                {cart.items.map((item, index) => (
                    
                    <div
                        key={index}
                        className="flex items-center justify-between gap-4"
                    >
                        {/* Product Image */}
                        <img
                            src={item.product.image} // Ensure your Product interface has an image property
                            alt={item.product.name}
                            className="w-16 h-16 rounded-lg object-cover"
                        />

                        {/* Product Name and Price */}
                        <div className="flex-1">
                            <p className="font-bold text-sm uppercase">
                                {item.product.name}
                            </p>
                            <p className="text-sm text-gray-500">
                                $ {item.product.price.toLocaleString()}
                            </p>
                        </div>

                        {/* Quantity Controls */}
                        <QuantityBtn
                            incFn={() => dispatch(addItemToCart(item.product))}
                            decFn={() => dispatch(decreaseItemQuantity(item.product))}
                            product={item.product}
                        />
                    </div>
                ))}
            </div>

            {/* Total Price */}
            <div className="flex justify-between items-center">
                <span className="text-sm uppercase text-gray-500">Total</span>
                <span className="text-lg font-bold">
                    {calculateCartTotal(cart).toLocaleString("en-US", {style:"currency", currency:"USD"})}
                </span>
            </div>

            {/* Checkout Button */}
            <Link to={'/checkout'}
                type="button"
                className=" btn-1 text-center"
            >
                Checkout
            </Link>
        </div>
    )
}
