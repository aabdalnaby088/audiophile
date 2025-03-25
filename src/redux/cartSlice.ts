import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, ProductItem } from "../constants";
import { addItemToCartLocal, clearCartLocal, getCartLocal, removeItemFromCartLocal } from "../utils/cartFn";

const cart = getCartLocal(); 

const initialState: Cart = cart
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<ProductItem>) => {
            const item = action.payload;
            
            // Call local storage function
            addItemToCartLocal(item);
            
            // Update Redux state
            const existingItemIndex = state.items.findIndex(
                (cartItem) => cartItem.product.id === item.id
            );
            
            if (existingItemIndex !== -1) {
                // If item exists, increment productQuality
                state.items[existingItemIndex].productQuality += 1;
                state.quantity += 1;
            } else {
                // Add new item
                state.items.push({
                    productQuality: 1,
                    product: item
                });
                state.quantity += 1;
            }
        },
        removeItemFromCart: (state, action: PayloadAction<ProductItem>) => {
            const item = action.payload;
            
            // Call local storage function
            removeItemFromCartLocal(item);
            
            // Update Redux state
            state.items = state.items.filter(
                (cartItem) => cartItem.product.id !== item.id
            ) ; // Type assertion for TypeScript
            state.quantity = state.items.length;
        },
        decreaseItemQuantity: (state, action: PayloadAction<ProductItem>) => {
            const item = action.payload;
            const existingItemIndex = state.items.findIndex(
                (cartItem) => cartItem.product.id === item.id
            );
            
            if (existingItemIndex !== -1) {
                const currentQuality = state.items[existingItemIndex].productQuality;
                if (currentQuality > 1) {
                    // Decrease quantity if more than 1
                    state.items[existingItemIndex].productQuality -= 1;
                    state.quantity -= 1;
                    localStorage.setItem('cart', JSON.stringify(state));
                } else {
                    removeItemFromCartLocal(item);
                    // update redux state
                    state.items = state.items.filter(
                        (cartItem) => cartItem.product.id !== item.id
                    ) ; 
                    state.quantity = state.items.length;
                        }
            }
        },
        clearCart: (state) => {
            // Call local storage function
            clearCartLocal();
            
            // Reset Redux state
            state.quantity = 0;
            state.items = [];
        }
    }
});



export const { addItemToCart, removeItemFromCart, clearCart, decreaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;