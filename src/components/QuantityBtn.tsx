import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { TiMinus } from "react-icons/ti";

export default function QuantityBtn() {
    const [quantity, setQuantity] = useState<number>(1)
    function increaseQuantity(amount: number) {
        setQuantity(quantity => quantity + amount);
    }
    function decreaseQuantity(amount: number) {
        if (quantity > 1) {
            setQuantity(quantity => quantity - amount);
        }

    }
    return (
        <div className="bg-secondary p-5 outline-0 flex justify-between items-center gap-5 ">
            <button type="button" className="cursor-pointer text-stone-500" onClick={() => increaseQuantity(1)}>
            <BsPlusLg />
            </button>
            <span className="">{quantity}</span>
            <button type="button" className="cursor-pointer text-stone-500" onClick={() => decreaseQuantity(1)}>
                <TiMinus />
            </button>

        </div>
    )
}
