

function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case 'customer/createCustomer':
            return { ...state, fullName: action.payload.fullName, natioanlID: action.payload.natioanlID, createdAt: action.payload.createdAt };

        default: return state
    }
}

//create action creator
function deposit(amount) {
    return { type: 'account/deposit', payload: amount }
}
function withdraw(amount) {
    return { type: 'account/withdraw', payload: amount }
}
function requestLoan(amount, purpose) {
    return { type: 'account/requestLoan', payload: { amount, purpose } }
}
function payLoan() {
    return { type: 'account/payLoan' }
}

const initialStateCustomer = {
    fullName: '',
    nationalID: '',
    createdAt: ''
}

// action creators
function createCustomer(fullName, natioanlID) {
    return { type: 'customer/createCustomer', payload: { fullName, natioanlID, createdAt: new Date().toISOString() } }
}

function updateName(fullName) {
    return { type: 'account/updateName', payload: fullName }
}