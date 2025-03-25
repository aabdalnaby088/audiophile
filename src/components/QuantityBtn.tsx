import { BsPlusLg } from "react-icons/bs";
import { TiMinus } from "react-icons/ti";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {  ProductItem } from "../constants";

interface QuantityBtnProps {
    incFn: () => void;
    decFn: () => void;
    product:ProductItem
}

export default function QuantityBtn({ incFn, decFn, product }: QuantityBtnProps) {
    const items = useSelector((state: RootState) => state.cart.items);
    
    const cartItem = items.find((item) => item.product.id === product.id);
    const quantity = cartItem ? cartItem.productQuality : 0;

    function increaseQuantity() {
        incFn?.(); 
    }

    function decreaseQuantity() {
        decFn?.(); 
    }
    return (
        <div className="bg-secondary p-5 outline-0 flex justify-between items-center gap-5 ">
            <button type="button" className="cursor-pointer text-stone-500" onClick={increaseQuantity}>
            <BsPlusLg />
            </button>
            <span className="">{quantity}</span>
            <button type="button" className="cursor-pointer text-stone-500" onClick={decreaseQuantity}>
                <TiMinus />
            </button>

        </div>
    )
}
