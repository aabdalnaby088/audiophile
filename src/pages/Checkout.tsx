import { useSelector } from "react-redux"
import { RootState } from "../redux/store";
import { calculateCartTotal, calculateTax } from "../utils/calculateTotal";


export default function Checkout() {
    const cart = useSelector((state: RootState) => state.cart);
    const subTotal = calculateCartTotal(cart)
    const tax = calculateTax(subTotal)
    const total = subTotal + tax + 50 ;
    return (
        <div className="flex flex-col md:flex-row justify-between max-container bg-secondary ">
            <div className="bg-white m-10 rounded-xl flex-1">
                <div className="p-10 flex flex-col gap-10  w-full ">
                    <h2 className="h2-custom">Checkout</h2>
                    <div className="flex flex-col gap-20">
                    
                    {/* Billing Details  */}
                    <div className="grid grid-cols-1 gap-8">
                                            <p className="subtitle-custom text-primary">Billing Details</p>
                    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8 justify-between">
                        <div className="flex flex-col justify-between gap-5 w-full">
                            <label htmlFor="name" className="text-body label">Name</label>
                            <input type="text" name="Name" id="name" className="input" placeholder="Ahmed Mohamed" />
                        </div>
                        <div className="flex flex-col justify-between  w-full">
                            <label htmlFor="email" className="text-body label">Email Address</label>
                            <input type="text" name="email" id="email" className="input" placeholder="Ahmed@gmail.com" />
                        </div>
                        <div className="flex flex-col justify-between gap-5 w-full">
                            <label htmlFor="phone" className="text-body label">Phone Number</label>
                            <input type="text" name="Phone" id="phone" className="input" placeholder="0123456789" />
                        </div>
                        
                    </div>
                    </div>
                     {/* Shipping info */}
                    <div className="grid grid-cols-1 gap-8">
                    <p className="subtitle-custom text-primary">Billing Info</p>
                    <div className="flex flex-col gap-5 ">
                        <label htmlFor="address" className="text-body label">Address</label>
                        <input type="text" id="address" placeholder="Enter your address" className="input" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                        <div className="flex flex-col gap-5 flex-1" >
                            <label htmlFor="Postal code" className="text-body label">Postal code</label>
                            <input type="text" id="Postal code" placeholder="111346" className="input" />
                        </div>
                        <div className="flex flex-col gap-5 flex-1">
                            <label htmlFor="city" className="text-body label">City</label>
                            <input type="text" id="city" placeholder="cairo" className="input"  />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-1/2 pr-4">
                        <label htmlFor="country" className="text-body label">Country</label>
                        <input type="text" id="country" placeholder="Egypt" className="input" />
                    </div>
                    </div>
                    {/* Payment */}
                    <div className="grid grid-cols-1 gap-8">
                    <p className="subtitle-custom text-primary">Payment Details</p>
                    <div className="flex flex-col gap-5">
                        <label htmlFor="cardholder" className="text-body label">Cardholder Name</label>
                        <input type="text" id="cardholder" placeholder="Ahmed Mohamed" className="input" />
                    </div>
                    <div className="flex flex-col gap-5"></div>
                        <label htmlFor="cardnumber" className="text-body label">Card Number</label>
                        <input type="text" id="cardnumber" placeholder="1111 2222 3333 4444" className="input" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                    </div>
                </div>
            </div>
            </div>
            <div >
                <div className="bg-white m-10 rounded-xl p-10 flex flex-col gap-8">
                    <h4 className="h4-custom">SUMMARY</h4>
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
                        <div className="flex-1 flex justify-between items-center gap-4">
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-sm uppercase">
                                    {item.product.name}
                                    </p>
                                <p className="text-sm text-gray-500">
                                $ {item.product.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}
                                </p>
                                </div>
                                <p className="subtitle-custom text-gray-500">x{item.productQuality}</p>
                                </div>
                            </div>
                        ))}
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                            <p className="text-body text-gray-500">Subtotal</p>
                            <p className=" font-bold">{subTotal.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-body text-gray-500">Shipping</p>
                            <p className=" font-bold">${50}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-body text-gray-500">Tax</p>
                            <p className=" font-bold">{tax.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-body text-gray-500">Total</p>
                            <p className=" font-bold text-primary">{total.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
                        </div>
                        </div>
                        <button className="btn-1 text-center">
                            Proceed
                        </button>
                </div>
            </div>
            
        </div>
    )
}
