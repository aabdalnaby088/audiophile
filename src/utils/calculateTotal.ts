import { Cart } from "../constants";



export const calculateCartTotal = (cart: Cart) => {
    let total = 0;
    cart.items.forEach((item) => total += item.product.price * item.productQuality);
    return total; 
}

export const calculateTax = (total: number) => {
    return total * 0.10; 
}