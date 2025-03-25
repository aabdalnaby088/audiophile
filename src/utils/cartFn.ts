import { Cart, ProductItem } from "../constants";





export const getCartLocal = (): Cart => {
    const cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(cart);
    }
    return {
        quantity: 0,
        items: [] 
    };
};

export const addItemToCartLocal = (item: ProductItem): void => {
    const cart: Cart = getCartLocal();
    
    // Check if item exists in cart
    const isItemInCart = cart.items.some((i) => i.product.id === item.id);
    
    if (isItemInCart) {
        
        const existingItem = cart.items.find((i) => i.product.id === item.id);
        if (existingItem) {
            existingItem.productQuality += 1; 
            cart.quantity += 1; 
        }
    } else {
        // Add new item
        cart.items.push({
            productQuality: 1,
            product: item
        });
        cart.quantity += 1; 
    }
    
    // Persist to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
};
export const removeItemFromCartLocal = (item: ProductItem): void => {
    const cart: Cart = getCartLocal();
    
    // Filter out the item by product id
    cart.items = cart.items.filter(
        (cartItem) => cartItem.product.id !== item.id
    ); 
    
    cart.quantity = cart.items.length; 
    
    localStorage.setItem('cart', JSON.stringify(cart));
};

export const clearCartLocal = (): void => {
    localStorage.removeItem('cart');
};