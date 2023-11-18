import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice'
import cartReducer from './features/cart/cartSlice'
import { createStore } from 'redux'


const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    }
})

export default store;


const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
};


function reducer(state = initialState, action) {
    switch (action.type) {
        case 'account/deposit':
            return { ...state, balance: state.balance + action.payload }
        case 'account/withraw':
            return { ...state, balance: state.balance - action.payload }
        case 'account/requestLoan':
            if (state.loan > 0) return state;
            return { ...state, loan: action.payload.amount, loanPurpose: action.payload.purpose, balance: state.balance + action.payload.amount };
        case 'account/payLoan':
            return { ...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan }
        default:
            return state;
    }
}


const testStore = createStore(reducer);

store.dispatch({ type: 'account/deposit', payload: 5000 });
store.dispatch({ type: 'account/requestLoan', payload: { amount: 1000, purpose: 'buy a car' } })
store.dispatch({ type: 'account/payLoan' })

