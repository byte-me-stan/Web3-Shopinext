import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice ({
    name: 'cart', 
    initialState: {
        cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): [],
        totalQuantity: localStorage.getItem('totalQuantity')? JSON.parse(localStorage.getItem('totalQuantity')): 0,
        totalAmount: 0,
    },
    reducers: {
        addItemToCart (state, action)  {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.cartItems.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    image: newItem.image,
                    totalPrice: newItem.price,
                    name: newItem.name
                });
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
            }
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        removeItemFromCart (state, action) {
                const id = action.payload;
                const existingItem = state.cartItems.find((item) => item.id ===id);
                state.totalQuantity = state.totalQuantity -existingItem.quantity;
                state.cartItems = state.cartItems.filter(item => item.id !== id);
                localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        updateCartQuantity (state, action) {
            const {id, quantity} = action.payload;
            const existingItem = state.cartItems.find((item) => item.id ===id);
            if(quantity === 1) {
                state.totalQuantity++;
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
            }
            else if (quantity === -1){
                state.totalQuantity--;
                if(existingItem.quantity === 1) {
                    state.cartItems = state.cartItems.filter((item)=> item.id !== id);
                }
                else {
                    existingItem.quantity--;
                    existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
                }
            }
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        emptyCart (state){
            state.cartItems = [];
            state.totalQuantity = 0;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
        }
    }
});

export const {addItemToCart, removeItemFromCart, updateCartQuantity, emptyCart} = cartSlice.actions;
export default cartSlice.reducer;

