import { createSlice } from "@reduxjs/toolkit";

// initial state 
const initialState = {
    cart: [],
};

// slice 
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            // here the payload is the new cart item 
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            // here the payload will be the id of that item 
            state.cart = state.cart.filter(curCart => curCart.pizzaId !== action.payload);
        },
        increaseItemQuantity(state, action) {
            //  find the item 
            const item = state.cart.find(item => item.pizzaId === action.payload) //here the action payload is the id of the item that we want to increase
            // increase the quantity
            item.quantity++;
            // calculate the item total price 
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuantity(state, action) {
            // just like how we increase the item quantity on top
            const item = state.cart.find(curItem => curItem.pizzaId === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        clearCart(state, action) {
            state.cart = [];
        },
    }
})

// export action creators 
export const { addItem, deleteItem, decreaseItemQuantity, increaseItemQuantity, clearCart } = cartSlice.actions;

// reducer
export default cartSlice.reducer;

// total quantity 
export const getTotalCartQuantity = state => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)

// total price 
export const getTotalCartPrice = state => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
